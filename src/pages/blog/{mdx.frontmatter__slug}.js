import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";


const BlogDetailStyles = styled.article`
  h3 {
    padding: 0;
    margin: 1.5rem 0 1rem;
  }
`;

const BlogPost = ({ data, children }) => {
  const image = getImage(data.mdx.frontmatter.image);

  return (
    <Layout>
      <BlogDetailStyles>
        <h1>{data.mdx.frontmatter.title}</h1>
        <span>{data.mdx.frontmatter.date}</span>
        <GatsbyImage
          image={image}
          alt={data.mdx.frontmatter.image_alt}
          objectFit="contain"
          objectPosition="left top"
        />
        {children}
      </BlogDetailStyles>
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
        date(formatString: "MMMM D, YYYY")
        abstract
      }
    }
  }
`;

export default BlogPost;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
