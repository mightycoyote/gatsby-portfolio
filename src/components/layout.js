import * as React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// Josh's Custom CSS Reset
// https://www.joshwcomeau.com/css/custom-css-reset/

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
`;

const BaseStyles = styled.div`
  --primary-0: rgba(201, 80, 64, 1);
  --primary-1: rgba(255, 169, 158, 1);
  --primary-2: rgba(235, 121, 106, 1);
  --primary-3: rgba(170, 50, 35, 1);
  --primary-4: rgba(131, 22, 7, 1);

  --secondary-1-0: rgba(42, 109, 124, 1);
  --secondary-1-1: rgba(112, 165, 178, 1);
  --secondary-1-2: rgba(68, 131, 145, 1);
  --secondary-1-3: rgba(24, 90, 105, 1);
  --secondary-1-4: rgba(7, 67, 81, 1);

  --secondary-2-0: rgba(135, 185, 59, 1);
  --secondary-2-1: rgba(203, 239, 148, 1);
  --secondary-2-2: rgba(169, 216, 98, 1);
  --secondary-2-3: rgba(107, 156, 32, 1);
  --secondary-2-4: rgba(76, 120, 7, 1);

  font-family: "Montserrat", sans-serif;
  background-color: #0a0a0a;
  color: var(--primary-0);

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Instrument Sans", sans-serif;
    font-weight: 600;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 275px;
  max-width: 1200px;
  display: grid;
  grid-template-rows: min-content auto min-content;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    gap: 15px;
    padding: 0;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: row;
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BaseStyles>
        <Wrapper>
          <Nav>
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#work">Featured Work</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Nav>
          <main> {children} </main>
          <Footer>
            <p>©2023 Sarah Wilkes</p>
          </Footer>
        </Wrapper>
      </BaseStyles>
    </>
  );
};

export default Layout;
