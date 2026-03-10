import Image from "next/image";

const pillars = [
  {
    title: "Design Intelligence",
    description: "We align layout, lighting, and storage around daily routines and future flexibility.",
  },
  {
    title: "Material Curation",
    description: "Premium, tactile palettes selected for elegance, longevity, and easy maintenance.",
  },
  {
    title: "Execution Discipline",
    description: "Close vendor coordination and quality checks ensure design intent is delivered precisely.",
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="hero-card grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-4">
          <p className="eyebrow">About The Studio</p>
          <h1 className="text-5xl leading-tight sm:text-6xl">An editorial approach to interior design.</h1>
          <p className="max-w-xl text-base text-[var(--muted)] sm:text-lg">
            PM Interiors is a multidisciplinary design studio creating premium residential and commercial spaces with timeless character.
          </p>
        </div>
        <Image
          src="https://images.pexels.com/photos/6758770/pexels-photo-6758770.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="PM Interiors team at work"
          width={1500}
          height={980}
          className="visual-photo rounded-xl"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="section-card space-y-3">
            <h2 className="text-2xl">{pillar.title}</h2>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{pillar.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
