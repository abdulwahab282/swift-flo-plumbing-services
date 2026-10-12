import Image from "next/image";
import Link from "next/link";
import { ButtonLink, CallNowLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { ServiceAreaCards } from "@/components/ServiceAreaCards";
import { ServiceList } from "@/components/ServiceCard";
import {
  listPagesForService,
  resolveServiceHubPage,
  type ServiceHubPageContent,
} from "@/data/service-area-pages";
import { images } from "@/data/images";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

export function ServiceAreaByServiceDetail({
  service,
  pageContent,
}: {
  service: Service;
  pageContent?: ServiceHubPageContent;
}) {
  const content = pageContent ?? resolveServiceHubPage(service.slug);
  const heroImage = images[service.image];
  const aboutImage =
    service.image === "work" ? images.galleryCopper : images.work;
  const overviewImage =
    service.image === "bathroom" ? images.fittings : images.bathroom;
  const related = services.filter((item) => item.slug !== service.slug);
  const cityPages = listPagesForService(service.slug);

  return (
    <>
      <PageHero
        eyebrow={`Service areas · ${service.name}`}
        title={content.hero.title}
        description={content.hero.description}
        image={heroImage}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: serviceAreaRoutes.index(), label: "Service Areas" },
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
              Why customers request {service.name.toLowerCase()}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.75rem] border border-sand bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                  <Icon name={item.icon} />
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
              {content.about.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {content.about.description}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
              {content.about.secondary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact#request-service" withArrow>
                Get a Free Quote
              </ButtonLink>
              <ButtonLink href={`/services/${service.slug}`} variant="secondary">
                Service details
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-foam py-20 sm:py-28" id="areas">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Our services
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              {content.servicesSection.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.servicesSection.description}
            </p>
          </div>
          <div className="mt-12">
            {cityPages.length === 0 ? (
              <p className="rounded-[1.5rem] border border-dashed border-sand bg-white px-6 py-8 text-center text-muted">
                No service areas are configured for {service.name} yet. Add
                coverage in the service-area coverage map to list cities here.
              </p>
            ) : (
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cityPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="group flex h-full min-h-[6rem] flex-col justify-center rounded-[1.5rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg"
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-foam text-tide-deep transition group-hover:bg-tide-deep group-hover:text-white">
                          <Icon name="pin" className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-display text-xl text-navy">
                            {page.areaCity}
                          </span>
                          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.14em] text-tide-deep">
                            {page.serviceName}
                          </span>
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {related.length > 0 ? (
            <div className="mt-14">
              <h3 className="text-center font-display text-3xl text-navy">
                Related plumbing services
              </h3>
              <div className="mt-8">
                <ServiceList services={related.slice(0, 3)} />
              </div>
            </div>
          ) : null}
        </Container>
      </section>

      <section className="relative isolate overflow-hidden bg-navy">
        <Image
          src={images.ctaTrust.src}
          alt={images.ctaTrust.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/90 to-navy/70" />
        <Container className="relative py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-copper">
              {site.locationLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl text-white sm:text-5xl">
              {content.cta.title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              {content.cta.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink
                href="/contact#request-service"
                variant="light"
                withArrow
              >
                Request Plumbing Service
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
              {content.overview.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {content.overview.description}
            </p>
            <ul className="mt-8 space-y-3">
              {content.overview.points.map((point) => (
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
              {content.details.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.details.description}
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.details.points.map((point) => (
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
              {content.whyChoose.title}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              {content.whyChoose.description}
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {content.whyChoose.reasons.map((reason) => (
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
              Answers about {service.name.toLowerCase()} across{" "}
              {site.locationFull}.
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

      <section className="bg-foam py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
              Also serving
            </p>
            <h2 className="mt-3 font-display text-4xl text-navy sm:text-5xl">
              Explore every community
            </h2>
          </div>
          <div className="mt-10">
            <ServiceAreaCards />
          </div>
        </Container>
      </section>
    </>
  );
}
