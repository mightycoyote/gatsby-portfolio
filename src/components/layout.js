import * as React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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

  --med-breakpoint: 40rem;

  font-family: "Montserrat", sans-serif;
  background-color: #0a0a0a;
  color: #ececec;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Instrument Sans", sans-serif;
    font-weight: 600;
  }

  a {
    color: var(--secondary-1-2);
    text-decoration: none;

    &:hover {
      color: var(--secondary-2-0);
    }
  }

  .spaced-header {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 400;

    @media (min-width: 40rem) {
      letter-spacing: 8px;
      font-weight: 600;
      font-size: 1rem;
    }
  }

  .small-caps {
    font-size: 0.875rem; // 14px
    text-transform: uppercase;
  }

  .more {
    text-transform: uppercase;
    margin-top: 1.2rem;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1rem clamp(1rem, 6vw, 5rem);
  min-width: 275px;
  max-width: 1200px;
  height: 100vh;
  display: grid;
  grid-template-rows: min-content auto min-content;
`;

const Header = styled.header`
  display: flex;
  font-family: "Instrument Sans", sans-serif;
  justify-content: center;
  text-transform: uppercase;
  // flex-direction: column;
  align-items: center;

  // leaving placeholder for something to go on the left side
  // p {
  //     display: none;
  // }

  @media (min-width: 40rem) {
    // flex-direction: row;
    justify-content: flex-end;

    // p {
    //     display: block;
    //     letter-spacing: 1px;
    // }
  }
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
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 25rem) {
    flex-direction: row;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <BaseStyles>
        <Wrapper>
          <Header>
            <Nav>
              <ul>
                <li>
                  <Link to="#about">About</Link>
                </li>
                <li>
                  <Link to="#work">Featured Work</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
              </ul>
            </Nav>
          </Header>
          <main> {children} </main>
          <Footer>
            <div>
              <p>©2023 Sarah Wilkes</p>
            </div>
            <div>
              {/* <div>
                <StaticImage
                  src="./images/icon.png"
                  alt="Gatsby.js logo"
                  width={20}
                  height={20}
                />
              </div> */}
              <p>
                Powered by <a href="https://www.gatsbyjs.com">Gatsby</a>.
              </p>
            </div>
          </Footer>
        </Wrapper>
      </BaseStyles>
    </>
  );
};

export default Layout;
