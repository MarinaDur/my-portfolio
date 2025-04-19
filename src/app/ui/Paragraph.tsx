import { styled } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: "Raleway", sans-serif;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 390px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) {
    font-size: 2.3rem;
  }
`;

export default Paragraph;
