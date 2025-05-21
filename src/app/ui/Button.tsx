import { styled } from "styled-components";
import textStyle from "./TextStyle";

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
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
