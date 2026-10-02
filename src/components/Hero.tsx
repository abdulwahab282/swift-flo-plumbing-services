import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";

const facts = [
  { label: "Coverage", value: "12 Middle TN Cities" },
  { label: "Schedule", value: "Mon – Sun, 8 AM – 8 PM" },
  { label: "Specialty", value: "100% Professional Plumbing" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper" data-hero>
      <Container className="grid items-stretch gap-10 py-12 md:grid-cols-2 md:py-16 lg:gap-14 lg:py-20">
        <div className="@container flex min-w-0 flex-col justify-center">
          <div data-hero-item className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foam px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
              <Icon name="pin" className="h-3.5 w-3.5 text-copper" />
              Nashville & Middle Tennessee · TN
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-sand bg-white px-3 py-1 text-xs font-medium text-navy">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Open Daily
            </span>
          </div>

          <h1
            data-hero-item
            className="mt-5 font-display text-[clamp(2.1rem,9cqi,3.6rem)] leading-[1.05] tracking-tight text-navy"
          >
            <span className="block">Professional</span>
            <span className="block">Plumbing Services</span>
            <span className="block italic text-tide-deep">
              Across Middle Tennessee
            </span>
          </h1>

          <p
            data-hero-item
            className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Dependable, high-quality plumbing solutions for homeowners and
            businesses throughout Nashville, Franklin, Murfreesboro, and
            surrounding Middle Tennessee communities. Request your visit or free
            quote today.
          </p>

          <div
            data-hero-item
            className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink
              href="/contact"
              withArrow
              className="w-full sm:w-auto text-center"
            >
              Get a Free Quote
            </ButtonLink>
            <ButtonLink
              href="/services"
              variant="secondary"
              className="w-full sm:w-auto text-center"
            >
              View Our Services
            </ButtonLink>
            <CallNowLink className="w-full sm:w-auto" />
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-sand pt-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-sand">
            {facts.map((fact) => (
              <div
                key={fact.label}
                data-hero-item
                className="min-w-0 sm:px-4 sm:first:pl-0 sm:last:pr-0"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-copper-deep">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-bold leading-snug text-navy">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          data-hero-media
          className="relative h-full min-w-0 md:min-h-[34rem]"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2.25rem] border border-sand bg-white shadow-2xl shadow-navy/15 sm:aspect-[5/4] md:absolute md:inset-0 md:aspect-auto">
            <div data-hero-photo className="absolute inset-0">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 via-navy/10 to-transparent"
              />
            </div>

            {/* Floating Glassmorphic Trust Badges */}
            <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2 sm:gap-3">
              <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-tide-deep text-white">
                  <Icon name="shieldCheck" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Quality Standard</p>
                  <p className="text-xs font-bold text-navy">Licensed & Insured</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-2xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-md">
                <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-copper text-white">
                  <Icon name="clock" className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-muted">Availability</p>
                  <p className="text-xs font-bold text-navy">7 Days · 8AM – 8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
