import aboutContent from "@/content/about.json";

export interface AboutValue {
  title: string;
  description: string;
}

export interface AboutContent {
  eyebrow: string;
  title: string;
  intro: string;
  mission: {
    eyebrow: string;
    title: string;
    body: string;
  };
  values: AboutValue[];
  cultureImage: string;
  teamEyebrow: string;
  teamTitle: string;
}

export const about: AboutContent = aboutContent as AboutContent;
