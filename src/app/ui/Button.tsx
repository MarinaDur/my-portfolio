import { styled } from "styled-components";
import textStyle from "./TextStyle";
import formFontStyles from "./FormFontStyles";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100%;
  ${textStyle}
  background: transparent;
  border: none;
  cursor: pointer;
  margin-top: -1rem;

  ${formFontStyles}
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
