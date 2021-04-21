import React, { useState, useEffect } from 'react'
import Job from './Job';
import JobModal from './JobModal'
import styled from 'styled-components'

const JobsStyle = styled.div`
.top-bar {
   text-align: center;
   display: block;
}
  .job-pages {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    button {
      background: var(--black);
      color: var(--white);
    }
  }
`;

export default function Jobs({ jobs }) {
   useEffect(() => {
      const welcomeItem = document.querySelectorAll('.welcome-item');
      let delay = 0;
      welcomeItem.forEach(item => {
         setTimeout(() => item.style.opacity = 1, delay);
         delay += 500;
      })
   }, []);

   // modal
   const [open, setOpen] = useState(false);
   const [selectedJob, selectJob] = useState({});
   function handleClickOpen() {
      setOpen(true);
   }
   function handleClose() {
      setOpen(false);
   }

   // pagination
   const numJobs = jobs.length;
   const numPages = Math.ceil(numJobs / 50);
   const [activeStep, setActiveStep] = useState(0);
   const jobsOnPage = jobs.slice(activeStep * 50, (activeStep * 50) + 50);

   function scrollToTop() {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
         window.requestAnimationFrame(scrollToTop);
         window.scrollTo(0, c - c / 8);
      }
   };

   function handleNext() {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
      scrollToTop();
   }

   function handleBack() {
      setActiveStep(prevActiveStep => prevActiveStep - 1);
      scrollToTop();
   }

   return (
     <JobsStyle className="jobs">
       <div className="top-bar">
         <h3>{numJobs} Available Developer Jobs!</h3>
         <h5>Click on a job for a description and link to apply.</h5>
       </div>
       <JobModal open={open} job={selectedJob} handleClose={handleClose} />
       <table>
         <thead>
           <tr>
             <th>POSITION</th>
             <th>COMPANY</th>
             <th>CITY</th>
             <th>POSTED</th>
           </tr>
         </thead>
         <tbody>
           {jobsOnPage.map((job, i) => (
             <Job
               key={i}
               job={job}
               onClick={() => {
                 handleClickOpen();
                 selectJob(job);
               }}
             />
           ))}
         </tbody>
       </table>

       <div className="job-pages">
         {activeStep > 0 && (
           <button onClick={() => handleBack()}> ← Prev. Page</button>
         )}
         Page {activeStep + 1} of {numPages}
         {activeStep + 2 <= numPages && (
           <button onClick={() => handleNext()}>Next Page →</button>
         )}
       </div>
     </JobsStyle>
   );
}
