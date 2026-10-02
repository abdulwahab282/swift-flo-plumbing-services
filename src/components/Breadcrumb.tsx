import Link from "next/link";

export function Breadcrumb({
  items,
  tone = "light",
}: {
  items: { href?: string; label: string }[];
  tone?: "light" | "dark";
}) {
  const link =
    tone === "dark"
      ? "text-white/70 hover:text-white"
      : "text-muted hover:text-tide-deep";
  const current = tone === "dark" ? "text-white" : "text-navy";

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? (
              <span aria-hidden="true" className={tone === "dark" ? "text-white/40" : "text-sand"}>
                /
              </span>
            ) : null}
            {item.href ? (
              <Link href={item.href} className={link}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className={current}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
