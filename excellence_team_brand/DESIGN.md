# Spécifications de Design — Excellence Team
## Design Tokens & Système Visuel (DESIGN.md)

Ce document pose les bases du système de design d'**Excellence Team** pour garantir une cohérence visuelle sur l'ensemble de nos interfaces, applications SaaS, documentations et supports de communication.

---

## 1. Palette de Couleurs (Color Tokens)

Notre palette allie la rigueur et la profondeur de la technologie forestière à l'énergie brute et vibrante de la jeunesse innovante.

| Rôle | Token | Valeur Hex | Code RGB | Utilisation |
| :--- | :--- | :--- | :--- | :--- |
| **Primaire** | `color-green-primary` | `#1A433A` | `(26, 67, 58)` | Vert forêt profond. Incarne la stabilité, la rigueur et l'excellence académique. |
| **Accent Tech** | `color-orange-accent` | `#FF701A` | `(255, 112, 26)` | Orange Tech vif. Incarne l'énergie, la vigueur, la tech et la jeunesse. |
| **Fond Clair** | `color-bg-light` | `#F2F1ED` | `(242, 241, 237)`| Béton doux (Soft Concrete). Fond minimaliste haut de gamme. |
| **Carte Claire** | `color-card-light` | `#FFFFFF` | `(255, 255, 255)`| Blanc pur. Surfaces d'affichage de contenu en mode clair. |
| **Fond Sombre** | `color-bg-dark` | `#0F172A` | `(15, 23, 42)` | Slate profond. Fond technologique pour les dashboards et présentations sombres. |
| **Carte Sombre** | `color-card-dark` | `#1E293B` | `(30, 41, 59)` | Slate moyen. Conteneurs et cartes en mode sombre. |
| **Texte Principal (Clair)** | `color-text-light` | `#F8FAFC` | `(248, 250, 252)`| Blanc bleuté. Lisibilité maximale sur fond sombre. |
| **Texte Principal (Sombre)**| `color-text-dark` | `#1E293B` | `(30, 41, 59)` | Slate foncé. Lisibilité maximale sur fond clair. |
| **Texte Muted (Clair)** | `color-muted-light` | `#64748B` | `(100, 116, 139)`| Gris ardoise clair. Légendes et textes secondaires sur fond clair. |
| **Texte Muted (Sombre)** | `color-muted-dark` | `#94A3B8` | `(148, 163, 184)`| Gris ardoise moyen. Légendes et textes secondaires sur fond sombre. |
| **Bordure** | `color-border-gray` | `#CBD5E1` | `(203, 213, 225)`| Gris neutre. Séparateurs de cartes et conteneurs. |

### Rendu visuel de la colorimétrie
Pour les spécifications exactes de rendu des couleurs sous forme de charte, référez-vous au fichier colorimétrique :
`../Brand_identity_sheet_colorimetry…_2K_202608070006.jpeg`

---

## 2. Typographie (Typography Tokens)

Nous utilisons un contraste fort entre une typographie géométrique hautement lisible pour le contenu et une typographie à espacement fixe (Monospace) pour les accents techniques et les métadonnées.

### Polices Recommandées

*   **Titres et Corps : Arial / Inter / Outfit**
    *   *Rôle :* Lisibilité moderne, neutre et haut de gamme.
    *   *Usage :* Titres de pages, corps de texte, boutons.
*   **Accents Techniques : Consolas / Fira Code / JetBrains Mono**
    *   *Rôle :* Esthétique tech, brutale et précise. Incarne l'esprit "code", open-source et hackathon.
    *   *Usage :* Balises de catégories, numéros de diapositives, métadonnées, légendes techniques.

### Échelle Typographique

```css
--font-family-sans: 'Arial', 'Inter', sans-serif;
--font-family-mono: 'Consolas', 'Fira Code', monospace;

--font-size-hero: 36px;      /* Titres de couvertures / Slides d'introduction */
--font-size-h1: 24px;        /* Titres de sections / Slides standards */
--font-size-h2: 16px;        /* Sous-titres importants / Noms de sections */
--font-size-body: 13px;      /* Corps de texte principal */
--font-size-mono-small: 11px;/* Étiquettes techniques, tags de catégorie */
--font-size-footer: 9px;     /* Mentions légales, pieds de page */
```

---

## 3. Formes & Bordures (Shape Tokens)

*   **Arrondis de Cartes (Border Radius) :** `8px` à `12px` (`rounded-lg`). Offre un aspect propre et moderne, atténuant la rigidité des grilles techniques.
*   **Arrondis de Boutons/CTAs :** `6px` ou angles droits pour un style plus "brutaliste" et technique.
*   **Épaisseur de Bordure :** `1.5px` à `2px` (solide). Toujours utiliser des couleurs contrastées :
    *   *Mode clair :* `#1A433A` (Vert forêt) pour faire ressortir les éléments clés.
    *   *Mode sombre :* `#FF701A` (Orange accent) pour un effet de luminescence électrique sur slate sombre.

---

## 4. Grille & Layout (Grid Specification)

Les interfaces Web et applicatives respectent une grille modulaire rigoureuse à 12 colonnes avec des marges généreuses pour aérer le contenu technique.

*   **Nombre de colonnes :** 12
*   **Gutter (Espace entre colonnes) :** `24px`
*   **Marges extérieures (Gutter de page) :** `32px` à `48px`
*   **Ratio d'aspect des diapositives et maquettes :** 16:9 (`13.333 inches` x `7.5 inches` pour PowerPoint/PDF).

### Spécification visuelle de la grille
Pour les spécifications de mise en page technique de la grille d'interface web, veuillez consulter la fiche technique :
`../Web_layout_grid_specification_sheet_202608070010.jpeg`
