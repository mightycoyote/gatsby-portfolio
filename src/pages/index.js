import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import { Seo } from "../components/seo";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";
import Featured from "../components/featured";
import Contact from "../components/contact";

const Hero = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  padding: clamp(2rem, 8vw, 8rem) 0;
  gap: 2rem;

  .name {
    margin-top: clamp(1rem, 4vw, 2rem);
    margin-bottom: 1rem;
    font-family: "Calistoga", serif;
    font-weight: 400;
    font-size: clamp(2rem, 6vw, 4rem);
    color: var(--blue-text);
  }

  .spaced-header {
    color: var(--secondary-1-1);
  }

  .img-wrapper {
    max-width: clamp(10rem, 22vw, 20rem);
  }

  @media (min-width: 40rem) {
    flex-direction: row;
    gap: clamp(32px, 8vw, 100px);
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <Hero>
        <div>
          <h1 className="spaced-header">About me</h1>
          <p className="name">Sarah Wilkes</p>
          <p>
            Hi! I'm a frontend web developer and content strategy enthusiast. I <em>love</em> problem-solving, Google Fu, JavaScript, and yes, even CSS.
          </p>
          <p className="more">
            <Link to ="/about">
              More <span className="material-icons"> arrow_outward </span>
            </Link>
          </p>
        </div>
        <div className="img-wrapper">
          <StaticImage
            src="../images/Sarah_octocat.webp"
            alt="Github Octocat avatar, wearing t-shirt, jeans, glasses, and holding a baguette"
            placeholder="blurred"
            loading="eager"
          />
        </div>
      </Hero>
      <Featured />
      <Contact />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo />;

