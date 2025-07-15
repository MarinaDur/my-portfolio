import styled, { css } from "styled-components";

interface PageTitleProps {
  $page?: string;
  $color?: string;
  $fontSize?: string;
  $variant?: string;
}

const PageTitle = styled.h1<PageTitleProps>`
  font-size: 8rem;
  font-family: "Poiret One", sans-serif;
  font-weight: 400;
  color: ${(props) => props.$color || "var(--dark)"};
  margin-bottom: 1rem;
  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 8rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-family: "Montserrat", sans-serif;
      font-size: 1.8rem;
      margin-bottom: 0;
    `}

  @media (min-width: 1024px) {
    font-size: clamp(2rem, 2vw, 5rem);
    margin-bottom: 0;

    ${(props) =>
      props.$page === "about" &&
      css`
        font-size: clamp(12rem, 12vw, 18rem);
      `}

    ${(props) =>
      props.$page === "contact" &&
      css`
        font-size: clamp(12rem, 12vw, 15rem);
      `}

    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(3.5rem, 2.5vw, 4rem);
      `}

   ${({ as, $fontSize }) =>
      as === "h3" &&
      css`
        font-size: ${$fontSize || "2rem"};
      `}
  }

  @media (min-width: 1920px) {
    ${({ as }) =>
      as === "h3" &&
      css`
        font-size: clamp(2.5rem, 3vw, 4rem);
      `}
  }

  @media (min-width: 2000px) {
    ${(props) =>
      props.$page === "about" &&
      css`
        font-size: clamp(17rem, 13vw, 30rem);
      `}

    ${({ as }) =>
      as === "h3" &&
      css`
        font-size: clamp(2.5rem, 2vw, 4rem);
      `}
  }

  @media (min-width: 1650px) and (max-width: 1999px) {
    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(4rem, 4vw, 5rem);
      `}
  }
  @media (min-width: 2000px) {
    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(5rem, 6vw, 6rem);
      `}
  }
`;

export default PageTitle;
