import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";


const BlogDetailStyles = styled.article`
  h1 {
    margin-bottom: .25rem;
  }
  h3 {
    padding: 0;
    margin: 1.5rem 0 1rem;
  }
  .date {
    margin-bottom: 2rem;
    text-transform: uppercase;
    color: var(--secondary-1-1);
    font-size: 0.875rem;
    letter-spacing: 2px;
  }

`;

const BlogPost = ({ data, children }) => {

  return (
    <Layout>
      <BlogDetailStyles>
        <h1>{data.mdx.frontmatter.title}</h1>
        {/* <p className="date">{data.mdx.frontmatter.date} | Tagged: {data.mdx.frontmatter.tags.join(', ')}</p> */}
        <p className="date">{data.mdx.frontmatter.date}</p>
        {children}
      </BlogDetailStyles>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        abstract
        tags
      }
    }
  }
`;

export default BlogPost;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;
