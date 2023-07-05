import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const FeaturedItemStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 0;

  @media (min-width: 45rem) {
    flex-direction: row;

    .info {
      flex-grow: 2;
    }
    .image {
      flex-basis: 25%;
    }
  }
`;

const ReversedCard = styled(FeaturedItemStyles)`
  @media (min-width: 45rem) {
    flex-direction: row-reverse;
  }
`

const FeaturedItem = ({ node, index }) => {
  const image = getImage(node.frontmatter.image);

  return (
    <>
      {(index % 2 === 0) ? (
        <FeaturedItemStyles>
          <div className="info">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.extract}</p>
            <p className="more">
              <Link to={node.frontmatter.slug}>
                More <span className="material-icons"> arrow_outward </span>
              </Link>
            </p>
          </div>
          <div className="image">
            <GatsbyImage image={image} alt={node.frontmatter.image_alt} />
          </div>
        </FeaturedItemStyles>
      ) : (
        <ReversedCard>
          <div className="info">
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.extract}</p>
            <p className="more">
              <Link to={node.frontmatter.slug}>
                More <span className="material-icons"> arrow_outward </span>
              </Link>
            </p>
          </div>
          <div className="image">
            <GatsbyImage image={image} alt={node.frontmatter.image_alt} />
          </div>
        </ReversedCard>
      )}
    </>
  );
};

export default FeaturedItem;
