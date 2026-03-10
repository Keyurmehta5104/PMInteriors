"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status);
      console.log("Response headers:", res.headers);

      let json;
      try {
        json = await res.json();
        console.log("Response JSON:", json);
      } catch (parseErr) {
        console.error("Failed to parse JSON:", parseErr);
        json = { message: "Response received but could not parse" };
      }

      if (!res.ok) {
        setStatus("error");
        setMessage(json.error || `Server error: ${res.status}`);
        return;
      }

      setStatus("success");
      setMessage(json.message || "Thank you for your enquiry! We'll be in touch soon.");
      e.currentTarget.reset();
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-[var(--line)] bg-green-50 p-4">
          <h3 className="text-lg font-semibold text-green-900">Thank you for your enquiry!</h3>
          <p className="mt-2 text-green-800">We have received your message and will get back to you shortly.</p>
        </div>
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