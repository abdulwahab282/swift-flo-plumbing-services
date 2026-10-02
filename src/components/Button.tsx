import Link from "next/link";
import type { ReactNode } from "react";
import { phoneHref, site } from "@/data/site";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/Icons";

type Variant = "primary" | "secondary" | "light" | "ghost";

const variants: Record<Variant, string> = {
  primary: "bg-tide-deep text-white shadow-sm hover:bg-tide",
  secondary:
    "border border-sand bg-white text-navy hover:border-tide hover:text-tide-deep",
  light: "bg-white text-navy hover:bg-foam",
  ghost: "border border-white/35 bg-white/5 text-white hover:bg-white/15",
};

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  withArrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      {children}
      {withArrow ? <Icon name="arrow" className="h-4 w-4" /> : null}
    </Link>
  );
}

export function CallNowLink({
  variant = "secondary",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const classNames = cn(base, variants[variant], className);

  if (site.phone) {
    return (
      <a href={phoneHref(site.phone)} className={classNames}>
        <Icon name="phone" className="h-4 w-4" />
        Call Now
      </a>
    );
  }

  return (
    <Link
      href="/contact#request-service"
      className={classNames}
      aria-label="Contact Swift Flo Plumbing Services"
    >
      <Icon name="phone" className="h-4 w-4" />
      Call Now
    </Link>
  );
}
