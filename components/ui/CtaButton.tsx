"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

const scaleAnimation = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

export function CtaButton({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-on-dark";
  external?: boolean;
}) {
  const base = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold";
  const styles = {
    // Le survol/clic est géré en CSS pur (translate + ombre qui se réduit) :
    // pas de whileHover/whileTap motion ici pour éviter un conflit sur `transform`.
    solid:
      "border-2 border-bg-dark bg-orange-accent text-bg-dark shadow-[5px_5px_0_0_var(--color-bg-dark)] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-bg-dark)] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none dark:border-text-light dark:shadow-[5px_5px_0_0_var(--color-text-light)] dark:hover:shadow-[2px_2px_0_0_var(--color-text-light)]",
    outline:
      "border-2 border-current text-text-dark transition-colors hover:bg-green-primary/5 dark:text-text-light dark:hover:bg-white/5",
    "outline-on-dark": "border-2 border-white/30 text-text-light transition-colors hover:bg-white/10",
  }[variant];
  const motionProps = variant === "solid" ? {} : scaleAnimation;

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles}`}
        {...motionProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={`${base} ${styles}`} {...motionProps}>
      {children}
    </MotionLink>
  );
}
