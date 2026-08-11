import homeContent from "@/content/home.json";

export interface HomePoint {
  title: string;
  description: string;
}

export interface HomeCta {
  label: string;
  href: string;
}

export interface HomeSection {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  points: HomePoint[];
  reverse: boolean;
  tone: "light" | "dark";
  cta?: HomeCta;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    image: string;
    primaryCta: HomeCta;
    secondaryCta: HomeCta;
  };
  sections: HomeSection[];
  closing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: HomeCta;
  };
}

export const home: HomeContent = homeContent as HomeContent;
