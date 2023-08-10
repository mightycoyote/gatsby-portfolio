import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const StyledImage = styled(GatsbyImage)`
  width: 100%;

  @media (min-width: 30rem) {
    width: 50%;
  }
`;

const TopSectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 2rem 0;

  .span {
    text-transform: uppercase;
    color: var(--secondary-1-1);
  }

  @media (min-width: 30rem) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectDetailStyles = styled.article`

`;

const ProjectDetail = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.image);

  return (
    <Layout>
      <ProjectDetailStyles>
        <h1>{data.mdx.frontmatter.title}</h1>
        <TopSectionStyles>
          <div>
            <p>
              <span className="span">Abstract:</span>
              <br />
              {data.mdx.frontmatter.abstract}
            </p>
            <p>
              <span className="span">Built with:</span>
              <br /> {data.mdx.frontmatter.built_with}
            </p>
            {data.mdx.frontmatter.challengeURL && (
              <p>
                <a className="more" href={data.mdx.frontmatter.challengeURL}>
                  view challenge spec{" "}
                  <span className="material-icons"> arrow_outward </span>
                </a>
              </p>
            )}
            <p>
              <a className="more" href={data.mdx.frontmatter.liveURL}>
                visit live site{" "}
                <span className="material-icons"> arrow_outward </span>
              </a>
            </p>
          </div>
          <StyledImage image={image} alt={data.mdx.frontmatter.image_alt} />
        </TopSectionStyles>
        {children}
      </ProjectDetailStyles>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        image_alt
        title
        liveURL
        challengeURL
        abstract
        built_with
      }
    }
  }
`;

export default ProjectDetail;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
