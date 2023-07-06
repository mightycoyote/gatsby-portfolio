import * as React from "react";
import styled from "styled-components";

const ContactStyles = styled.div`
  h2 {
    color: var(--secondary-2-2);
    padding: 1rem 0;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 25rem) {
    flex-direction: row;
    > * {
      flex-basis: 100%;
    }
  }
`;

const Form = styled.form`
  p {
    margin-bottom: 1rem;
  }
  div {
    display: grid;
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

const Contact = () => {
  return (
    <ContactStyles>
      <h2 id="contact" className="med-header">
        Contact
      </h2>
      <FlexDiv>
        <Form>
          <p>Have a project or role in mind? Get in touch!</p>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" required />
            <button>Submit</button>
          </div>
        </Form>
        <Address>
          <div>
            <h3>Find me on:</h3>
            <div>
              <a href="https://horrorhub.club/@mightycoyote" id="mastodon">Mastodon</a>
              <a href="https://github.com/mightycoyote" id="github">GitHub</a>
              <a href="https://www.frontendmentor.io/profile/mightycoyote" id="frontendmentor">FrontendMentor.io</a>
            </div>
          </div>
        </Address>
      </FlexDiv>
    </ContactStyles>
  );
};

export default Contact;
