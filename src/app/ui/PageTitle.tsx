import styled, { css } from "styled-components";

interface PageTitleProps {
  $page?: string;
}

const PageTitle = styled.h1<PageTitleProps>`
  font-size: 4rem;
  font-family: "Genos", sans-serif;
  font-weight: 400;

  ${(props) =>
    props.as === "h2" &&
    css`
      font-family: "Poiret One", sans-serif;

      font-size: 7rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-family: "Genos", sans-serif;
      font-size: 3rem;
    `}

  @media (min-width: 1024px) {
    font-size: clamp(4rem, 3vw, 8rem);

    ${(props) =>
      props.$page === "about" &&
      css`
        font-size: clamp(12rem, 12vw, 15rem);
      `}

    ${(props) =>
      props.as === "h3" &&
      css`
        font-size: 4rem;
      `}
  }
`;

export default PageTitle;
