import Image from "next/image";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";

export interface SplitSectionPoint {
  title: string;
  description: string;
}

export function SplitSection({
  id,
  eyebrow,
  title,
  intro,
  points,
  image,
  imageAlt,
  reverse = false,
  cta,
  tone = "light",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  points: SplitSectionPoint[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  const isDarkTone = tone === "dark";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 ${
        isDarkTone ? "bg-green-primary text-text-light" : ""
      }`}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <Tag>{eyebrow}</Tag>
            <h2
              className={`mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${
                isDarkTone ? "text-text-light" : "text-green-primary dark:text-text-light"
              }`}
            >
              {title}
            </h2>
            {intro ? (
              <p
                className={`mt-5 text-base ${
                  isDarkTone ? "text-text-light/80" : "text-muted-light dark:text-muted-dark"
                }`}
              >
                {intro}
              </p>
            ) : null}

            <ul className="mt-8 space-y-5">
              {points.map((point) => (
                <li key={point.title} className="flex gap-4">
                  <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-orange-accent" />
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkTone ? "text-text-light" : "text-text-dark dark:text-text-light"
                      }`}
                    >
                      {point.title}
                    </p>
                    <p
                      className={`mt-1 text-sm ${
                        isDarkTone
                          ? "text-text-light/70"
                          : "text-muted-light dark:text-muted-dark"
                      }`}
                    >
                      {point.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {cta ? (
              <div className="mt-10">
                <CtaButton href={cta.href}>{cta.label}</CtaButton>
              </div>
            ) : null}
          </div>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-border-gray/60">
              <Image
                src={image}
                alt={imageAlt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
