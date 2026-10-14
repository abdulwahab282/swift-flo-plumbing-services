import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHero } from "@/components/PageHero";
import { images } from "@/data/images";
import type { ServiceArea } from "@/data/service-areas";
import {
  listPagesForService,
  resolveServiceAreaPage,
  type ResolvedServiceAreaPage,
} from "@/data/service-area-pages";
import type { Service } from "@/data/services";
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
  const hireImage = page.images.hire ?? images[service.image];
  const localImage = page.images.local ?? images[service.image];
  const topRatedImage = page.images.topRated ?? images[service.image];
  const certifiedImage = page.images.certified ?? images[service.image];
  const whyImage = page.images.why ?? images[service.image];
  const showHireSection = Boolean(
    content.hireTitle && content.hireDescription,
  );
  const showLocalSection = Boolean(
    content.localTitle && content.localDescription,
  );
  const showTopRatedSection = Boolean(
    content.topRatedTitle && content.topRatedDescription,
  );
  const showCertifiedSection = Boolean(
    content.certifiedTitle && content.certifiedDescription,
  );
  const relatedAreaPages = listPagesForService(service.slug).filter(
    (page) => page.areaSlug !== area.slug,
  );

  return (
    <>
      <PageHero
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
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
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

      {content.callNowTitle && content.callNowDescription ? (
        <section className="relative overflow-hidden bg-navy text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-tide/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-copper/20 blur-3xl"
          />
          <Container className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {content.callNowTitle}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                {content.callNowDescription}
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <CallNowLink variant="light" />
                <ButtonLink
                  href="/contact#request-service"
                  variant="ghost"
                  withArrow
                >
                  Request Service
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="relative min-w-0 lg:min-h-[36rem]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src={aboutImage.src}
                alt={aboutImage.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
          <div className="flex min-w-0 flex-col justify-center">
            <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl lg:text-[2.75rem]">
              {content.aboutTitle}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              <p>{content.aboutDescription}</p>
              <p>{content.aboutSecondary}</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#request-service" withArrow>
                Get a Free Quote
              </ButtonLink>
              <CallNowLink />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
              {content.servicesTitle}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.servicesDescription}
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={showHireSection ? "#hire-now" : "/contact#request-service"}
                withArrow
              >
                Request Service
              </ButtonLink>
              <CallNowLink />
            </div>
          </div>
        </Container>
      </section>

      {showHireSection ? (
        <section id="hire-now" className="scroll-mt-28 bg-cream py-20 sm:py-28">
          <Container className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex min-w-0 flex-col justify-center">
              <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl">
                {content.hireTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>{content.hireDescription}</p>
                {content.hireSecondary ? <p>{content.hireSecondary}</p> : null}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#request-service" withArrow>
                  Request Service
                </ButtonLink>
                <CallNowLink />
              </div>
            </div>
            <div className="relative min-w-0 lg:min-h-[36rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={hireImage.src}
                  alt={hireImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {showLocalSection ? (
        <section className="bg-paper py-20 sm:py-28">
          <Container className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative min-w-0 lg:min-h-[36rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={localImage.src}
                  alt={localImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl">
                {content.localTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>{content.localDescription}</p>
                {content.localSecondary ? <p>{content.localSecondary}</p> : null}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallNowLink variant="primary" />
                <ButtonLink href="/contact#request-service" variant="secondary">
                  Request Service
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

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
            <h2 className="font-display text-4xl text-white sm:text-5xl">
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

      {showTopRatedSection ? (
        <section className="bg-foam py-20 sm:py-28">
          <Container className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex min-w-0 flex-col justify-center">
              <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl">
                {content.topRatedTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>{content.topRatedDescription}</p>
                {content.topRatedSecondary ? (
                  <p>{content.topRatedSecondary}</p>
                ) : null}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact#request-service" withArrow>
                  Request Service
                </ButtonLink>
                <CallNowLink />
              </div>
            </div>
            <div className="relative min-w-0 lg:min-h-[36rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={topRatedImage.src}
                  alt={topRatedImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      {showCertifiedSection ? (
        <section className="bg-paper py-20 sm:py-28">
          <Container className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="relative min-w-0 lg:min-h-[36rem]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/10 sm:aspect-[5/4] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src={certifiedImage.src}
                  alt={certifiedImage.alt}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-center">
              <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl">
                {content.certifiedTitle}
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                <p>{content.certifiedDescription}</p>
                {content.certifiedSecondary ? (
                  <p>{content.certifiedSecondary}</p>
                ) : null}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallNowLink variant="primary" />
                <ButtonLink href="/contact#request-service" variant="secondary">
                  Request Service
                </ButtonLink>
              </div>
            </div>
          </Container>
        </section>
      ) : null}

      <section className="bg-cream py-20 sm:py-28">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
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
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
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

      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={whyImage.src}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/92 to-navy/75" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/4 h-72 w-72 rounded-full bg-tide/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-copper/15 blur-3xl"
        />
        <Container className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
              {content.whyTitle}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-white/80 sm:text-lg">
              <p>{content.whyDescription}</p>
              {content.whySecondary ? <p>{content.whySecondary}</p> : null}
            </div>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact#request-service" variant="light" withArrow>
                Get a Free Quote
              </ButtonLink>
              <CallNowLink variant="ghost" />
            </div>
          </div>
          {content.whyReasons.length > 0 ? (
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {content.whyReasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-[1.75rem] border border-white/15 bg-white/10 p-6 shadow-sm backdrop-blur-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-copper">
                    <Icon name={reason.icon} />
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-white/75">{reason.text}</p>
                </article>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-paper py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16">
          <div>
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Common questions about {service.name.toLowerCase()} in {area.city},{" "}
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
            <h2 className="max-w-xl font-display text-3xl leading-[1.12] text-navy sm:text-4xl lg:text-[2.75rem]">
              {content.coverageTitle ?? `Serving ${area.label}`}
            </h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {content.coverageDescription ? (
                <p>{content.coverageDescription}</p>
              ) : (
                <p>
                  {site.name} arranges {service.name.toLowerCase()} for customers
                  in {area.city}. Use the map for city-level reference.
                </p>
              )}
              {content.coverageSecondary ? (
                <p>{content.coverageSecondary}</p>
              ) : null}
            </div>
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
            <h2 className="font-display text-4xl text-navy sm:text-5xl">
              More communities for {service.name.toLowerCase()}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Only {service.name.toLowerCase()} pages are listed here—each link
              opens that city’s dedicated page for this service.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {relatedAreaPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="group flex h-full min-h-[5.5rem] items-center gap-4 rounded-[1.75rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
                    <Icon name="pin" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl leading-tight text-navy sm:text-2xl">
                      {page.areaCity}
                    </span>
                    <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-tide-deep">
                      {service.name}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
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
