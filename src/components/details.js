import * as React from "react";
import styled from "styled-components";

const DetailStyles = styled.details`
  margin: 1rem 0;
  color: var(--primary-1);
  summary {
    color: var(--primary-2);
  }
`;

const Details = ({ summary, children }) => {
  return (
    <DetailStyles>
      <summary>{summary}</summary>
      {children}
    </DetailStyles>
  );
};

export default Details;
