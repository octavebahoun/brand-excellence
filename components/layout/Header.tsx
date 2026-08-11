"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/lib/site-config";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border-gray/60 bg-bg-light/80 backdrop-blur-lg dark:bg-bg-dark/80">
      <div className="mx-auto flex h-20 w-full max-w-[1400px] items-center justify-between px-8 md:px-12">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-light.jpg"
            alt="Excellence Team"
            width={40}
            height={33}
            className="block rounded-lg border-2 border-orange-accent dark:hidden"
          />
          <Image
            src="/images/logo-dark.jpg"
            alt="Excellence Team"
            width={40}
            height={33}
            className="hidden rounded-lg border-2 border-orange-accent dark:block"
          />
          <span className="text-lg font-extrabold tracking-tight text-green-primary dark:text-text-light">
            EXCELLENCE <span className="text-orange-accent">TEAM</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-btn px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-orange-accent"
                    : "text-text-dark hover:text-orange-accent dark:text-text-light"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-btn bg-orange-accent px-4 py-2 text-sm font-semibold text-bg-dark transition-colors hover:bg-orange-accent/90 md:inline-flex"
          >
            Démarrer un projet
          </Link>
          <button
            type="button"
            aria-label="Ouvrir le menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-btn border border-border-gray text-text-dark lg:hidden dark:text-text-light"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border-gray/60 bg-bg-light px-8 py-4 lg:hidden dark:bg-bg-dark">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-btn px-3 py-2 text-sm font-medium text-text-dark hover:text-orange-accent dark:text-text-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
