import { styled, css } from "styled-components";

interface ParagraphProps {
  $fontSize?: string;
  $page?: string;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: 1.3rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 390px) and (max-width: 430px) {
    font-size: 1.5rem;
  }
  @media (min-width: 430px) and (max-width: 1023px) {
    font-size: 1.7rem;
  }

  @media (min-width: 1024px) and (max-width: 1400px) {
    font-size: clamp(1.5rem, 1.5vw, 1.8rem);

    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(1.3rem, 0.8vw, 1.5rem);
      `}
  }

  @media (min-width: 1400px) and (max-width: 1649px) {
    font-size: clamp(1.8rem, 1.8vw, 2.2rem);
    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(1.7rem, 1vw, 1.9rem);
      `}
  }
  @media (min-width: 1650px) and (max-width: 2000px) {
    font-size: clamp(1.9rem, 2vw, 2.6rem);

    ${(props) =>
      props.$page === "projects" &&
      css`
        font-size: clamp(1.9rem, 1.5vw, 2.2rem);
      `}
  }

  @media (min-width: 2000px) {
    font-size: clamp(2.2rem, 2.2vw, 3rem);
  }
`;

export default Paragraph;
