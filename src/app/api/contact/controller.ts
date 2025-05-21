import Contact from "@/app/models/Contact";
import { AppError } from "@/app/utilsServer/appError";
import { ContactData } from "@/app/utilsServer/types";

export async function sendContactDetails(data: ContactData) {
  const { name, email, message } = data;

  if (!name || !email || !message) {
    throw new Error("Please provide name, email, and message");
  }

  try {
    const contactDetails = await Contact.create(data);
    return contactDetails;
  } catch (error) {
    throw new AppError(`Error sending form: ${(error as Error).message}`, 500);
  }
}
