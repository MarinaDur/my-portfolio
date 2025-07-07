import styled, { css } from "styled-components";

interface PageTitleProps {
  $page?: string;
  $color?: string;
  $fontSize?: string;
  $variant?: string;
}

const PageTitle = styled.h1<PageTitleProps>`
  font-size: 2rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  color: ${(props) => props.$color || "var(--dark)"};

  ${(props) =>
    props.as === "h2" &&
    css`
      font-family: "Poiret One", sans-serif;

      font-size: 4rem;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-family: "Montserrat", sans-serif;
      font-size: 2.5rem;
    `}

  @media (min-width: 1024px) {
    font-size: clamp(2rem, 2vw, 5rem);

    ${(props) =>
      props.$page === "about" &&
      css`
        font-size: clamp(12rem, 12vw, 15rem);
      `}

    ${(props) =>
      props.$page === "contact" &&
      css`
        font-size: clamp(12rem, 12vw, 15rem);
      `}

    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(7rem, 5vw, 10rem);
      `}

   ${({ as, $fontSize }) =>
      as === "h3" &&
      css`
        font-size: ${$fontSize || "2rem"};
      `}
  }
`;

export default PageTitle;
