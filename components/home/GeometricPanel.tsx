"use client";

import { motion, useReducedMotion } from "motion/react";
import { Logo } from "../ui/Logo";

export function GeometricPanel({
  label,
  tone = "light",
  rotate = 0,
}: {
  /** Grand chiffre/repère en filigrane (ex: "01"). Omis pour le Hero. */
  label?: string;
  tone?: "light" | "dark";
  rotate?: number;
}) {
  const reduceMotion = useReducedMotion();
  const gridId = `panel-grid-${label ?? "hero"}`;

  return (
    <div
      className={`relative flex aspect-[16/9] items-center justify-center overflow-hidden border-2 shadow-[8px_8px_0_0_var(--color-orange-accent)] ${
        tone === "dark"
          ? "border-white/20 bg-green-primary"
          : "border-green-primary bg-card-light dark:border-white/20 dark:bg-card-dark"
      }`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
        <defs>
          <pattern id={gridId} width="36" height="36" patternUnits="userSpaceOnUse">
            <path d="M36 0H0V36" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#${gridId})`}
          className={tone === "dark" ? "text-white" : "text-green-primary dark:text-text-light"}
        />
      </svg>

      {label ? (
        <span
          aria-hidden="true"
          className={`absolute -bottom-8 -right-3 select-none font-mono text-[10rem] font-bold leading-none ${
            tone === "dark" ? "text-white/[0.06]" : "text-green-primary/[0.06] dark:text-white/[0.05]"
          }`}
        >
          {label}
        </span>
      ) : null}

      <motion.div
        initial={{ opacity: 0, scale: 0.82, rotate: rotate - 6 }}
        whileInView={{ opacity: 1, scale: 1, rotate }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
          transition={reduceMotion ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Logo className="h-20 w-20 text-orange-accent sm:h-28 sm:w-28" />
        </motion.div>
      </motion.div>
    </div>
  );
}
