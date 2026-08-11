import type { Metadata } from "next";
import { TeamCard } from "@/components/about/TeamCard";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { about } from "@/lib/about-content";
import { team } from "@/lib/team-data";

export const metadata: Metadata = {
  title: "À propos",
  description: "Mission, valeurs et collectif derrière Excellence Team.",
};

export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        <SectionHeading eyebrow={about.eyebrow} title={about.title} intro={about.intro} />

        <div className="rounded-card border border-border-gray/60 bg-green-primary p-10 text-text-light sm:p-14">
          <Tag>{about.mission.eyebrow}</Tag>
          <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl">
            {about.mission.title}
          </h2>
          <p className="mt-4 max-w-2xl text-text-light/80">{about.mission.body}</p>

          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            {about.values.map((value) => (
              <div key={value.title}>
                <p className="font-semibold text-text-light">{value.title}</p>
                <p className="mt-2 text-sm text-text-light/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Tag>{about.teamEyebrow}</Tag>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-primary sm:text-4xl dark:text-text-light">
            {about.teamTitle}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
