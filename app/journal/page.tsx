import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes techniques et retours d'expérience d'Excellence Team, hackathon après hackathon.",
};

export default function JournalPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading
          eyebrow="JOURNAL"
          title="Notes techniques & retours de hackathon."
          intro="Pas de contenu marketing : des retours d'expérience bruts sur ce qu'on construit, ce qui casse, et ce qu'on apprend — hackathon après hackathon (EPITNET, HackByIFRI...)."
        />

        <div className="rounded-card border border-dashed border-border-gray p-12 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-orange-accent">
            Bientôt
          </p>
          <p className="mx-auto mt-4 max-w-md text-muted-light dark:text-muted-dark">
            Les premiers billets sont en cours de rédaction. Revenez après le prochain
            hackathon.
          </p>
        </div>
      </Container>
    </div>
  );
}
