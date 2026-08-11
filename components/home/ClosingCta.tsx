import Image from "next/image";
import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";
import { siteConfig } from "@/lib/site-config";

export function ClosingCta() {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-border-gray/60">
          <Image
            src="/images/closing-slide.jpg"
            alt="Excellence Team — bâtissons votre prochaine innovation"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/85 to-bg-dark/40" />

          <div className="relative px-8 py-20 text-center sm:px-16 sm:py-28">
            <Tag>TEAM • TECH • INNOVATION</Tag>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-text-light sm:text-4xl">
              Bâtissons votre prochaine innovation.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-text-light/70">
              Rejoignez un collectif d&rsquo;étudiants talentueux déterminés à redéfinir les
              standards de la tech d&rsquo;entreprise.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <CtaButton href="/contact">Planifier un entretien technique</CtaButton>
              <CtaButton href={`mailto:${siteConfig.email}`} variant="outline" external>
                {siteConfig.email}
              </CtaButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
