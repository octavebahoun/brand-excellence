import siteContent from "@/content/site.json";

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  title: string;
  description: string;
  email: string;
  github: string;
  bookingUrl: string;
  formspreeEndpoint: string;
  nav: NavLink[];
}

export const siteConfig: SiteConfig = siteContent;
export const navLinks: NavLink[] = siteContent.nav;
