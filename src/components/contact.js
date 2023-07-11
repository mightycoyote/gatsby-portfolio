import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const ContactStyles = styled.div`
  padding: 2rem 0;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 30rem) {
    flex-direction: row;
    > * {
      flex-basis: 100%;
    }
  }
`;

const Form = styled.form`
  accent-color: var(--secondary-2-2);
  p {
    margin-bottom: 0.5rem;
  }
  div {
    display: grid;
  }
  label {
    margin-top: 0.5rem;
  }
  button,
  input,
  textarea {
    border-radius: 3px;
  }
  button {
    font-weight: 600;
    justify-self: left;
    text-transform: uppercase;
    font-size: 0.875rem;
    padding: 3px 5px;
    margin-top: 0.75rem;
    background-color: var(--secondary-2-0);
    color: #0a0a0a;
    border: none;
    cursor: pointer;
    &:hover {
      background-color: var(--primary-0);
      color: white;
    }
  }
`;

const Address = styled.address`
  font-style: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  a {
    display: block;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 1rem;

  .bg-holder {
    background: radial-gradient(#fff 75%, #0a0a0a);
  }
`;

const Contact = () => {
  return (
    <ContactStyles>
      <h2 id="contact">Contact</h2>
      <FlexDiv>
        <Form>
          <p>Have a project or role in mind? Get in touch!</p>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="4" required />
            <button>Submit</button>
          </div>
        </Form>
        <Address>
          <div>
            <h3>Find me on:</h3>
            <ContactGrid>
              <StaticImage
                src="../images/logo-purple.svg"
                alt="Mastodon logo"
              />
              <a href="https://horrorhub.club/@mightycoyote" id="mastodon">
                Mastodon
              </a>
              <StaticImage
                src="../images/github-mark-white.svg"
                alt="GitHub logo"
              />
              <a href="https://github.com/mightycoyote" id="github">
                GitHub
              </a>
              <StaticImage
                src="../images/FrontendMentorLogo.png"
                alt="FrontendMentor logo"
              />
              <a
                href="https://www.frontendmentor.io/profile/mightycoyote"
                id="frontendmentor"
              >
                FrontendMentor.io
              </a>
              <div className="bg-holder">
                <StaticImage
                  src="../images/In-Blue-40@2x.png"
                  alt="LinkedIn logo"
                />
              </div>
              <a
                href="https://www.linkedin.com/in/sarah-wilkes-5560aaa8/"
                id="linkedin"
              >
                LinkedIn
              </a>
            </ContactGrid>
          </div>
        </Address>
      </FlexDiv>
    </ContactStyles>
  );
};

export default Contact;