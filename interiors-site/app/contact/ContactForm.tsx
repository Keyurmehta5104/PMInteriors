"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (res.ok) {
        setStatus("success");
        setMessage(json.message || "Thank you for your enquiry! We'll be in touch soon.");
        e.currentTarget.reset();
      } else {
        setStatus("error");
        setMessage(json.error || "Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div className="prose">
        <h3>Thank you for your enquiry!</h3>
        <p>We have received your message and will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      className="mt-6 grid gap-4 md:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <label className="text-sm text-[var(--muted)]">
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          className="focus-ring mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
          placeholder="Your full name"
          required
        />
      </label>
      <label className="text-sm text-[var(--muted)]">
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="focus-ring mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
          placeholder="you@example.com"
          required
        />
      </label>
      <label className="text-sm text-[var(--muted)] md:col-span-2">
        Project details
        <textarea
          rows={6}
          name="details"
          autoComplete="off"
          className="focus-ring mt-2 w-full rounded-xl border border-[var(--line)] bg-white px-3 py-2 text-[var(--text)]"
          placeholder="Property type, area, budget range, timeline"
          required
        />
      </label>
      <button
        type="submit"
        className="cta cta-primary focus-ring w-fit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Brief"}
      </button>
      {status === "error" && (
        <p className="text-red-600 md:col-span-2">{message}</p>
      )}
    </form>
  );
}