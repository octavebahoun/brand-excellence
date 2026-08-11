import type { Metadata } from "next";
import { GeometricPanel } from "@/components/home/GeometricPanel";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { journalPage } from "@/lib/pages-content";
import { projects } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Notes techniques et retours d'expérience d'Excellence Team, hackathon après hackathon.",
};

export default function JournalPage() {
  const upcoming = projects.find((p) => p.id === "write");

  return (
    <div className="py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={journalPage.eyebrow}
            title={journalPage.title}
            intro={journalPage.intro}
          />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <Reveal delay={0.1} className="lg:col-span-5">
            <GeometricPanel label="J" tone="light" rotate={3} />
          </Reveal>

          <Reveal delay={0.2} className="lg:col-span-7">
            <div className="rounded-card border border-dashed border-border-gray p-10">
              <p className="font-mono text-xs uppercase tracking-wide text-orange-accent">
                {journalPage.emptyStateTag}
              </p>
              <p className="mt-4 text-muted-light dark:text-muted-dark">
                {journalPage.emptyStateMessage}
              </p>

              {upcoming ? (
                <div className="mt-8 border-t border-border-gray/60 pt-6">
                  <p className="font-mono text-[11px] uppercase tracking-wide text-muted-light dark:text-muted-dark">
                    Premier billet en préparation
                  </p>
                  <h3 className="mt-2 text-lg font-bold text-text-dark dark:text-text-light">
                    Retour d&rsquo;expérience — {upcoming.date}
                  </h3>
                  <p className="mt-2 text-sm text-muted-light dark:text-muted-dark">
                    Comment on a construit <strong>{upcoming.title}</strong> ({upcoming.kind})
                    pendant le hackathon, ce qui a marché et ce qu&rsquo;on referait autrement.
                  </p>
                </div>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </div>
  );
}
