import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
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
        <SectionHeading eyebrow={services.eyebrow} title={services.title} intro={services.intro} />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-card border border-border-gray/60 bg-card-light p-8 dark:bg-card-dark"
            >
              <span className="font-mono text-sm text-orange-accent">{pillar.tag}</span>
              <h3 className="mt-3 text-xl font-bold text-green-primary dark:text-text-light">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-muted-light dark:text-muted-dark">
                {pillar.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {pillar.evidence.map((item) => (
                  <li
                    key={item}
                    className="rounded-btn border border-border-gray/60 px-2 py-0.5 font-mono text-[10px] text-muted-light dark:text-muted-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <Tag>{services.methodologyEyebrow}</Tag>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-green-primary sm:text-4xl dark:text-text-light">
            {services.methodologyTitle}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {services.methodology.map((item) => (
              <div key={item.title}>
                <p className="font-semibold text-text-dark dark:text-text-light">{item.title}</p>
                <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <CtaButton href="/contact">Discuter de votre projet</CtaButton>
        </div>
      </Container>
    </div>
  );
}
