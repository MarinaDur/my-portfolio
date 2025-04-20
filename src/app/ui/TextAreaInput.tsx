import { styled } from "styled-components";

interface InputTextAreaFieldProps {
  name: string;
  placeholder: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const StyledTextAreaField = styled.textarea`
  font-size: 1.6rem;
  height: 10rem;
  border: none;
  border-bottom: 2px solid var(--dark);
  outline: none;
  width: 100%;
  resize: none;
  font-family: "Raleway", sans-serif;
  color: var(--dark);

  &::placeholder {
    color: #bbb6b6;
  }

  @media (min-width: 390px) {
    font-size: 2rem;
  }
  @media (min-width: 430px) {
    font-size: 2.3rem;
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
