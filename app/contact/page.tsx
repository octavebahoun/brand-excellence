import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Discutons de votre projet — formulaire, e-mail, ou réservation de créneau.",
};

const inputClasses =
  "w-full rounded-btn border border-border-gray bg-card-light px-4 py-3 text-sm text-text-dark outline-none transition-colors focus:border-orange-accent dark:bg-card-dark dark:text-text-light";

export default function ContactPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="CONTACT"
          title="Discutons de votre projet."
          intro="Décrivez votre besoin en quelques lignes, ou réservez directement un créneau technique avec l'équipe."
        />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <form
            action={siteConfig.formspreeEndpoint}
            method="POST"
            className="space-y-5 lg:col-span-7"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Nom
                </label>
                <input id="name" name="name" type="text" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  E-mail
                </label>
                <input id="email" name="email" type="email" required className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Votre projet
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className={inputClasses}
              />
            </div>

            <button
              type="submit"
              className="rounded-btn bg-orange-accent px-6 py-3 text-sm font-semibold text-bg-dark transition-colors hover:bg-orange-accent/90"
            >
              Envoyer le message
            </button>
          </form>

          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-card border border-border-gray/60 bg-card-light p-8 dark:bg-card-dark">
              <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
                Réserver un créneau
              </h3>
              <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
                Échangez directement avec l&rsquo;équipe autour d&rsquo;un entretien technique.
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-btn border border-orange-accent px-5 py-2.5 text-sm font-semibold text-orange-accent transition-colors hover:bg-orange-accent hover:text-bg-dark"
              >
                Planifier un entretien technique →
              </a>
            </div>

            <div className="rounded-card border border-border-gray/60 bg-card-light p-8 dark:bg-card-dark">
              <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
                Coordonnées
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-text-dark hover:text-orange-accent dark:text-text-light"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-text-dark hover:text-orange-accent dark:text-text-light"
                  >
                    GitHub — @octavebahoun
                  </a>
                </li>
                <li className="text-muted-light dark:text-muted-dark">{siteConfig.domain}</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
