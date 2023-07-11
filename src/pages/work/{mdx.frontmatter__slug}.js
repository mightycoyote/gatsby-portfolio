import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { Seo } from "../../components/seo";

const ProjectDetail = ({ data, children }) => {
    const image = getImage(data.mdx.frontmatter.image);

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <GatsbyImage image={image} alt={data.mdx.frontmatter.image_alt} />
            { children }
        </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        image_alt
        title
        liveURL
      }
    }
  }
`

export const Head = () => <Seo />

export default ProjectDetail;