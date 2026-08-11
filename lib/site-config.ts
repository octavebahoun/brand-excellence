export const siteConfig = {
  name: "Excellence Team",
  tagline: "Team · Tech · Innovation",
  domain: "excellenceteam.site",
  url: "https://excellenceteam.site",
  title: "Excellence Team | Révolutionner l'Innovation Tech par les Étudiants",
  description:
    "Excellence Team conçoit des architectures cloud robustes et des applications SaaS scalables, propulsées par l'énergie des meilleurs talents universitaires.",
  email: "contact@excellenceteam.site",
  github: "https://github.com/octavebahoun",
  // TODO: remplacer par le vrai lien une fois le compte Cal.com (gratuit) créé côté équipe.
  bookingUrl: "https://cal.com/excellence-team",
  // TODO: remplacer par le vrai form ID Formspree.
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projets" },
  { label: "Services", href: "/services" },
  { label: "À propos", href: "/a-propos" },
  { label: "Journal", href: "/journal" },
  { label: "Contact", href: "/contact" },
];
