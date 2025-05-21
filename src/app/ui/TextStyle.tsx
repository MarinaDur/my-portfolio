import { css } from "styled-components";

const textStyle = css`
  font-size: 1.5rem;
  text-align: left;
  color: var(--light);
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  font-weight: 400;

  @media (min-width: 390px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: clamp(1.5rem, 1vw, 1.8rem);
  }
`;

export default textStyle;
