import React from "react";
import styled from "styled-components";

export default function footer() {
  const FooterStyle = styled.footer`
  text-align: center;
  margin-top: 3rem;
  `;

  return (
    <FooterStyle className="mt-auto py-5 text-center ">
      <>© {new Date().getFullYear()}, Jim Montour</>
    </FooterStyle>
  );
}
