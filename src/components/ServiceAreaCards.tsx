import Link from "next/link";
import { serviceAreas } from "@/data/service-areas";
import { Icon } from "@/components/Icons";

export function ServiceAreaCards({
  linked = true,
  className = "",
}: {
  linked?: boolean;
  className?: string;
}) {
  return (
    <ul
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${className}`}
    >
      {serviceAreas.map((area) => {
        const content = (
          <>
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
              <Icon name="pin" className="h-5 w-5" />
            </span>
            <span className="min-w-0">
              <span className="block font-display text-xl leading-tight text-navy sm:text-2xl">
                {area.city}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-tide-deep">
                {area.stateName}
              </span>
            </span>
          </>
        );

        return (
          <li key={area.slug}>
            {linked ? (
              <Link
                href={`/service-areas/${area.slug}`}
                className="group flex h-full min-h-[5.5rem] items-center gap-4 rounded-[1.75rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg"
              >
                {content}
              </Link>
            ) : (
              <div className="group flex h-full min-h-[5.5rem] items-center gap-4 rounded-[1.75rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
