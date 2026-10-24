"use server";

import { Resend } from "resend";

export type ContactField = "name" | "email" | "message";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** Echoed back on failure so the visitor doesn't lose what they typed. */
  values?: { name: string; email: string; message: string; needs: string[] };
};

const NEEDS = ["WordPress", "WooCommerce", "React", "QA"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendContactMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never see this field, bots tend to fill it in.
  if (formData.get("company")) return { status: "success" };

  const values = {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
    needs: formData.getAll("need").map(String).filter((need) => NEEDS.includes(need)),
  };

  const errors: ContactState["errors"] = {};
  if (!values.name) errors.name = "Please tell me your name";
  else if (values.name.length > 100) errors.name = "That name is a bit long";
  if (!EMAIL_RE.test(values.email)) errors.email = "Please enter a valid email";
  if (!values.message) errors.message = "Tell me a little about the project";
  else if (values.message.length > 5000) errors.message = "Please keep it under 5000 characters";
  if (Object.keys(errors).length > 0) return { status: "error", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    console.error("Contact form is not configured: set RESEND_API_KEY and CONTACT_TO_EMAIL");
    return { status: "error", message: "Couldn’t send your message. Please try again later.", values };
  }

  const { error } = await new Resend(apiKey).emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to,
    replyTo: values.email,
    subject: `New project inquiry from ${values.name}`,
    text: [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Needs help with: ${values.needs.join(", ") || "—"}`,
      "",
      values.message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend failed to send the contact email:", error);
    return { status: "error", message: "Couldn’t send your message. Please try again.", values };
  }

  return { status: "success", message: "Got it — thanks! I’ll get back to you soon." };
}
