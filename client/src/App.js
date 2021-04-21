import React, { useEffect, useState } from 'react';
import 'normalize.css';
import GlobalStyles from './style/GlobalStyles'

import Jobs from './components/Jobs';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer'

const JOB_API_URL = '/api/jobs';

async function fetchJobs(updateCb) {
   const res = await fetch(JOB_API_URL);
   let json = await res.json();
   updateCb(json)
}

function App() {
   const [jobList, updateJobs] = useState([]);

   useEffect(() => {
      fetchJobs(updateJobs);
   }, [])

   return (
     <div>
       <GlobalStyles />
       <Header />
       <div className="App">
         <Jobs jobs={jobList} />
       </div>
       <Footer />
     </div>
   );
}

export default App;
