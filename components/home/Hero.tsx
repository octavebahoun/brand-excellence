"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { home } from "@/lib/home-content";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";

export function Hero() {
  const { hero } = home;

  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden border-b-4 border-orange-accent">
      <Image
        src={hero.image}
        alt="L'équipe Excellence Team"
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover object-center lg:object-[center_20%]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg-dark/70 via-transparent to-transparent" />

      <Container className="py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <Tag>{hero.eyebrow}</Tag>
          <h1 className="mt-6 text-5xl font-extrabold leading-[0.95] tracking-tight text-text-light sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>
          <p className="mt-7 max-w-md text-lg text-text-light/75">{hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href={hero.primaryCta.href}>{hero.primaryCta.label}</CtaButton>
            <CtaButton href={hero.secondaryCta.href} variant="outline-on-dark">
              {hero.secondaryCta.label}
            </CtaButton>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
