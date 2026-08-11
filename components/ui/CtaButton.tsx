import Link from "next/link";
import { ReactNode } from "react";

export function CtaButton({
  href,
  children,
  variant = "solid",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-btn px-6 py-3 text-sm font-semibold transition-colors";
  const styles =
    variant === "solid"
      ? "bg-orange-accent text-bg-dark hover:bg-orange-accent/90"
      : "border border-current text-text-dark hover:bg-green-primary/5 dark:text-text-light dark:hover:bg-white/5";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
