"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { Project } from "@/lib/projects";

interface ProjectsGridProps {
  projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selected, setSelected] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((project) => project.category))],
    [projects],
  );

  const filteredProjects = useMemo(() => {
    if (selected === "All") return projects;
    return projects.filter((project) => project.category === selected);
  }, [projects, selected]);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-chip ${category === selected ? "filter-chip-active" : ""}`}
            onClick={() => setSelected(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="project-card project-card-premium focus-ring">
            <Image
              src={project.image}
              alt={project.title}
              width={1400}
              height={900}
              className="visual-photo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="space-y-2 p-4">
              <p className="eyebrow text-xs">{project.category} / {project.location}</p>
              <h2 className="text-2xl">{project.title}</h2>
              <p className="text-sm text-[var(--muted)]">{project.summary}</p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
