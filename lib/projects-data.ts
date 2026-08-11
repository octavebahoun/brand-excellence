import projectsContent from "@/content/projects.json";

export type ProjectCategory = "opensource" | "produit" | "client";

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  kind: string;
  category: ProjectCategory;
  summary: string;
  detail: string;
  stack: string[];
  links: ProjectLink[];
  /** Local /public path or remote (Cloudinary) URL. Absent = styled fallback card. */
  image?: string;
  date?: string;
  /** Contenu provisoire en attente de mise à jour par l'équipe. */
  isDraft?: boolean;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  opensource: "Open Source",
  produit: "Produits",
  client: "Projets Clients",
};

export const projects: Project[] = projectsContent as Project[];

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
