"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ReactNode } from "react";

const MotionLink = motion.create(Link);

const tapAnimation = { whileHover: { scale: 1.03 }, whileTap: { scale: 0.97 } };

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
  const base =
    "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-sm font-semibold transition-colors";
  const styles = {
    solid: "bg-orange-accent text-bg-dark hover:bg-orange-accent/90",
    outline:
      "border border-current text-text-dark hover:bg-green-primary/5 dark:text-text-light dark:hover:bg-white/5",
    "outline-on-dark": "border border-white/30 text-text-light hover:bg-white/10",
  }[variant];

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles}`}
        {...tapAnimation}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <MotionLink href={href} className={`${base} ${styles}`} {...tapAnimation}>
      {children}
    </MotionLink>
  );
}
