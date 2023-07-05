import * as React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import FeaturedItem from "./featuredItem";

const FeaturedStyles = styled.div`
  h2 {
    color: var(--secondary-2-2);
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { frontmatter: { featured: { eq: true } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            extract
            featured
            slug
            title
            image {
              childImageSharp {
                gatsbyImageData
              }
            }
            image_alt
          }
        }
      }
    }
  `);

  return (
    <FeaturedStyles>
      <h2 className="med-header">Featured Work</h2>
      {data.allMdx.nodes.map((node) => (
        <FeaturedItem node={node} key={node.frontmatter.title} />
      ))}
    </FeaturedStyles>
  );
};

export default Featured;
