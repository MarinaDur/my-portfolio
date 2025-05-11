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
  padding-bottom: 2rem;
  /* align-self: center; */

  @media (min-width: 390px) {
    gap: 5rem;
  }
  @media (min-width: 430px) {
    gap: 6rem;
  }
  @media (min-width: 1024px) {
    gap: 2rem;
    justify-content: flex-end;
    margin-top: 0;
    width: 45%;
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
          placeholder="Name"
          value={formData.name}
          handleInput={handleInputChange}
        />
      </StyledInputCon>
      <StyledInputCon>
        <InputField
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          handleInput={handleInputChange}
        />
      </StyledInputCon>
      <StyledInputCon>
        <TextAreaInput
          name="message"
          placeholder="Message"
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
