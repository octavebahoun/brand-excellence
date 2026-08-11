import { Tag } from "./Tag";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-16 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <Tag>{eyebrow}</Tag>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-green-primary sm:text-4xl dark:text-text-light">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 text-lg text-muted-light dark:text-muted-dark">{intro}</p>
      ) : null}
    </div>
  );
}
