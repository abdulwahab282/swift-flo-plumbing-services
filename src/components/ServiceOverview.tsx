import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";

const regionalPoints = [
  {
    title: "Equipped Service Vehicles",
    text: "Our vans arrive fully loaded with contractor-grade replacement parts, high-pressure equipment, and diagnostic tools to complete jobs on the first trip.",
    icon: "wrench" as const,
  },
  {
    title: "Regional Route Coordination",
    text: "Strategically positioned technicians across Davidson, Williamson, Rutherford, Sumner, and Wilson counties ensure timely arrivals.",
    icon: "pin" as const,
  },
  {
    title: "Clean Work Practices",
    text: "We protect your flooring with heavy drop cloths and shoe coverings, leaving your kitchen, bathroom, or utility room cleaner than we found it.",
    icon: "shieldCheck" as const,
  },
  {
    title: "Code-Compliant Standards",
    text: "Every installation and repair adheres strictly to local municipal building codes and national plumbing standards for your home's protection.",
    icon: "award" as const,
  },
];

export function ServiceOverview() {
  return (
    <section className="bg-cream py-16 sm:py-24" aria-labelledby="service-overview-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Regional Operations
            </p>
            <h2
              id="service-overview-heading"
              className="mt-3 font-display text-4xl leading-[1.1] text-navy sm:text-5xl"
            >
              Professional Service Across Middle Tennessee
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              From Nashville to surrounding communities such as Franklin,
              Brentwood, Murfreesboro, Hendersonville, Smyrna, and beyond, we
              provide dependable professional services designed around our
              customers&apos; needs.
            </p>
          </div>

          <div data-reveal-group className="mt-8 grid gap-4 sm:grid-cols-2">
            {regionalPoints.map((point) => (
              <div
                key={point.title}
                data-reveal-item
                className="rounded-2xl border border-sand bg-white p-5 shadow-sm transition hover:border-tide/40"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-foam text-tide-deep">
                  <Icon name={point.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-lg text-navy">
                  {point.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-tide-deep px-6 py-3 text-sm font-semibold text-white shadow-md shadow-tide-deep/20 transition hover:bg-tide"
            >
              Request Plumbing Service
              <span>→</span>
            </Link>
            <Link
              href="/service-areas"
              className="inline-flex items-center rounded-full border border-sand bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-copper"
            >
              View Service Locations
            </Link>
          </div>
        </div>

        <div data-reveal className="relative h-full min-w-0">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-sand bg-white shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={images.serviceOverview.src}
              alt={images.serviceOverview.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-sand bg-white p-5 shadow-xl sm:block max-w-xs">
            <p className="text-xs font-semibold uppercase tracking-wider text-copper-deep">
              Coverage Footprint
            </p>
            <p className="mt-1 font-display text-xl text-navy">
              5 Major Counties
            </p>
            <p className="mt-1 text-xs text-muted">
              Davidson, Williamson, Rutherford, Wilson & Sumner
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
