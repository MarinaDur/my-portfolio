import { styled } from "styled-components";
import formFontStyles from "./FormFontStyles";

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

  ${formFontStyles}
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
