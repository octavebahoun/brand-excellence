import Image from "next/image";
import type { TeamMember } from "@/lib/team-data";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-card border border-border-gray/60 bg-card-light dark:bg-card-dark">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 25vw, 45vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-base font-bold text-text-dark dark:text-text-light">
          {member.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-orange-accent">{member.role}</p>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted-light dark:text-muted-dark">
          {member.specialty}
        </p>
        <p className="mt-4 flex-1 text-sm italic text-muted-light dark:text-muted-dark">
          &ldquo;{member.quote}&rdquo;
        </p>

        {member.portfolio ? (
          <a
            href={member.portfolio}
            target="_blank"
            rel="noreferrer"
            className="mt-4 text-sm font-semibold text-green-primary hover:text-orange-accent dark:text-text-light"
          >
            Portfolio →
          </a>
        ) : null}
      </div>
    </article>
  );
}
