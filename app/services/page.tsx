import type { Metadata } from "next";
import { CtaButton } from "@/components/ui/CtaButton";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Développement web & SaaS, intelligence artificielle, plateformes métier et architecture cloud — les quatre piliers d'expertise d'Excellence Team.",
};

const pillars = [
  {
    tag: "01",
    title: "Web & SaaS",
    description:
      "Applications web complètes, du prototype fonctionnel au produit déployé en production. PWA, tableaux de bord, portails métier.",
    evidence: ["Next.js / React", "PWA", "API REST", "Node.js"],
  },
  {
    tag: "02",
    title: "Intelligence Artificielle & Data",
    description:
      "Intégration de LLMs en production : RAG, fine-tuning, enrichissement automatique de contenu, génération assistée.",
    evidence: ["RAG", "Fine-tuning LLM", "Gemini / Groq", "Vector Embeddings"],
  },
  {
    tag: "03",
    title: "Plateformes métier",
    description:
      "Outils de gestion sur mesure pour établissements, associations et communautés : notes, membres, gouvernance, suivi.",
    evidence: ["Gestion scolaire", "Portails membres", "Automatisation"],
  },
  {
    tag: "04",
    title: "Cloud & Architecture",
    description:
      "Infrastructure pensée pour durer : composants open-source, déploiement souverain, API-first pour s'intégrer à l'existant.",
    evidence: ["PostgreSQL", "Docker", "Vercel", "API-first"],
  },
];

const methodology = [
  {
    title: "Vitesse d'exécution",
    description: "Cycle de développement agile axé sur un prototype fonctionnel immédiat.",
  },
  {
    title: "Sécurité intégrée",
    description:
      "Chiffrement et hébergement cloud souverain pour protéger vos secrets d'affaires.",
  },
  {
    title: "Interface intuitive",
    description: "Un design centré sur l'utilisateur, éliminant les clics inutiles.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="SERVICES & EXPERTISE"
          title="Ce qu'on sait faire, prouvé par ce qu'on a livré."
          intro="Pas de catalogue abstrait : chaque pilier ci-dessous correspond à des projets réellement construits et déployés — à retrouver en détail sur la page Projets."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((pillar) => (
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
          <Tag>MÉTHODOLOGIE</Tag>
          <h2 className="mt-4 max-w-2xl text-3xl font-extrabold tracking-tight text-green-primary sm:text-4xl dark:text-text-light">
            Trois principes, sans exception.
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {methodology.map((item) => (
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
