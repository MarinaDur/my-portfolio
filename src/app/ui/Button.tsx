import { styled } from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100%;
  font-size: 3rem;
  /* border-radius: 20px; */
  background: transparent;
  border: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  color: var(--dark);
  text-align: left;
  font-family: "Raleway", sans-serif;
  margin-top: -1rem;

  &:hover {
    background: var(--light);
    /* color: #fff; */
  }
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
