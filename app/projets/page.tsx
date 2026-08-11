import type { Metadata } from "next";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projetsPage } from "@/lib/pages-content";

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
          eyebrow={projetsPage.eyebrow}
          title={projetsPage.title}
          intro={projetsPage.intro}
        />
        <ProjectsGrid />
      </Container>
    </div>
  );
}
