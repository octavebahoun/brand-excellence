import type { Metadata } from "next";
import { TeamCard } from "@/components/about/TeamCard";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
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
        <Reveal>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} intro={about.intro} />
        </Reveal>

        <Reveal
          delay={0.1}
          className="border-2 border-bg-dark bg-green-primary p-10 text-text-light shadow-[8px_8px_0_0_var(--color-orange-accent)] sm:p-14 dark:border-white/20"
        >
          <Tag>{about.mission.eyebrow}</Tag>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
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
        </Reveal>

        <div className="mt-32">
          <Reveal>
            <Tag>{about.teamEyebrow}</Tag>
            <h2 className="mt-5 text-4xl font-extrabold leading-[0.95] tracking-tight text-green-primary sm:text-5xl dark:text-text-light">
              {about.teamTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal
                key={member.id}
                delay={(i % 4) * 0.08}
                className={i % 2 === 1 ? "lg:mt-8" : ""}
              >
                <TeamCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
