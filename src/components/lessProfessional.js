import * as React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const LpStyles = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: 40rem) {
        flex-direction: row;
        > * {
            flex-basis: 100%;
        }
    }
`;

const LessProfessional = ({ children }) => {
    return (
        <LpStyles>
            <div>{children}</div>
            <div>
                <StaticImage src="../images/marshmallow-cat.png" alt="a cat" />
            </div>
        </LpStyles>
    )
}

export default LessProfessional;