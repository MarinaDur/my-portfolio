import styled, { css } from "styled-components";

const PageTitle = styled.h1`
  font-size: 4rem;

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 7rem;
    `}
`;

export default PageTitle;
