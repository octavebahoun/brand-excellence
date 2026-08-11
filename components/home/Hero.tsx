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
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <Tag>{hero.eyebrow}</Tag>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-green-primary sm:text-5xl dark:text-text-light">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-light dark:text-muted-dark">
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6"
        >
          <GeometricPanel tone="light" />
        </motion.div>
      </Container>
    </section>
  );
}
