import Link from "next/link";
import type { ServiceArea } from "@/data/service-areas";
import { serviceAreas } from "@/data/service-areas";
import { site } from "@/data/site";
import { images } from "@/data/images";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { Icon } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero, PageSection } from "@/components/PageHero";

export function ServiceAreaDetail({
  area,
  breadcrumb,
}: {
  area: ServiceArea;
  breadcrumb?: { href?: string; label: string }[];
}) {
  const otherAreas = serviceAreas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service Area · ${area.county}`}
        title={`Plumbing Services in ${area.city}, ${area.stateName}.`}
        description={area.introduction}
        image={images.serviceOverview}
        breadcrumb={
          breadcrumb ?? [
            { href: "/", label: "Home" },
            { href: "/service-areas", label: "Service Areas" },
            { label: area.label },
          ]
        }
      />

      <PageSection>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Local Commitment
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Why Customers in {area.city} Trust Swift Flo
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              We provide dependable, licensed plumbing services tailored to the
              needs of homeowners and businesses throughout {area.city} and {area.county}.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {area.whyLocal.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/50 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name="shieldCheck" className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy">
                  {reason.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{reason.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </PageSection>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foam px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
              <Icon name="pin" className="h-3.5 w-3.5 text-copper" />
              {area.label}
            </span>
            <h2 className="mt-4 font-display text-4xl text-navy sm:text-5xl">
              Professional Plumbing in {area.city}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {area.summary}
            </p>

            <ul className="mt-6 space-y-3">
              {area.serviceNotes.map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-3 rounded-2xl border border-sand bg-white p-4 text-ink shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-tide/15 text-tide-deep">
                    <Icon name="check" className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-medium">{note}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" withArrow>
                Get a Free Quote for {area.city}
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                View All Plumbing Services
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2rem] border border-sand bg-white p-4 shadow-sm">
            <MapEmbed area={area} />
          </div>
        </Container>
      </section>

      {/* Other Areas Grid */}
      <section className="bg-cream py-16 sm:py-24 border-t border-sand/60">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-display text-3xl text-navy">
              Other Middle Tennessee Communities We Serve
            </h3>
            <p className="mt-2 text-sm text-muted">
              Swift Flo provides professional plumbing services throughout 12 Middle Tennessee hubs.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {otherAreas.map((other) => (
              <Link
                key={other.slug}
                href={`/service-areas/${other.slug}`}
                className="group flex flex-col items-center justify-center rounded-2xl border border-sand bg-white p-4 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:border-tide/50 hover:shadow-md"
              >
                <Icon name="pin" className="h-5 w-5 text-copper transition group-hover:text-tide-deep" />
                <span className="mt-2 font-display text-base font-semibold text-navy group-hover:text-tide-deep">
                  {other.city}
                </span>
                <span className="text-[10px] text-muted">
                  {other.county.replace(" County", "")}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title={`Need plumbing service in ${area.label}?`}
        description={`${site.name} provides ${site.service.toLowerCase()} for customers in ${area.city}, ${area.stateName}. Open Monday through Sunday from 8:00 AM to 8:00 PM.`}
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
