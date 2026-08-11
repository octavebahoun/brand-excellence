const JOINTS: Array<[number, number]> = [
  [50, 18],
  [79.44, 35],
  [79.44, 69],
  [50, 86],
  [20.56, 69],
  [20.56, 35],
  [50, 52],
];

/**
 * Cube isométrique vectoriel — réinterprétation du logo en SVG manipulable
 * (currentColor pour le corps, accent orange fixe sur les jonctions, conforme
 * à IDENTITE_VISUELLE.md : "formes isométriques et 3D, structures imbriquées").
 */
export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
      <path
        d="M50 18 L79.44 35 L79.44 69 L50 86 L20.56 69 L20.56 35 Z M50 52 L50 18 M50 52 L79.44 69 M50 52 L20.56 35"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {JOINTS.map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x - 4.5}
          y={y - 4.5}
          width="9"
          height="9"
          rx="1.5"
          transform={`rotate(45 ${x} ${y})`}
          fill="#FF701A"
        />
      ))}
    </svg>
  );
}
