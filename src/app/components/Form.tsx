import { styled } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useMutation } from "@tanstack/react-query";
import InputField from "../ui/InputField";
import { useState } from "react";
import TextAreaInput from "../ui/TextAreaInput";
import Button from "../ui/Button";
import {
  ContactFormInput,
  ContactResponse,
  submitContactDetails,
} from "../utilsServer/apiContact";
import UserMessages from "../ui/UserMessages";
import FormLoader from "../ui/FormLoader";

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
    gap: 4rem;
    justify-content: flex-end;
    margin-top: 0;
    width: 40%;
    padding-bottom: 8rem;
  }
`;

const StyledInputCon = styled.label`
  position: relative;
`;

// const ErrorMessage = styled.p`
//   color: red;
//   font-size: 0.875rem;
//   margin-top: 0.5rem;
// `;

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const { mutate, isPending, isError, _error, isSuccess } = useMutation<
    ContactResponse,
    Error,
    ContactFormInput
  >({
    mutationFn: submitContactDetails,
    onSuccess: () => {
      setFormData({ name: "", email: "", message: "" });
      console.log("Contact form submitted successfully");
    },
    onError: (error) => {
      console.error("Error submitting contact form", error);
    },
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const isValidEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    if (formData.email && !isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      mutate({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputCon>
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          handleInput={handleInputChange}
        />
        <AnimatePresence mode="wait">
          {errors.name && (
            <UserMessages message={errors.name} messageType="errorInput" />
          )}
        </AnimatePresence>
      </StyledInputCon>
      <StyledInputCon>
        <InputField
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          handleInput={handleInputChange}
        />
        <AnimatePresence mode="wait">
          {errors.email && (
            <UserMessages message={errors.email} messageType="errorInput" />
          )}
        </AnimatePresence>
      </StyledInputCon>
      <StyledInputCon>
        <TextAreaInput
          name="message"
          placeholder="Message"
          value={formData.message}
          handleInput={handleInputChange}
        />
        <AnimatePresence mode="wait">
          {errors.message && (
            <UserMessages message={errors.message} messageType="errorInput" />
          )}
        </AnimatePresence>
      </StyledInputCon>
      <StyledInputCon>
        <StyledInputCon>
          <Button type="submit">
            {isPending ? (
              <FormLoader />
            ) : isSuccess ? (
              "Got it! Thanks for reaching out."
            ) : (
              "Submit"
            )}
          </Button>
          <AnimatePresence mode="wait">
            {isError && Object.keys(errors).length === 0 ? (
              <UserMessages
                message="Couldn’t send your message. Please try again."
                messageType="errorSubmit"
              />
            ) : null}
          </AnimatePresence>
        </StyledInputCon>
      </StyledInputCon>
    </StyledForm>
  );
}

export default Form;
