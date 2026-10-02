import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  tone = "dark",
  as = "h2",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h1" | "h2";
}) {
  const Title = as;

  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.22em]",
            tone === "light" ? "text-copper" : "text-tide-deep",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <Title
        className={cn(
          "font-display text-4xl leading-[1.08] sm:text-5xl",
          eyebrow ? "mt-3" : "",
          tone === "light" ? "text-white" : "text-navy",
        )}
      >
        {title}
      </Title>
      {text ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            tone === "light" ? "text-white/75" : "text-muted",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}
