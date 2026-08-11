import servicesContent from "@/content/services.json";

export interface ServicePillar {
  tag: string;
  title: string;
  description: string;
  evidence: string[];
}

export interface MethodologyItem {
  title: string;
  description: string;
}

export interface ServicesContent {
  eyebrow: string;
  title: string;
  intro: string;
  pillars: ServicePillar[];
  methodologyEyebrow: string;
  methodologyTitle: string;
  methodology: MethodologyItem[];
}

export const services: ServicesContent = servicesContent as ServicesContent;
