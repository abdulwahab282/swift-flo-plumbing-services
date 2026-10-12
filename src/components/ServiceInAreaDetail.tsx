import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { ServiceAreaCards } from "@/components/ServiceAreaCards";
import { ServiceList } from "@/components/ServiceCard";
import { images } from "@/data/images";
import type { ServiceArea } from "@/data/service-areas";
import {
  resolveServiceAreaPage,
  type ResolvedServiceAreaPage,
} from "@/data/service-area-pages";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

export function ServiceInAreaDetail({
  area,
  service,
  resolved,
}: {
  area: ServiceArea;
  service: Service;
  resolved?: ResolvedServiceAreaPage;
}) {
  const page = resolved ?? resolveServiceAreaPage(area, service);
  const content = page.content;
  const heroImage = page.images.hero ?? images[area.heroImage];
  const aboutImage = page.images.about ?? images[area.about.image];
  const overviewImage = page.images.overview ?? images[service.image];
  const ctaImage = page.images.cta ?? images[area.cta.image];
  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <>
      <PageHero
        eyebrow={`${area.city}, ${area.state} · ${service.name}`}
        title={content.heroTitle}
        description={content.heroDescription}
        image={heroImage}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: serviceAreaRoutes.index(), label: "Service Areas" },
          { href: serviceAreaRoutes.city(area.slug), label: area.city },
          { label: service.name },
        ]}
        actions={
          <>
            <ButtonLink href="/contact#request-service" variant="light" withArrow>
              Request This Service
            </ButtonLink>
            <CallNowLink variant="ghost" />
          </>
        }
      />

      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Highlights
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {service.name} coverage you can count on in {area.city}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name="pin" />
                </span>
                <h3 className="mt-4 font-display text-2xl text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.aboutTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {content.aboutDescription}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {content.aboutSecondary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#request-service" withArrow>
                Get a Free Quote
              </ButtonLink>
              <ButtonLink
                href={serviceAreaRoutes.serviceHub(service.slug)}
                variant="secondary"
              >
                All cities for this service
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Our services
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.servicesTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.servicesDescription}
            </p>
          </div>
          <div className="mt-12">
            <ServiceList services={relatedServices} />
          </div>
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={ctaImage.src}
          alt={ctaImage.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/88 to-navy/55" />
        <Container className="relative py-20 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              {area.label}
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              {content.ctaTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              {content.ctaDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#request-service" variant="light" withArrow>
                Request Service
              </ButtonLink>
              <CallNowLink variant="ghost" />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Services overview
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.overviewTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {content.overviewDescription}
            </p>
            <ul className="mt-8 space-y-3">
              {content.overviewPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-sand bg-white px-4 py-3 text-ink"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4]">
            <Image
              src={overviewImage.src}
              alt={overviewImage.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Service details
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.detailsTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.detailsDescription}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.detailPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm"
              >
                <h3 className="font-display text-2xl text-navy">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{point.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Why choose us
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.whyTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.whyDescription}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.whyReasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[1.75rem] border border-sand bg-white p-6 shadow-sm"
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

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Local answers about {service.name.toLowerCase()} in {area.city},{" "}
              {site.state}.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            {content.faqs.map((faq, index) => (
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

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Local coverage
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Serving {area.label}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {site.name} arranges {service.name.toLowerCase()} for customers in{" "}
              {area.city}. Use the map for city-level reference.
            </p>
            <ButtonLink href="/contact#request-service" className="mt-8" withArrow>
              Get a Free Quote
            </ButtonLink>
          </div>
          <MapEmbed area={area} />
        </Container>
      </section>

      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Also serving
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              More communities for {service.name.toLowerCase()}
            </h2>
          </div>
          <div className="mt-10">
            <ServiceAreaCards excludeSlug={area.slug} />
          </div>
          <div className="mt-8 flex justify-center gap-6">
            <Link
              href={serviceAreaRoutes.serviceHub(service.slug)}
              className="font-semibold text-tide-deep underline decoration-copper underline-offset-4"
            >
              View all cities for this service
            </Link>
            <Link
              href={serviceAreaRoutes.index()}
              className="font-semibold text-tide-deep underline decoration-copper underline-offset-4"
            >
              All service areas
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
