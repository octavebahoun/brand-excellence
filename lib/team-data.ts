import teamContent from "@/content/team.json";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  specialty: string;
  quote: string;
  portfolio?: string;
  /** Photo temporaire (stock ou dupliquée) en attente de la vraie photo du membre. */
  isPlaceholderPhoto?: boolean;
}

export const team: TeamMember[] = teamContent as TeamMember[];
