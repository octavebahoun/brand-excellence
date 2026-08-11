import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { services } from "@/lib/services-content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web & SaaS, intelligence artificielle, plateformes métier et architecture cloud — les quatre piliers d'expertise d'Excellence Team.",
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            intro={services.intro}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {services.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08} className={i % 2 === 1 ? "sm:mt-8" : ""}>
              <div className="h-full border-2 border-green-primary/70 bg-card-light p-8 shadow-[6px_6px_0_0_var(--color-green-primary)] transition-shadow hover:border-orange-accent hover:shadow-[9px_9px_0_0_var(--color-orange-accent)] dark:border-white/25 dark:bg-card-dark dark:shadow-[6px_6px_0_0_rgba(248,250,252,0.18)] dark:hover:border-orange-accent dark:hover:shadow-[9px_9px_0_0_var(--color-orange-accent)]">
                <span className="font-mono text-sm text-orange-accent">{pillar.tag}</span>
                <h3 className="mt-3 text-2xl font-extrabold tracking-tight text-green-primary dark:text-text-light">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
                  {pillar.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {pillar.evidence.map((item) => (
                    <li
                      key={item}
                      className="border border-border-gray/60 px-2 py-0.5 font-mono text-[10px] text-muted-light dark:text-muted-dark"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-32">
          <Reveal>
            <Tag>{services.methodologyEyebrow}</Tag>
            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-[0.95] tracking-tight text-green-primary sm:text-5xl dark:text-text-light">
              {services.methodologyTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.methodology.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <p className="border-l-2 border-orange-accent pl-4 font-semibold text-text-dark dark:text-text-light">
                  {item.title}
                </p>
                <p className="mt-2 pl-4 text-sm text-muted-light dark:text-muted-dark">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20">
          <CtaButton href="/contact">Discuter de votre projet</CtaButton>
        </Reveal>
      </Container>
    </div>
  );
}
