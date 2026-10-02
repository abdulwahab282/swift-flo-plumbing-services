import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { serviceAreas } from "@/data/service-areas";
import { phoneHref, site } from "@/data/site";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-20 w-20 object-contain sm:h-24 sm:w-24" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
            {site.service} for customers in {site.locationFull}. Open{" "}
            {site.hours.days}, {site.hours.time}.
          </p>
          <ButtonLink href="/contact#request-service" variant="light" className="mt-6">
            Request Service
          </ButtonLink>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Quick Links
          </p>
          <nav aria-label="Footer" className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Areas We Serve
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-white/80">
            {serviceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/service-areas/${area.slug}`}
                  className="transition hover:text-white hover:underline"
                >
                  {area.city}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/service-areas"
            className="mt-4 inline-block text-xs font-semibold text-copper hover:text-white"
          >
            View all 12 service locations →
          </Link>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
            Business Hours
          </p>
          <p className="mt-4 text-sm text-white/80">{site.hours.days}</p>
          <p className="text-sm text-white/80">{site.hours.time}</p>
          <p className="mt-4 text-sm text-white/80">{site.locationLabel}</p>
          {site.phone ? (
            <a
              href={phoneHref(site.phone)}
              className="mt-3 block text-sm text-white hover:text-copper"
            >
              {site.phone}
            </a>
          ) : null}
          {site.email ? (
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block break-all text-sm text-white hover:text-copper"
            >
              {site.email}
            </a>
          ) : null}
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-5 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>
            {site.service} · {site.locationLabel}
          </p>
        </Container>
      </div>
    </footer>
  );
}
