import React from "react";
import styled from "styled-components";

export default function footer() {
  const FooterStyle = styled.footer`
    margin-top: 3rem;
    text-align: center;
  `;

  return (
    <FooterStyle>
      <>© {new Date().getFullYear()}, Jim Montour</>
    </FooterStyle>
  );
}
