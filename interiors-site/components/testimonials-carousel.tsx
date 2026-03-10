"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "PM Interiors transformed our apartment into a clean, practical, and premium home.",
    author: "Aditi Shah, Bangalore",
  },
  {
    quote: "Execution quality was excellent and timelines were clearly managed from day one.",
    author: "Rohit Mehta, Whitefield",
  },
  {
    quote: "The team understood our style quickly and delivered exactly what we had imagined.",
    author: "Neha Kapoor, Indiranagar",
  },
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[index];

  return (
    <section className="section-card testimonial-card">
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--primary)]">Client Voice</p>
      <p className="mt-3 text-xl leading-relaxed text-[var(--text)]">&ldquo;{item.quote}&rdquo;</p>
      <p className="mt-3 text-sm font-semibold text-[var(--muted)]">{item.author}</p>
      <div className="mt-4 flex gap-2">
        {testimonials.map((t, dot) => (
          <button
            key={t.author}
            type="button"
            className={`hero-dot ${dot === index ? "hero-dot-active" : ""}`}
            onClick={() => setIndex(dot)}
            aria-label={`Show testimonial ${dot + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
