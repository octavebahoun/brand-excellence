import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { SplitSection } from "@/components/home/SplitSection";
import { home } from "@/lib/home-content";

export default function Home() {
  return (
    <>
      <Hero />

      {home.sections.map((section) => (
        <SplitSection key={section.id} index={section.eyebrow.split(" ")[0]} {...section} />
      ))}

      <ClosingCta />
    </>
  );
}
