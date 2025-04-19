import { styled } from "styled-components";

interface InputFieldProps {
  type: "text" | "email" | "password";
  name: string;
  placeholder: string;
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInputField = styled.input`
  width: 100%;
  border-bottom: 0.5px solid var(--dark);
  font-size: 1.6rem;
  color: var(--dark);
  padding-bottom: 0.5rem;

  &::placeholder {
    color: #bbb6b6;
  }
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
