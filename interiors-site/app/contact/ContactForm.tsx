"use client";

import { useState, useRef, useEffect } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const mountedRef = useRef(true);
  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!mountedRef.current) return;
    setStatus("sending");
    setMessage("");

    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      console.log("Response status:", res.status);
      console.log("Response ok:", res.ok);

      if (!res.ok) {
        const errorText = await res.text();
        console.log("Error response:", errorText);
        if (mountedRef.current) {
          setStatus("error");
          setMessage(`Server error: ${res.status}`);
        }
        return;
      }

      const json = await res.json();
      console.log("Success response:", json);
      if (mountedRef.current) {
        setStatus("success");
        setMessage(json.message || "Thank you for your enquiry! We'll be in touch soon.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      if (mountedRef.current) {
        setStatus("error");
        setMessage("Network error. Please check your connection and try again.");
      }
    }
  };

  if (status === "success") {
    return (
      <div className="mt-6 space-y-4">
        <div className="rounded-xl border border-green-200 bg-green-50 p-6">
          <h3 className="text-lg font-semibold text-green-900">Thank you for your enquiry!</h3>
          <p className="mt-2 text-green-800">We have received your message and will get back to you shortly.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm text-green-700 underline hover:text-green-900"
          >
            Send another enquiry
          </button>
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