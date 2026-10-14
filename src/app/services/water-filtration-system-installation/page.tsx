import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero, PageSection } from "@/components/PageHero";
import { images } from "@/data/images";
import {
  getServiceAreaPages,
  serviceHubHref,
} from "@/data/services/water-filtration-system-installation/areas";
import catalog from "@/data/services/water-filtration-system-installation/catalog";
import pageContent from "@/data/services/water-filtration-system-installation/page";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
  path: `/services/${catalog.slug}`,
  keywords: pageContent.keywords,
});

export default function WaterFiltrationSystemInstallationServicePage() {
  const heroImage = images[pageContent.hero.image];
  const secondaryImage = images[pageContent.sidebar.secondaryImage];
  const areaPages = getServiceAreaPages();

  return (
    <>
      <PageHero
        eyebrow={pageContent.hero.eyebrow}
        title={pageContent.hero.title}
        description={pageContent.hero.description}
        image={heroImage}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: catalog.name },
        ]}
      />
      <PageSection>
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-navy">
              {pageContent.expect.title}
            </h2>
            <ul className="mt-6 space-y-3">
              {pageContent.expect.details.map((detail) => (
                <li
                  key={detail}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 leading-relaxed text-ink"
                >
                  {detail}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#request-service" withArrow>
                Request Service
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary">
                All services
              </ButtonLink>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="rounded-[1.75rem] bg-navy p-6 text-white sm:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                {pageContent.sidebar.areaLabel}
              </p>
              <p className="mt-3 font-display text-3xl">
                {pageContent.sidebar.areaValue}
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-sand bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
                {pageContent.sidebar.daysLabel}
              </p>
              <p className="mt-3 font-display text-2xl text-navy">
                {site.hours.days}
              </p>
            </article>
            <article className="rounded-[1.75rem] border border-sand bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
                {pageContent.sidebar.hoursLabel}
              </p>
              <p className="mt-3 font-display text-2xl text-navy">
                {site.hours.time}
              </p>
            </article>
            <div className="relative min-h-56 overflow-hidden rounded-[1.75rem] sm:col-span-2">
              <Image
                src={secondaryImage.src}
                alt={secondaryImage.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </PageSection>
      <PageSection className="bg-foam/40">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-4xl text-navy">
                {pageContent.areas.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">
                {pageContent.areas.description}
              </p>
            </div>
            <ButtonLink href={serviceHubHref} variant="secondary">
              View all water filtration areas
            </ButtonLink>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {areaPages.map((area) => (
              <li key={area.href}>
                <ButtonLink
                  href={area.href}
                  variant="secondary"
                  className="w-full justify-between"
                  withArrow
                >
                  {area.areaLabel}
                </ButtonLink>
              </li>
            ))}
          </ul>
        </Container>
      </PageSection>
      <CtaSection
        title={pageContent.cta.title}
        description={pageContent.cta.description}
      />
    </>
  );
}
