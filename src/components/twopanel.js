import * as React from "react";
import styled from "styled-components";
// import { GatsbyImage, getImage } from "gatsby-plugin-image";

const TwoPanelStyles = styled.div``;

const TwoPanel = ({ children }) => {
    // const image = getImage(props.pageContext.frontmatter.image);

    return (
        <TwoPanelStyles>
            <div> {children} </div>
            <div>
                {/* <GatsbyImage image={image}  /> */}
            </div>
        </TwoPanelStyles>
    )
}

export default TwoPanel;