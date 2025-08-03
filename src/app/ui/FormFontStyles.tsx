import { css } from "styled-components";

const formFontStyles = css`
  @media (min-width: 390px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: clamp(1.5rem, 1vw, 1.8rem);
  }

  @media (min-width: 2000px) {
    font-size: clamp(2rem, 1.5vw, 3rem);
  }
`;

export default formFontStyles;
