"use client";

import { useMemo, useState } from "react";
import { categoryLabels, projects, type ProjectCategory } from "@/lib/projects-data";
import { ProjectCard } from "./ProjectCard";

const FILTERS: Array<{ value: ProjectCategory | "all"; label: string }> = [
  { value: "all", label: "Tout" },
  { value: "opensource", label: categoryLabels.opensource },
  { value: "produit", label: categoryLabels.produit },
  { value: "client", label: categoryLabels.client },
];

export function ProjectsGrid() {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`rounded-btn border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f.value
                ? "border-orange-accent bg-orange-accent text-bg-dark"
                : "border-border-gray text-text-dark hover:border-orange-accent hover:text-orange-accent dark:text-text-light"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
