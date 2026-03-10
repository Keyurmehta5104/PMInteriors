"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectGalleryViewerProps {
  title: string;
  images: string[];
}

export default function ProjectGalleryViewer({ title, images }: ProjectGalleryViewerProps) {
  const [active, setActive] = useState(0);

  const current = images[active] ?? images[0];

  return (
    <section className="section-card">
      <h2 className="text-2xl">Visual Walkthrough</h2>
      <div className="gallery-viewer-main mt-4">
        <Image
          src={current}
          alt={`${title} visual ${active + 1}`}
          width={1600}
          height={1100}
          className="gallery-photo"
          sizes="(max-width: 1024px) 100vw, 70vw"
        />
      </div>
      <div className="gallery-thumb-row mt-3">
        {images.map((photo, index) => (
          <button
            type="button"
            key={`${photo}-${index}`}
            onClick={() => setActive(index)}
            className={`gallery-thumb ${index === active ? "gallery-thumb-active" : ""}`}
            aria-label={`Show image ${index + 1}`}
          >
            <Image
              src={photo}
              alt={`${title} thumbnail ${index + 1}`}
              width={420}
              height={280}
              className="gallery-thumb-image"
              sizes="(max-width: 1024px) 25vw, 12vw"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
