import { styled } from "styled-components";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
}

const StyledButton = styled.button`
  width: 100%;
  font-size: 1.5rem;
  /* border-radius: 20px; */
  background: transparent;
  border: none;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  color: var(--light);
  text-align: left;
  font-family: "Montserrat", sans-serif;
  margin-top: -1rem;

  &:hover {
    transform: scale(1.2); /* color: #fff; */
  }

  @media (min-width: 390px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) {
    font-size: 2.3rem;
  }
`;

function Button({ children }: ButtonProps) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
