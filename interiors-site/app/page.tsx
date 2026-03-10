import Link from "next/link";
import Image from "next/image";
import HeroShowcase from "@/components/hero-showcase";
import StatCounters from "@/components/stat-counters";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { getProjects } from "@/lib/projects";

const stats = [
  { label: "Delivered Projects", value: 75, suffix: "+" },
  { label: "Design Experts", value: 14 },
  { label: "Client Retention", value: 96, suffix: "%" },
];

export default async function Home() {
  const projects = await getProjects();

  const slides = [
    "https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1800",
    "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1800",
  ];

  return (
    <div className="space-y-12">
      <section className="hero-card hero-premium grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="eyebrow">Luxury Interior Design Studio</p>
          <h1 className="text-5xl leading-[1.05] sm:text-6xl">Curated spaces for modern living.</h1>
          <p className="max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            PM Interiors crafts timeless homes and destination commercial spaces through detail-first planning, refined materials, and precision execution.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/projects" className="cta cta-primary">View Portfolio</Link>
            <Link href="/contact" className="cta cta-secondary">Book Design Consultation</Link>
          </div>
        </div>
        <HeroShowcase slides={slides} />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <StatCounters items={stats} />
      </section>

      <section className="section-card grid gap-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="eyebrow">Signature Process</p>
          <h2 className="mt-2 text-4xl">From concept to final styling</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <article className="step-card"><p className="step-no">01</p><p className="step-text">Discovery &amp; Space Audit</p></article>
          <article className="step-card"><p className="step-no">02</p><p className="step-text">Design Development</p></article>
          <article className="step-card"><p className="step-no">03</p><p className="step-text">Execution &amp; Handover</p></article>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-end justify-between gap-3">
          <h2 className="text-4xl">Selected Projects</h2>
          <Link href="/projects" className="mini-link">Explore all projects</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card project-card-premium">
              <Image
                src={project.image}
                alt={project.title}
                width={1400}
                height={900}
                className="visual-photo"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="space-y-2 p-4">
                <p className="eyebrow text-xs">{project.category}</p>
                <h3 className="text-2xl">{project.title}</h3>
                <p className="text-sm text-[var(--muted)]">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="section-card overflow-hidden p-0">
          <Image
            src="https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&w=1800"
            alt="Premium interior detail"
            width={1800}
            height={1000}
            className="visual-photo h-[320px]"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          <div className="p-6">
            <p className="eyebrow">Material Direction</p>
            <h3 className="mt-2 text-3xl">Natural tones, layered textures, lasting elegance.</h3>
          </div>
        </div>
        <TestimonialsCarousel />
      </section>
    </div>
  );
}
