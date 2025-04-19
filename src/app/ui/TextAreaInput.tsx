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
  border-bottom: 0.5px solid var(--dark);
  outline: none;
  width: 100%;
  resize: none;

  &::placeholder {
    color: #bbb6b6;
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
