import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border-gray/60">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-8 w-8 text-green-primary dark:text-text-light" />
            <span className="text-lg font-extrabold tracking-tight text-green-primary dark:text-text-light">
              EXCELLENCE <span className="text-orange-accent">TEAM</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-light dark:text-muted-dark">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-text-dark hover:text-orange-accent dark:text-text-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
            Contact
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-text-dark dark:text-text-light">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-orange-accent">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-accent"
              >
                GitHub
              </a>
            </li>
            <li className="text-muted-light dark:text-muted-dark">{siteConfig.domain}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-border-gray/60 py-6 font-mono text-xs text-muted-light dark:text-muted-dark">
        <Container className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>EXCELLENCE TEAM // {siteConfig.tagline.toUpperCase()}</span>
          <span>{new Date().getFullYear()} © TOUS DROITS RÉSERVÉS</span>
        </Container>
      </div>
    </footer>
  );
}
