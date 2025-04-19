import { styled } from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100%;
  padding: 1rem;
  font-size: 1.5rem;
  border-radius: 20px;
  background: var(--light);
  border: 0.5px solid var(--dark);
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: var(--dark);

  &:hover {
    background: var(--light);
    color: #fff;
  }
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
