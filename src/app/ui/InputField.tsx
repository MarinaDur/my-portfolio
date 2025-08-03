import { styled } from "styled-components";
import formFontStyles from "./FormFontStyles";

interface InputFieldProps {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInputField = styled.input`
  width: 100%;
  border-bottom: 2px solid var(--light);
  font-size: 1.4rem;
  color: var(--light);
  padding-bottom: 1rem;
  font-family: "Montserrat", sans-serif;

  &::placeholder {
    color: #bbb6b6;
  }

  ${formFontStyles}
`;

function InputField({
  type,
  name,
  placeholder,
  value,
  handleInput,
}: InputFieldProps) {
  return (
    <StyledInputField
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleInput}
    />
  );
}

export default InputField;
