import * as React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const ItemStyles = styled.li`
  margin: 1rem 0;
`;

const WorkIndex = ({ data }) => {
  return (
    <Layout>
      <h1>Work Archive</h1>
      <ul>
        {data.allMdx.nodes.map((node) => (
          <ItemStyles key={node.id}>
            <Link to={node.frontmatter.slug}>{node.frontmatter.title}<span className="material-icons"> arrow_outward </span></Link>
            <br />
            {node.frontmatter.abstract}
          </ItemStyles>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      filter: { internal: { contentFilePath: { regex: "/lio/work//" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          abstract
          date
          slug
          title
        }
        id
      }
    }
  }
`;

export default WorkIndex;

export const Head = () => <Seo title="Work Archive" />;
