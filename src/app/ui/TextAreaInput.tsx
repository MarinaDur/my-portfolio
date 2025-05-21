import { styled } from "styled-components";

interface InputTextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextAreaField = styled.textarea`
  font-size: 1.4rem;
  height: 10rem;
  border: none;
  border-bottom: 2px solid var(--light);
  outline: none;
  width: 100%;
  resize: none;
  font-family: "Montserrat", sans-serif;
  color: var(--light);

  &::placeholder {
    color: #bbb6b6;
  }

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

function TextAreaInput({
  name,
  placeholder,
  value,
  handleInput,
}: InputTextAreaFieldProps) {
  return (
    <StyledTextAreaField
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
    />
  );
}

export default TextAreaInput;
