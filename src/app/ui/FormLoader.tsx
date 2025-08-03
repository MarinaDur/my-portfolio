import { keyframes, styled } from "styled-components";
import textStyle from "./TextStyle";
import formFontStyles from "./FormFontStyles";

const blink = keyframes`
  0%  { visibility: hidden;}
    100%  { visibility: visible;}
`;

const print = keyframes`
   0% { content: 'S'}
      10% { content: 'Se'}
      20% { content: 'Sen'}
      30% { content: 'Send'}
      40% { content: 'Sendi'}
      50% { content: 'Sendin'}
      60% { content: 'Sending'}
      70% { content: 'Sending.'}
      80% { content: 'Sending..'}
      90% , 100% { content: 'Sending...'}
`;

const StyledLoader = styled.span`
  ${textStyle}
  position: relative;

  &::before {
    content: "";
    animation: 5s ${print} linear alternate infinite;
  }

  &::after {
    content: "";
    position: absolute;
    right: -4px;
    top: 50%;
    transform: translatey(-45%);
    width: 2px;
    height: 1.3em;
    background: currentColor;
    opacity: 0.8;
    animation: 1s ${blink} steps(2) infinite;
  }

  ${formFontStyles}
`;

function FormLoader() {
  return <StyledLoader></StyledLoader>;
}

export default FormLoader;
