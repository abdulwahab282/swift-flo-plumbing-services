"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/Button";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const open = menuPath === pathname;

  function toggleMenu() {
    setMenuPath((current) => (current === pathname ? null : pathname));
  }

  function closeMenu() {
    setMenuPath(null);
  }

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuPath(null);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-sand/80 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-2 px-4 sm:h-20 sm:gap-4 sm:px-8">
        <Link href="/" className="min-w-0 rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm font-medium transition",
                  active
                    ? "bg-foam text-tide-deep"
                    : "text-ink/80 hover:bg-paper hover:text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact#request-service"
            className="inline-flex h-10 items-center rounded-full bg-tide-deep px-3 text-xs font-semibold text-white sm:h-12 sm:px-6 sm:text-sm"
          >
            <span className="sm:hidden">Request</span>
            <span className="hidden sm:inline">Request Service</span>
          </Link>
          <button
            type="button"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-sand bg-white text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={toggleMenu}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition",
                  open ? "top-1.5 -rotate-45" : "top-3",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto border-t border-sand bg-cream sm:top-20 lg:hidden"
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 px-5 py-6">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-2xl px-4 py-4 font-display text-3xl",
                  active ? "bg-foam text-tide-deep" : "text-navy",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="mt-6 rounded-3xl bg-navy p-5 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
              {site.locationLabel}
            </p>
            <p className="mt-2 font-display text-2xl">{site.hours.days}</p>
            <p className="text-white/75">{site.hours.time}</p>
            <ButtonLink href="/contact#request-service" variant="light" className="mt-5 w-full">
              Request Service
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
