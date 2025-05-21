import axios from "axios";

export type ContactFormInput = {
  name: string;
  email: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
};

const BASE_URL = `/api/contactttt`;

export async function submitContactDetails({
  name,
  email,
  message,
}: ContactFormInput): Promise<ContactResponse> {
  const response = await axios.post(BASE_URL, { name, email, message });

  if (response.status !== 201) {
    throw new Error("Failed to submit contact details");
  }

  return response.data;
}
