"use client";

import { motion } from "motion/react";
import { home } from "@/lib/home-content";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";
import { GeometricPanel } from "./GeometricPanel";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative overflow-hidden pb-24 pt-16 md:pt-24">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, x: -56 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <Tag>{hero.eyebrow}</Tag>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-green-primary sm:text-6xl lg:text-7xl dark:text-text-light">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-md text-lg text-muted-light dark:text-muted-dark">
            {hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href={hero.primaryCta.href}>{hero.primaryCta.label}</CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="outline">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 56, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 lg:-ml-10"
        >
          <GeometricPanel tone="light" />
          <p className="mt-3 text-right font-mono text-[11px] uppercase tracking-widest text-muted-light dark:text-muted-dark">
            Fig. 00 — Lokossa · Cotonou · Bénin
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
