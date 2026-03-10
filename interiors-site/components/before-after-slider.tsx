"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  title: string;
}

export default function BeforeAfterSlider({ before, after, title }: BeforeAfterSliderProps) {
  const [value, setValue] = useState(52);

  const clipPath = useMemo(() => `inset(0 ${100 - value}% 0 0)`, [value]);

  return (
    <section className="section-card">
      <div className="flex items-end justify-between gap-3">
        <h2 className="text-2xl">Before / After</h2>
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
          Drag to compare
        </p>
      </div>

      <div className="before-after-wrap mt-4">
        <Image
          src={before}
          alt={`${title} before design`}
          width={1600}
          height={1100}
          className="before-after-image"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
        <div className="before-after-overlay" style={{ clipPath }}>
          <Image
            src={after}
            alt={`${title} after design`}
            width={1600}
            height={1100}
            className="before-after-image"
            sizes="(max-width: 1024px) 100vw, 70vw"
          />
        </div>
        <div className="before-after-divider" style={{ left: `${value}%` }} />
        <span className="before-tag">Before</span>
        <span className="after-tag">After</span>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="before-after-range mt-4"
        aria-label="Compare before and after"
      />
    </section>
  );
}
