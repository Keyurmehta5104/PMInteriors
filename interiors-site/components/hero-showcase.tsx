"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface HeroShowcaseProps {
  slides: string[];
}

export default function HeroShowcase({ slides }: HeroShowcaseProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) {
      return;
    }

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides]);

  return (
    <div className="hero-slider">
      <Image
        key={slides[index]}
        src={slides[index]}
        alt="PM Interiors showcased design"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 45vw"
        className="hero-slider-image"
      />
      <div className="hero-slider-overlay" />
      <div className="hero-slider-dots">
        {slides.map((slide, dotIndex) => (
          <button
            key={slide}
            type="button"
            onClick={() => setIndex(dotIndex)}
            className={`hero-dot ${dotIndex === index ? "hero-dot-active" : ""}`}
            aria-label={`Show slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
