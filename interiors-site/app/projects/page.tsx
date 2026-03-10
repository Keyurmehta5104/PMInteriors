import { getProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/projects-grid";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="space-y-10">
      <section className="hero-card space-y-4">
        <p className="eyebrow">Portfolio</p>
        <h1 className="text-5xl leading-tight sm:text-6xl">Projects with clarity, depth, and visual impact.</h1>
        <p className="max-w-3xl text-base text-[var(--muted)] sm:text-lg">
          Explore curated interior transformations across residential, retail, and hospitality categories.
        </p>
      </section>

      {projects.length === 0 ? (
        <section className="section-card">
          <p className="text-[var(--muted)]">No projects are available right now.</p>
        </section>
      ) : (
        <ProjectsGrid projects={projects} />
      )}
    </div>
  );
}
