"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { serviceAreas } from "@/data/service-areas";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/Button";
import { Icon } from "@/components/Icons";
import { Logo } from "@/components/Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ServiceAreasDesktopNav({
  pathname,
}: {
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const active = isActive(pathname, "/service-areas");

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-medium transition",
          active || open
            ? "bg-foam text-tide-deep"
            : "text-ink/80 hover:bg-paper hover:text-navy",
        )}
      >
        Service Areas
        <Icon
          name="chevron"
          className={cn(
            "h-3.5 w-3.5 transition duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        id={menuId}
        role="menu"
        aria-label="Service areas"
        hidden={!open}
        className={cn(
          "absolute left-1/2 top-full z-50 w-[22rem] -translate-x-1/2 pt-3",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div className="overflow-hidden rounded-[1.5rem] border border-sand bg-white p-3 shadow-xl shadow-navy/10">
          <div className="mb-2 flex items-center justify-between gap-3 px-2 pt-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-tide-deep">
              Areas we serve
            </p>
            <Link
              href="/service-areas"
              role="menuitem"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-copper-deep underline decoration-copper/50 underline-offset-2 transition hover:text-tide-deep"
            >
              View all
            </Link>
          </div>
          <ul className="grid grid-cols-2 gap-1">
            {serviceAreas.map((area) => {
              const href = `/service-areas/${area.slug}`;
              const areaActive = pathname === href;

              return (
                <li key={area.slug}>
                  <Link
                    href={href}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    aria-current={areaActive ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition",
                      areaActive
                        ? "bg-foam text-tide-deep"
                        : "text-navy hover:bg-paper hover:text-tide-deep",
                    )}
                  >
                    <Icon name="pin" className="h-3.5 w-3.5 shrink-0 text-tide-deep" />
                    <span className="truncate">{area.city}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function ServiceAreasMobileNav({
  pathname,
  onNavigate,
}: {
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(() => isActive(pathname, "/service-areas"));
  const active = isActive(pathname, "/service-areas");
  const menuId = useId();

  useEffect(() => {
    setOpen(isActive(pathname, "/service-areas"));
  }, [pathname]);

  return (
    <div className="rounded-2xl">
      <div
        className={cn(
          "flex items-center rounded-2xl",
          active ? "bg-foam text-tide-deep" : "text-navy",
        )}
      >
        <Link
          href="/service-areas"
          onClick={onNavigate}
          aria-current={pathname === "/service-areas" ? "page" : undefined}
          className="min-w-0 flex-1 px-4 py-4 font-display text-3xl"
        >
          Service Areas
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((current) => !current)}
          className="mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand/80 bg-white/70 text-navy"
        >
          <span className="sr-only">
            {open ? "Hide service areas" : "Show service areas"}
          </span>
          <Icon
            name="chevron"
            className={cn(
              "h-5 w-5 transition duration-300",
              open && "rotate-180",
            )}
          />
        </button>
      </div>

      <div id={menuId} hidden={!open} className="px-2 pb-3 pt-1">
        <ul className="grid gap-1 rounded-[1.25rem] border border-sand bg-white p-2">
          {serviceAreas.map((area) => {
            const href = `/service-areas/${area.slug}`;
            const areaActive = pathname === href;

            return (
              <li key={area.slug}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  aria-current={areaActive ? "page" : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-base font-medium transition",
                    areaActive
                      ? "bg-foam text-tide-deep"
                      : "text-navy hover:bg-paper",
                  )}
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-foam text-tide-deep">
                    <Icon name="pin" className="h-4 w-4" />
                  </span>
                  {area.city}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/service-areas"
              onClick={onNavigate}
              className="mt-1 flex items-center justify-center rounded-xl px-3 py-3 text-sm font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
            >
              View all service areas
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
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
            if (link.href === "/service-areas") {
              return (
                <ServiceAreasDesktopNav key={link.href} pathname={pathname} />
              );
            }

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
            if (link.href === "/service-areas") {
              return (
                <ServiceAreasMobileNav
                  key={link.href}
                  pathname={pathname}
                  onNavigate={closeMenu}
                />
              );
            }

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
