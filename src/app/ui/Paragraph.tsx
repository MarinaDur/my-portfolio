import { styled } from "styled-components";

const Paragraph = styled.p`
  font-size: 1.8rem;
  font-family: "Genos", sans-serif;
  font-weight: 300;
  line-height: 1.2;

  @media (min-width: 390px) and (max-width: 430px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) and (max-width: 430px) {
    font-size: 2.3rem;
  }
`;

export default Paragraph;
