import React from 'react'
import styled from 'styled-components'

const HeaderStyle = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
margin: 3rem 0 1rem 0;
h1 {
   display: block;
   margin: 0 auto;
   font-size: 3rem;
   font-weight: 700;
   letter-spacing: 5px;
   span {
      color: var(--red);
   }
}
`;

export default function Header() {
   return (
     <HeaderStyle>
       <h1><span>DEV</span>LAND</h1>
     </HeaderStyle>
   );
}
