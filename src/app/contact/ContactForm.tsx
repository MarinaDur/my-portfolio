"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactField, type ContactState } from "./actions";

const NEEDS = ["WordPress", "WooCommerce", "React", "QA"];

const inputClass =
  "w-full rounded-[14px] border-[1.5px] border-transparent bg-coal px-3.5 py-[13px] text-base leading-[1.45] text-light outline-none focus:border-pink-b aria-invalid:border-pink-b";

function FieldError({ state, field }: { state: ContactState; field: ContactField }) {
  const error = state.errors?.[field];
  if (!error) return null;
  return (
    <span id={`${field}-error`} className="mt-1.5 block text-[13px] font-semibold text-pink-b">
      {error}
    </span>
  );
}

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendContactMessage, { status: "idle" });
  const values = state.values;
  const errorProps = (field: ContactField) =>
    state.errors?.[field] ? { "aria-invalid": true, "aria-describedby": `${field}-error` } : {};

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
                defaultChecked={values ? values.needs.includes(need) : need === "WordPress"}
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
        <label className="block">
          <span className="mb-[5px] block text-[13px] font-semibold text-mist">Your name</span>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            maxLength={100}
            defaultValue={values?.name}
            className={inputClass}
            {...errorProps("name")}
          />
          <FieldError state={state} field="name" />
        </label>
        <label className="block">
          <span className="mb-[5px] block text-[13px] font-semibold text-mist">Email</span>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            defaultValue={values?.email}
            className={inputClass}
            {...errorProps("email")}
          />
          <FieldError state={state} field="email" />
        </label>
      </div>

      <label className="block">
        <span className="mb-[5px] block text-[13px] font-semibold text-mist">About the project</span>
        <textarea
          name="message"
          rows={3}
          required
          maxLength={5000}
          defaultValue={values?.message}
          className={`${inputClass} min-h-[90px] resize-y`}
          {...errorProps("message")}
        />
        <FieldError state={state} field="message" />
      </label>

      {/* Honeypot — hidden from people and screen readers */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
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
