import { ClosingCta } from "@/components/home/ClosingCta";
import { Hero } from "@/components/home/Hero";
import { SplitSection } from "@/components/home/SplitSection";

export default function Home() {
  return (
    <>
      <Hero />

      <SplitSection
        id="defi"
        eyebrow="01 // LE DÉFI"
        title="Pourquoi la tech d'entreprise stagne-t-elle ?"
        intro="Les solutions logicielles existantes souffrent de trois freins majeurs :"
        points={[
          {
            title: "Lenteur de déploiement",
            description: "Les structures traditionnelles mettent des mois à adapter leurs outils.",
          },
          {
            title: "Manque de souveraineté",
            description:
              "Les données locales sont externalisées sans garantie de confidentialité.",
          },
          {
            title: "Déconnexion terrain",
            description: "Des outils complexes conçus loin des utilisateurs réels.",
          },
        ]}
        image="/images/problem-slide.jpg"
        imageAlt="Illustration de la problématique du marché"
      />

      <SplitSection
        id="solution"
        eyebrow="02 // LA SOLUTION"
        title="Des logiciels performants livrés en deux semaines."
        intro="Nous créons des applications web et SaaS taillées pour le terrain :"
        points={[
          {
            title: "Vitesse d'exécution",
            description:
              "Un cycle de développement agile axé sur un prototype fonctionnel immédiat.",
          },
          {
            title: "Sécurité intégrée",
            description:
              "Chiffrement local et hébergement cloud souverain pour protéger vos secrets d'affaires.",
          },
          {
            title: "Interface intuitive",
            description: "Un design centré sur l'utilisateur, éliminant les clics inutiles.",
          },
        ]}
        image="/images/solution-slide.jpg"
        imageAlt="Visualisation du produit et de la solution"
        reverse
        cta={{ label: "Lancer une simulation de projet", href: "/contact" }}
      />

      <SplitSection
        id="architecture"
        eyebrow="03 // ARCHITECTURE & BLUEPRINT"
        title="Une infrastructure moderne, robuste et ouverte."
        intro="Notre stack technique repose sur trois piliers d'ingénierie :"
        points={[
          {
            title: "Composants Open-Source",
            description: "Indépendance totale vis-à-vis des licences éditeurs.",
          },
          {
            title: "Pipeline Cloud Souverain",
            description: "Déploiement automatisé sur serveurs locaux sécurisés.",
          },
          {
            title: "Architecture API-First",
            description:
              "Intégration facile avec vos outils de comptabilité ou ERP existants.",
          },
        ]}
        image="/images/architecture-blueprint.jpg"
        imageAlt="Schéma d'architecture technique et stack"
        tone="dark"
      />

      <SplitSection
        id="equipe"
        eyebrow="04 // COLLECTIF & VIGUEUR"
        title="La force de l'apprentissage par la pratique."
        intro="Excellence Team réunit les meilleurs étudiants en ingénierie et design. Sans le poids des méthodes obsolètes, nous apportons :"
        points={[
          {
            title: "Vigueur et réactivité",
            description: "Une disponibilité totale et une vitesse d'apprentissage hors pair.",
          },
          {
            title: "Pragmatisme",
            description:
              "Nous apprenons en faisant, validant chaque brique de code par des tests rigoureux.",
          },
          {
            title: "Solidarité",
            description:
              "Un collectif soudé qui partage ses compétences pour résoudre vos défis complexes.",
          },
        ]}
        image="/images/team-slide.jpg"
        imageAlt="Layout de présentation de l'équipe"
        reverse
        cta={{ label: "Découvrir l'équipe", href: "/a-propos" }}
      />

      <ClosingCta />
    </>
  );
}
