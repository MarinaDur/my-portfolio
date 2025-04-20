import { styled } from "styled-components";
import InputField from "../ui/InputField";
import { useState } from "react";
import TextAreaInput from "../ui/TextAreaInput";
import Button from "../ui/Button";

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: 2rem;
  height: 100%;
  justify-content: center;
  /* align-self: center; */

  @media (min-width: 390px) {
    gap: 5rem;
  }
  @media (min-width: 430px) {
    gap: 6rem;
  }
`;

const StyledInputCon = styled.label`
  position: relative;
`;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <StyledForm>
      <StyledInputCon>
        <InputField
          type="text"
          name="name"
          placeholder="Please enter your name"
          value={formData.name}
          handleInput={handleInputChange}
        />
      </StyledInputCon>
      <StyledInputCon>
        <InputField
          type="text"
          name="email"
          placeholder="Please enter your email"
          value={formData.email}
          handleInput={handleInputChange}
        />
      </StyledInputCon>
      <StyledInputCon>
        <TextAreaInput
          name="message"
          placeholder="Please enter your message"
          value={formData.message}
          handleInput={handleInputChange}
        />
      </StyledInputCon>
      <StyledInputCon>
        <Button type="submit">Submit</Button>
      </StyledInputCon>
    </StyledForm>
  );
}

export default Form;
