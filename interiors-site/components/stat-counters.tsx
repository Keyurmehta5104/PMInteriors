"use client";

import { useEffect, useState } from "react";

interface CounterItem {
  label: string;
  value: number;
  suffix?: string;
}

interface StatCountersProps {
  items: CounterItem[];
}

export default function StatCounters({ items }: StatCountersProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let current = 0;
    const target = 100;

    const tick = () => {
      current += 2;
      setProgress(current);
      if (current < target) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {items.map((item) => {
        const animated = Math.round((item.value * progress) / 100);
        return (
          <article key={item.label} className="section-card text-center">
            <p className="text-sm text-[var(--muted)]">{item.label}</p>
            <p className="mt-2 text-3xl font-bold text-[var(--primary)]">
              {animated}
              {item.suffix || ""}
            </p>
          </article>
        );
      })}
    </>
  );
}
