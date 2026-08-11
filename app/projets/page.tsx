import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Outils open source, produits SaaS et réalisations client conçus par Excellence Team.",
};

export default function ProjetsPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="PROJETS"
          title="Ce qu'on a déjà construit."
          intro="Outils open source publiés librement, produits SaaS que nous opérons, et réalisations menées pour des clients réels — pas de démo, que du déployé."
        />
        <ProjectsGrid />
      </Container>
    </div>
  );
}
