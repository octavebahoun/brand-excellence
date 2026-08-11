"use client";

import { motion } from "motion/react";
import { home } from "@/lib/home-content";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Logo } from "../ui/Logo";
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
          className="relative overflow-hidden rounded-card border border-white/10 bg-bg-dark"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-green-primary/60 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-accent/20 blur-3xl" />
          </div>
          <Logo
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-white/[0.05] sm:h-80 sm:w-80"
          />

          <div className="relative px-8 py-20 text-center sm:px-16 sm:py-28">
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
