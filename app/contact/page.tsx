import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactPage } from "@/lib/pages-content";
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
        <Reveal>
          <SectionHeading
            eyebrow={contactPage.eyebrow}
            title={contactPage.title}
            intro={contactPage.intro}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-7">
            <form action={siteConfig.formspreeEndpoint} method="POST" className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    {contactPage.nameLabel}
                  </label>
                  <input id="name" name="name" type="text" required className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    {contactPage.emailLabel}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium">
                  {contactPage.messageLabel}
                </label>
                <textarea id="message" name="message" rows={6} required className={inputClasses} />
              </div>

              <button
                type="submit"
                className="rounded-btn bg-orange-accent px-6 py-3 text-sm font-semibold text-bg-dark transition-colors hover:bg-orange-accent/90"
              >
                {contactPage.submitLabel}
              </button>
            </form>
          </Reveal>

          <div className="space-y-6 lg:col-span-5">
            <Reveal delay={0.2} className="rounded-card border border-border-gray/60 bg-card-light p-8 transition-transform hover:-translate-y-1 dark:bg-card-dark">
              <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
                {contactPage.bookingTitle}
              </h3>
              <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
                {contactPage.bookingDescription}
              </p>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-btn border border-orange-accent px-5 py-2.5 text-sm font-semibold text-orange-accent transition-colors hover:bg-orange-accent hover:text-bg-dark"
              >
                {contactPage.bookingCta}
              </a>
            </Reveal>

            <Reveal delay={0.3} className="rounded-card border border-border-gray/60 bg-card-light p-8 transition-transform hover:-translate-y-1 dark:bg-card-dark">
              <h3 className="font-mono text-xs uppercase tracking-wide text-orange-accent">
                {contactPage.coordinatesTitle}
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
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}
