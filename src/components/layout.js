import * as React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Link } from "gatsby";

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
    overflow: auto;
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
  // teal
  --primary-0: rgba(42, 108, 124, 1);
  --primary-1: rgba(112, 165, 177, 1);
  --primary-2: rgba(68, 130, 145, 1);
  --primary-3: rgba(24, 89, 105, 1);
  --primary-4: rgba(7, 66, 81, 1);
  // blue
  --secondary-1-0: rgba(54, 72, 136, 1);
  --secondary-1-1: rgba(126, 140, 190, 1);
  --secondary-1-2: rgba(82, 99, 159, 1);
  --secondary-1-3: rgba(34, 51, 115, 1);
  --secondary-1-4: rgba(15, 31, 88, 1);
  // green
  --secondary-2-0: rgba(48, 150, 75, 1);
  --secondary-2-1: rgba(126, 204, 146, 1);
  --secondary-2-2: rgba(79, 175, 104, 1);
  --secondary-2-3: rgba(26, 126, 52, 1);
  --secondary-2-4: rgba(5, 97, 30, 1);


  // sadly, these don't work as variables
  --sm-breakpoint: 30rem;
  --med-breakpoint: 40rem;
  --med-breakpoint-2: 45rem;

  font-family: "Montserrat", sans-serif;
  font-size: clamp(0.875rem, 2.5vw, 1rem);
  background-color: #0a0a0a;
  color: #ececec;
  overflow: visible;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }

  h2 {
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--secondary-2-2);
    padding: 1rem 0;
  }

  h3 {
    padding-bottom: 1rem;
    font-family: "Calistoga", serif;
    font-size: clamp(1rem, 3vw, 1.5rem);
    color: var(--secondary-1-2);
  }

  a {
    color: var(--secondary-2-2);
    text-decoration: none;

    &:hover {
      color: var(--primary-0);
    }
  }

  .spaced-header {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 6px;
    font-weight: 400;

    @media  {
      letter-spacing: 9px;
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
  display: grid;
  grid-template-rows: min-content auto min-content;
`;

const Header = styled.header`
  display: flex;
  font-family: "Montserrat", sans-serif;
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
  padding: 3rem 0 1rem;
  @media (min-width: 30rem) {
    flex-direction: row;
  }
  .right-div {
    display: flex;
    flex-direction: row;
    gap: .5rem;
  }
  .gatsby-logo {
    width: 20px;
    height: 20px;
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
                  <Link to="#work">Work</Link>
                </li>
                <li>
                  <Link to="#contact">Contact</Link>
                </li>
                <li>
                  <Link to="">Resume</Link>
                </li>
              </ul>
            </Nav>
          </Header>
          <main> {children} </main>
          <Footer>
            <div>
              <p>©2023 Sarah Wilkes</p>
            </div>
            <div className="right-div">
              <div className="gatsby-logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 28"
                  focusable="false"
                >
                  <title>Gatsby</title>
                  <circle cx="14" cy="14" r="14" fill="#639" />
                  <path
                    fill="#fff"
                    d="M6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                  />
                </svg>
              </div>
              <p>
                Powered by <a href="https://www.gatsbyjs.com">GatsbyJS</a>.
              </p>
            </div>
          </Footer>
        </Wrapper>
      </BaseStyles>
    </>
  );
};

export default Layout;
