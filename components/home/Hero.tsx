import { CtaButton } from "../ui/CtaButton";
import { Container } from "../ui/Container";
import { Tag } from "../ui/Tag";
import { HeroScene } from "./HeroScene";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-16 md:pt-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-6">
          <Tag>EXCELLENCE TEAM</Tag>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-green-primary sm:text-5xl dark:text-text-light">
            L&rsquo;innovation tech n&rsquo;attend pas les années d&rsquo;expérience.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-muted-light dark:text-muted-dark">
            Nous construisons des architectures cloud robustes et des applications SaaS
            scalables, propulsées par l&rsquo;énergie des meilleurs talents universitaires.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CtaButton href="/projets">Explorer nos projets open-source</CtaButton>
            <CtaButton href="/services" variant="outline">
              Voir nos services
            </CtaButton>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div
            className="relative aspect-[16/9] overflow-hidden rounded-card border border-border-gray/60 shadow-2xl shadow-green-primary/10"
            aria-hidden="true"
          >
            <HeroScene />
          </div>
        </div>
      </Container>
    </section>
  );
}
