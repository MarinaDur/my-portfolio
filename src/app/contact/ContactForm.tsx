"use client";

import { useActionState, type ComponentProps } from "react";
import { sendContactMessage, type ContactField, type ContactState } from "./actions";
import { NEEDS } from "./needs";

const inputClass =
  "w-full rounded-[14px] border-[1.5px] border-transparent bg-coal px-3.5 py-3.25 text-base leading-[1.45] text-light outline-none focus:border-pink-b aria-invalid:border-pink-b";

type FieldProps = {
  label: string;
  name: ContactField;
  state: ContactState;
  /** Render a <textarea> instead of an <input>. */
  multiline?: boolean;
} & Omit<ComponentProps<"input"> & ComponentProps<"textarea">, "name">;

/** Labelled input that shows the server's validation error for its field and keeps the visitor's text. */
function Field({ label, name, state, multiline, className = "", ...props }: FieldProps) {
  const error = state.errors?.[name];
  const control = {
    name,
    defaultValue: state.values?.[name],
    className: `${inputClass} ${className}`,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${name}-error` : undefined,
    ...props,
  };

  return (
    <label className="block">
      <span className="mb-1.25 block text-[13px] font-semibold text-mist">{label}</span>
      {multiline ? <textarea {...control} /> : <input {...control} />}
      {error && (
        <span id={`${name}-error`} className="mt-1.5 block text-[13px] font-semibold text-pink-b">
          {error}
        </span>
      )}
    </label>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, { status: "idle" });

  return (
    // key: remount after each reply so defaultValue/defaultChecked pick up the echoed values
    <form key={JSON.stringify(state)} action={formAction} className="flex flex-col gap-3">
      <fieldset className="m-0 border-0 p-0">
        <legend className="mb-2 p-0 text-[13px] font-semibold text-mist">I need help with</legend>
        <div className="flex flex-wrap gap-1.5">
          {NEEDS.map((need) => (
            <label key={need} className="relative inline-flex">
              <input
                type="checkbox"
                name="need"
                value={need}
                defaultChecked={state.values?.needs.includes(need)}
                className="peer absolute inset-0 m-0 cursor-pointer opacity-0"
              />
              <span className="inline-flex min-h-11 items-center rounded-full border-[1.5px] border-[#8a7466] px-3.5 text-sm font-semibold peer-checked:border-pink-b peer-checked:bg-pink-b peer-checked:text-ink peer-focus-visible:outline-3 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-mustard">
                {need}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-3 lg:grid-cols-2">
        <Field label="Your name" name="name" state={state} autoComplete="name" required maxLength={100} />
        <Field label="Email" name="email" state={state} type="email" autoComplete="email" required />
      </div>

      <Field
        label="Your website (if you have one)"
        name="website"
        state={state}
        inputMode="url"
        autoComplete="url"
        placeholder="yoursite.com"
        maxLength={300}
        className="placeholder:text-[#8a7466]"
      />

      <Field label="About the project" name="message" state={state} multiline rows={3} required maxLength={5000} className="min-h-22.5 resize-y" />

      {/* Honeypot — hidden from people and screen readers */}
      <div aria-hidden="true" className="sr-only">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" disabled={pending} className="pill bg-pink-b text-ink disabled:cursor-wait disabled:opacity-70">
        {pending ? "Sending…" : "Send message →"}
      </button>

      {/* Stays in the DOM so screen readers announce the reply; takes no space while empty */}
      <p aria-live="polite" className={`m-0 text-[15px] font-semibold empty:-mt-3 ${state.status === "success" ? "text-mint" : "text-pink-b"}`}>
        {state.message}
      </p>
    </form>
  );
}
