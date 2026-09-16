"use client";

import { useCallback, useState } from "react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DIRECT_EMAIL = "nepalprayag880@gmail.com";

function validate(values) {
  const nextErrors = {};
  if (values.name.trim().length < 2) nextErrors.name = "Please enter at least 2 characters.";
  if (!EMAIL_PATTERN.test(values.email.trim())) nextErrors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) nextErrors.message = "Please enter at least 10 characters.";
  return nextErrors;
}

export default function ContactForm({ endpoint }) {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [errors, setErrors] = useState({});
  const submitForm = useCallback(async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const values = { name: form.elements.name.value, email: form.elements.email.value, message: form.elements.message.value };
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    if (!endpoint) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
      const body = encodeURIComponent(`Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\n\n${values.message.trim()}`);
      window.location.href = `mailto:${DIRECT_EMAIL}?subject=${subject}&body=${body}`;
      return;
    }
    setStatus({ type: "sending", message: "" });
    try {
      const response = await fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
      const result = await response.json().catch(() => null);
      if (!response.ok) throw new Error(result?.errors?.[0]?.message || "Formspree could not accept this message. Please try again.");
      form.reset(); setErrors({}); setStatus({ type: "success", message: "Thanks — your message has been sent." });
    } catch (error) { setStatus({ type: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." }); }
  }, [endpoint]);
  return <form action={endpoint || undefined} method="POST" onSubmit={submitForm} className="contact-form" noValidate><input type="hidden" name="_subject" value="New portfolio enquiry" /><input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" style={{ display: "none" }} /><label>Name<input name="name" type="text" required autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <span id="name-error" className="form-field-error">{errors.name}</span>}</label><label>Email<input name="email" type="email" required autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <span id="email-error" className="form-field-error">{errors.email}</span>}</label><label>Message<textarea name="message" rows="6" required aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} />{errors.message && <span id="message-error" className="form-field-error">{errors.message}</span>}</label><button className="button button-primary" type="submit" disabled={status.type === "sending"}>{status.type === "sending" ? "Sending…" : "Send message"}</button>{status.type === "success" && <p className="form-message success" role="status">{status.message}</p>}{status.type === "error" && <p className="form-message error" role="alert">{status.message}</p>}</form>;
}
