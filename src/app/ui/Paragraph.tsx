import { styled } from "styled-components";

interface ParagraphProps {
  $fontSize?: string;
}

const Paragraph = styled.p<ParagraphProps>`
  font-size: 1.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  line-height: 1.5;

  @media (min-width: 390px) and (max-width: 430px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) and (max-width: 1023px) {
    font-size: 2.3rem;
  }

  @media (min-width: 1024px) {
    font-size: ${(props) => props.$fontSize || "1.5rem"};
  }
`;

export default Paragraph;
