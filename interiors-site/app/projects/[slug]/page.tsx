import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BeforeAfterSlider from "@/components/before-after-slider";
import ProjectGalleryViewer from "@/components/project-gallery-viewer";
import { getProjectBySlug, getProjects } from "@/lib/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = await getProjects();
  const relatedProjects = allProjects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const beforeImage = project.gallery[0] || project.image;
  const afterImage = project.gallery[1] || project.image;

  return (
    <div className="space-y-8">
      <section className="hero-card grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--primary)]">{project.category} Case Study</p>
          <h1 className="text-4xl sm:text-5xl">{project.title}</h1>
          <p className="text-base text-[var(--muted)] sm:text-lg">{project.summary}</p>

          <div className="project-meta-grid">
            <article className="meta-card"><p className="meta-label">Client</p><p className="meta-value">{project.client}</p></article>
            <article className="meta-card"><p className="meta-label">Location</p><p className="meta-value">{project.location}</p></article>
            <article className="meta-card"><p className="meta-label">Area</p><p className="meta-value">{project.area}</p></article>
            <article className="meta-card"><p className="meta-label">Timeline</p><p className="meta-value">{project.duration}</p></article>
            <article className="meta-card"><p className="meta-label">Year</p><p className="meta-value">{project.year}</p></article>
            <article className="meta-card"><p className="meta-label">Budget</p><p className="meta-value">{project.budget}</p></article>
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link href="/contact" className="cta cta-primary focus-ring">Start Similar Project</Link>
            <Link href="/projects" className="cta cta-secondary focus-ring">Back to Portfolio</Link>
          </div>
        </div>

        <Image
          src={project.image}
          alt={project.title}
          width={1600}
          height={1020}
          className="visual-photo rounded-xl"
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
      </section>

      <section className="section-card case-grid">
        <article className="space-y-2">
          <p className="meta-label">Design Challenge</p>
          <h2 className="text-2xl">What needed to improve</h2>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{project.challenge}</p>
        </article>
        <article className="space-y-2">
          <p className="meta-label">Design Direction</p>
          <h2 className="text-2xl">How we transformed it</h2>
          <p className="text-sm leading-relaxed text-[var(--muted)]">{project.solution}</p>
        </article>
      </section>

      <section className="section-card">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="text-2xl">Scope + Style Language</h2>
          <p className="text-sm font-semibold text-[var(--muted)]">Palette: {project.palette}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span key={service} className="filter-chip filter-chip-active">{service}</span>
          ))}
        </div>
      </section>

      <section className="section-card">
        <h2 className="text-2xl">Execution Timeline</h2>
        <div className="timeline-grid mt-4">
          {project.timeline.map((item) => (
            <article key={item.phase} className="timeline-card">
              <p className="meta-label">{item.phase}</p>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <ProjectGalleryViewer title={project.title} images={project.gallery.length ? project.gallery : [project.image]} />

      <BeforeAfterSlider before={beforeImage} after={afterImage} title={project.title} />

      <section className="section-card">
        <h2 className="text-2xl">Project Outcomes</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {project.outcomes.map((outcome) => (
            <article key={outcome} className="outcome-card">
              <p className="text-sm text-[var(--muted)]">{outcome}</p>
            </article>
          ))}
        </div>
      </section>

      {relatedProjects.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-2xl">You May Also Like</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {relatedProjects.map((item) => (
              <Link key={item.slug} href={`/projects/${item.slug}`} className="project-card focus-ring">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  className="visual-photo"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="space-y-2 p-4">
                  <p className="meta-label">{item.category}</p>
                  <h3 className="text-2xl">{item.title}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}
