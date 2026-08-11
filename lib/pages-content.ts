import pagesContent from "@/content/pages.json";

export interface ProjetsPageContent {
  eyebrow: string;
  title: string;
  intro: string;
}

export interface JournalPageContent {
  eyebrow: string;
  title: string;
  intro: string;
  emptyStateTag: string;
  emptyStateMessage: string;
}

export interface ContactPageContent {
  eyebrow: string;
  title: string;
  intro: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  bookingTitle: string;
  bookingDescription: string;
  bookingCta: string;
  coordinatesTitle: string;
}

interface PagesContent {
  projets: ProjetsPageContent;
  journal: JournalPageContent;
  contact: ContactPageContent;
}

const content = pagesContent as PagesContent;

export const projetsPage = content.projets;
export const journalPage = content.journal;
export const contactPage = content.contact;
