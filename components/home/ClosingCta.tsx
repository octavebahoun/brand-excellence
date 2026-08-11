"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { home } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";

export function ClosingCta() {
  const { closing } = home;

  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative isolate overflow-hidden border-2 border-orange-accent shadow-[8px_8px_0_0_var(--color-green-primary)]"
        >
          <Image
            src={closing.image}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bg-dark via-bg-dark/85 to-bg-dark/50" />

          <div className="px-8 py-20 text-center sm:px-16 sm:py-28">
            <Tag>{closing.eyebrow}</Tag>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-text-light sm:text-4xl">
              {closing.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-text-light/70">{closing.subtitle}</p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CtaButton href={closing.cta.href}>{closing.cta.label}</CtaButton>
              <CtaButton href={`mailto:${siteConfig.email}`} variant="outline-on-dark" external>
                {siteConfig.email}
              </CtaButton>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
