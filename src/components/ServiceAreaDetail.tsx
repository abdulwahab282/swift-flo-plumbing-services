import Image from "next/image";
import Link from "next/link";
import type { ServiceArea } from "@/data/service-areas";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { ServiceAreaCards } from "@/components/ServiceAreaCards";

const serviceHighlights = [
  {
    title: "Residential plumbing",
    text: "Reliable plumbing support for homes, from repairs to planned fixture work.",
    icon: "droplet" as const,
  },
  {
    title: "Clear communication",
    text: "Straightforward updates from the first request through scheduling and completion.",
    icon: "users" as const,
  },
  {
    title: "Quality workmanship",
    text: "Professional attention on the plumbing job you requested, done with care.",
    icon: "wrench" as const,
  },
];

export function ServiceAreaDetail({
  area,
  breadcrumb,
}: {
  area: ServiceArea;
  breadcrumb?: { href?: string; label: string }[];
}) {
  const heroImage = images[area.heroImage];
  const aboutImage = images[area.about.image];
  const overviewImage = images[area.overview.image];
  const ctaImage = images[area.cta.image];
  const service = services[0];

  return (
    <>
      {/* 1. Hero */}
      <PageHero
        eyebrow={`${area.city}, ${area.state}`}
        title={`Professional plumbing services in ${area.city}.`}
        description={area.introduction}
        image={heroImage}
        breadcrumb={
          breadcrumb ?? [
            { href: "/", label: "Home" },
            { href: "/service-areas", label: "Service Areas" },
            { label: area.label },
          ]
        }
        actions={
          <>
            <ButtonLink href="/contact" variant="light" withArrow>
              Get a Free Quote
            </ButtonLink>
            <ButtonLink href="/services" variant="ghost">
              View Our Services
            </ButtonLink>
          </>
        }
      />

      {/* 2. Highlights */}
      <section
        className="bg-paper py-20 sm:py-28"
        aria-labelledby="area-highlights-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Why local matters
            </p>
            <h2
              id="area-highlights-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              Plumbing coverage you can count on in {area.city}.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Clear local availability, dependable service, and convenient
              scheduling for customers throughout {area.label}.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {area.whyLocal.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name="pin" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy sm:text-3xl">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. About */}
      <section
        className="bg-cream py-20 sm:py-28"
        aria-labelledby="area-about-heading"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              About
            </p>
            <h2
              id="area-about-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              {area.about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {area.about.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              Open {site.hours.days}, {site.hours.time}. Request service online
              and tell us about the plumbing work you need in {area.city}.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact#request-service" withArrow>
                Get a Free Quote
              </ButtonLink>
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center font-semibold text-tide-deep underline decoration-copper underline-offset-4"
              >
                About the company
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. Our Services */}
      <section
        className="bg-foam py-20 sm:py-28"
        aria-labelledby="area-services-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Our services
            </p>
            <h2
              id="area-services-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              {area.services.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {area.services.description}
            </p>
          </div>

          <article className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] border border-sand bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="grid gap-0 md:grid-cols-[1fr_1.1fr]">
              <div className="flex flex-col justify-center bg-gradient-to-br from-tide-deep to-navy p-8 text-white sm:p-10">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-3xl sm:text-4xl">
                  {service.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/80">
                  Dependable plumbing solutions for {area.city} homes and
                  businesses — with quality workmanship and clear customer
                  communication.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={`/services/${service.slug}`} variant="light">
                    Learn More
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="ghost">
                    Contact Us
                  </ButtonLink>
                </div>
              </div>
              <div className="p-7 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
                  What you can expect in {area.city}
                </p>
                <ul className="mt-5 space-y-4">
                  {serviceHighlights.map((item) => (
                    <li
                      key={item.title}
                      className="flex gap-4 rounded-[1.25rem] border border-sand bg-cream/70 p-4 transition duration-300 hover:border-tide/30 hover:bg-white"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                        <Icon name={item.icon} />
                      </span>
                      <span>
                        <span className="block font-display text-xl text-navy">
                          {item.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-muted">
                          {item.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-semibold text-navy">
                  {site.hours.days}
                  <span className="mx-2 text-copper" aria-hidden="true">
                    ·
                  </span>
                  {site.hours.time}
                </p>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* 5. Service Overview */}
      <section
        className="bg-cream py-20 sm:py-28"
        aria-labelledby="area-overview-heading"
      >
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Service overview
            </p>
            <h2
              id="area-overview-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              {area.overview.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {area.overview.description}
            </p>
            <ul className="mt-8 space-y-3">
              {[
                `Local plumbing coverage for ${area.city} customers`,
                "Clear requests and straightforward follow-up",
                "Quality workmanship focused on lasting results",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
            <ButtonLink
              href="/contact#request-service"
              className="mt-8"
              withArrow
            >
              Request Plumbing Service
            </ButtonLink>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={overviewImage.src}
              alt={overviewImage.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        </Container>
      </section>

      {/* 6. Service Details */}
      <section
        className="bg-foam py-20 sm:py-28"
        aria-labelledby="area-details-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Service details
            </p>
            <h2
              id="area-details-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              {area.details.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {area.details.description}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {area.details.points.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-display text-2xl text-navy">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 7. Why Choose Us */}
      <section
        className="bg-cream py-20 sm:py-28"
        aria-labelledby="area-why-heading"
      >
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Why choose us
            </p>
            <h2
              id="area-why-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              {area.whyChooseUs.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {area.whyChooseUs.description}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {area.whyChooseUs.reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={reason.icon} />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy">
                  {reason.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* 8. FAQs */}
      <section
        className="bg-paper py-20 sm:py-28"
        aria-labelledby="area-faq-heading"
      >
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              FAQ
            </p>
            <h2
              id="area-faq-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-navy sm:text-5xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Clear answers about plumbing services, availability, pricing, and
              scheduling for customers in {area.city}, Tennessee.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {area.faqs.map((faq, index) => (
              <details
                key={faq.question}
                open={index === 0}
                className="group rounded-[1.5rem] border border-sand bg-white px-5 py-4 sm:px-6 sm:py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl text-navy sm:text-2xl">
                  {faq.question}
                  <Icon
                    name="chevron"
                    className="h-5 w-5 shrink-0 text-copper-deep transition duration-300 group-open:rotate-180"
                  />
                </summary>
                <p className="mt-3 leading-relaxed text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* 9. Local coverage + map */}
      <section
        className="bg-cream py-20 sm:py-28"
        aria-labelledby="area-coverage-heading"
      >
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Local coverage
            </p>
            <h2
              id="area-coverage-heading"
              className="mt-3 font-display text-4xl text-navy sm:text-5xl"
            >
              Serving {area.label}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.name} arranges professional plumbing visits for customers in{" "}
              {area.city}. Use the map for city-level reference — a street
              address has not been published.
            </p>
            <ul className="mt-6 space-y-3">
              {area.serviceNotes.map((note) => (
                <li
                  key={note}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 text-ink"
                >
                  {note}
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact#request-service" className="mt-8" withArrow>
              Get a Free Quote
            </ButtonLink>
          </div>
          <MapEmbed area={area} />
        </Container>
      </section>

      {/* 10. Also serving */}
      <section
        className="bg-foam py-20 sm:py-28"
        aria-labelledby="area-also-serving-heading"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Also serving
            </p>
            <h2
              id="area-also-serving-heading"
              className="mt-3 font-display text-4xl text-navy sm:text-5xl"
            >
              More Middle Tennessee communities
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {area.city} is part of our wider plumbing coverage across Nashville
              and surrounding communities.
            </p>
          </div>
          <div className="mt-10">
            <ServiceAreaCards excludeSlug={area.slug} />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/service-areas"
              className="font-semibold text-tide-deep underline decoration-copper underline-offset-4"
            >
              View all service areas
            </Link>
          </div>
        </Container>
      </section>

      {/* 11. CTA */}
      <section
        className="relative isolate overflow-hidden bg-navy"
        aria-labelledby="area-cta-heading"
      >
        <Image
          src={ctaImage.src}
          alt={ctaImage.alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-navy/35"
        />
        <Container className="relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              {area.label}
            </p>
            <h2
              id="area-cta-heading"
              className="mt-3 font-display text-4xl leading-[1.08] text-white sm:text-5xl"
            >
              {area.cta.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {area.cta.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" variant="light" withArrow>
                Contact Us
              </ButtonLink>
              <ButtonLink href="/contact#request-service" variant="ghost">
                Get a Free Quote
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
