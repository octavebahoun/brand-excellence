"use client";

import { motion } from "motion/react";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";
import { GeometricPanel } from "./GeometricPanel";

export interface SplitSectionPoint {
  title: string;
  description: string;
}

export function SplitSection({
  id,
  index,
  eyebrow,
  title,
  intro,
  points,
  reverse = false,
  cta,
  tone = "light",
}: {
  id?: string;
  /** Repère "01"–"04" affiché en filigrane sur le panneau visuel. */
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  points: SplitSectionPoint[];
  reverse?: boolean;
  cta?: { label: string; href: string };
  tone?: "light" | "dark";
}) {
  const isDarkTone = tone === "dark";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-24 ${isDarkTone ? "bg-green-primary text-text-light" : ""}`}
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}
          >
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
          </motion.div>

          <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <GeometricPanel label={index} tone={isDarkTone ? "dark" : "light"} rotate={reverse ? 4 : -4} />
          </div>
        </div>
      </Container>
    </section>
  );
}
