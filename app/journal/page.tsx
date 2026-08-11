import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journalPage } from "@/lib/pages-content";

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
          eyebrow={journalPage.eyebrow}
          title={journalPage.title}
          intro={journalPage.intro}
        />

        <div className="rounded-card border border-dashed border-border-gray p-12 text-center">
          <p className="font-mono text-xs uppercase tracking-wide text-orange-accent">
            {journalPage.emptyStateTag}
          </p>
          <p className="mx-auto mt-4 max-w-md text-muted-light dark:text-muted-dark">
            {journalPage.emptyStateMessage}
          </p>
        </div>
      </Container>
    </div>
  );
}
