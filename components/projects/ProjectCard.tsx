"use client";

import { motion } from "motion/react";
import Image from "next/image";
import type { Project } from "@/lib/projects-data";

export function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className={`group flex flex-col overflow-hidden border-2 border-green-primary/70 bg-card-light shadow-[4px_4px_0_0_var(--color-green-primary)] transition-shadow hover:border-orange-accent hover:shadow-[6px_6px_0_0_var(--color-orange-accent)] dark:border-white/25 dark:bg-card-dark dark:shadow-[4px_4px_0_0_rgba(248,250,252,0.18)] dark:hover:border-orange-accent dark:hover:shadow-[6px_6px_0_0_var(--color-orange-accent)] ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-green-primary px-6 text-center">
            <span className="font-mono text-xs uppercase tracking-wide text-orange-accent">
              {project.kind}
            </span>
            <span className="text-lg font-bold text-text-light">{project.title}</span>
          </div>
        )}

        {project.isDraft ? (
          <span className="absolute right-3 top-3 rounded-btn bg-bg-dark/85 px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-orange-accent">
            Fiche à finaliser
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-text-dark dark:text-text-light">
            {project.title}
          </h3>
          {project.date ? (
            <span className="whitespace-nowrap font-mono text-[11px] text-muted-light dark:text-muted-dark">
              {project.date}
            </span>
          ) : null}
        </div>
        <p className="mt-1 font-mono text-xs text-orange-accent">{project.kind}</p>
        <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">{project.summary}</p>

        {project.stack.length > 0 ? (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-btn border border-border-gray/60 px-2 py-0.5 font-mono text-[10px] text-muted-light dark:text-muted-dark"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        {project.links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-4 border-t border-border-gray/60 pt-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-green-primary hover:text-orange-accent dark:text-text-light"
              >
                {link.label} →
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
