"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { Icon } from "@/components/Icons";
import { SectionHeading } from "@/components/SectionHeading";
import { listPagesForService } from "@/data/service-area-pages";
import { images } from "@/data/images";
import { serviceAreas } from "@/data/service-areas";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";
import { serviceAreaRoutes } from "@/lib/service-area-routes";
import { cn } from "@/lib/cn";

export function ServiceAreaFinder({
  initialServiceSlug,
}: {
  initialServiceSlug?: string;
}) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const initial =
    services.find((service) => service.slug === initialServiceSlug) ?? null;
  const [selected, setSelected] = useState<Service | null>(initial);

  const pages = useMemo(
    () => (selected ? listPagesForService(selected.slug) : []),
    [selected],
  );

  function selectService(service: Service) {
    const next = selected?.slug === service.slug ? null : service;
    setSelected(next);

    startTransition(() => {
      const url = next
        ? serviceAreaRoutes.finderWithService(next.slug)
        : `${serviceAreaRoutes.index()}#find-by-service`;
      router.replace(url, { scroll: false });
    });
  }

  return (
    <section id="find-by-service" className="scroll-mt-24 bg-paper py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="1 · Select a service"
          title="Choose a plumbing service."
          text="Pick a service to see only the cities where it is offered. Open any city card to review that page individually."
          align="center"
        />

        <label className="mx-auto mt-8 flex max-w-xl flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
            Service
          </span>
          <select
            className="min-h-12 rounded-full border border-sand bg-white px-5 text-sm font-semibold text-navy outline-none transition focus:border-tide"
            value={selected?.slug ?? ""}
            onChange={(event) => {
              const service = services.find(
                (item) => item.slug === event.target.value,
              );
              if (!service) {
                setSelected(null);
                startTransition(() => {
                  router.replace(`${serviceAreaRoutes.index()}#find-by-service`, {
                    scroll: false,
                  });
                });
                return;
              }
              selectService(service);
            }}
          >
            <option value="">Select a plumbing service…</option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.name}
              </option>
            ))}
          </select>
        </label>

        <div
          role="listbox"
          aria-label="Plumbing services"
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const active = selected?.slug === service.slug;
            const image = images[service.image];
            const pageCount = listPagesForService(service.slug).length;

            return (
              <button
                key={service.slug}
                type="button"
                role="option"
                aria-selected={active}
                onClick={() => selectService(service)}
                className={cn(
                  "group relative overflow-hidden rounded-[1.5rem] border text-left transition duration-300",
                  active
                    ? "border-tide-deep bg-foam shadow-lg shadow-navy/10 ring-2 ring-tide-deep/30"
                    : "border-sand bg-white hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg",
                )}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={image.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy/55 via-navy/10 to-transparent"
                  />
                  <span
                    className={cn(
                      "absolute left-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl shadow-sm",
                      active
                        ? "bg-tide-deep text-white"
                        : "bg-white/95 text-tide-deep",
                    )}
                  >
                    <Icon name={service.icon} className="h-5 w-5" />
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-navy">
                    {pageCount} cities
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <p className="font-display text-xl text-navy sm:text-2xl">
                    {service.name}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {service.summary}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div
          id="service-area-pages"
          className="mt-12 scroll-mt-28 rounded-[2rem] border border-sand bg-cream p-6 sm:p-8 lg:p-10"
        >
          {selected ? (
            <>
              <div className="flex flex-col gap-4 border-b border-sand pb-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
                    2 · Cities offering {selected.name}
                  </p>
                  <h3 className="mt-2 font-display text-3xl text-navy sm:text-4xl">
                    {pages.length} service area page{pages.length === 1 ? "" : "s"}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted">
                    Only cities configured for {selected.name} are listed. Open a
                    page to review content and design before publishing.
                  </p>
                </div>
                <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                  <ButtonLink href={serviceAreaRoutes.serviceHub(selected.slug)}>
                    Service hub
                  </ButtonLink>
                  <ButtonLink
                    href={`/services/${selected.slug}`}
                    variant="secondary"
                  >
                    Service details
                  </ButtonLink>
                </div>
              </div>

              {pages.length === 0 ? (
                <p className="mt-8 rounded-[1.5rem] border border-dashed border-sand bg-white px-6 py-8 text-center text-muted">
                  No cities are configured for {selected.name}. Update coverage in{" "}
                  <code className="text-sm">service-area-pages/coverage.ts</code>.
                </p>
              ) : (
                <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {pages.map((page) => (
                    <li key={page.href}>
                      <article className="flex h-full flex-col rounded-[1.5rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg">
                        <div className="flex items-start gap-3">
                          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep">
                            <Icon name="pin" className="h-5 w-5" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-display text-xl leading-tight text-navy">
                              {page.areaCity}
                            </h4>
                            <p className="mt-1 text-sm leading-relaxed text-muted">
                              {page.serviceName} for homes and businesses in{" "}
                              {page.areaLabel}.
                            </p>
                            {page.hasDedicatedContent ? (
                              <span className="mt-2 inline-flex rounded-full bg-foam px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-tide-deep">
                                Dedicated page
                              </span>
                            ) : null}
                          </div>
                        </div>
                        <p className="mt-4 break-all font-mono text-[11px] text-muted">
                          {page.href}
                        </p>
                        <Link
                          href={page.href}
                          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-tide-deep px-4 text-sm font-semibold text-white transition hover:bg-tide"
                        >
                          Open {page.areaCity} page
                        </Link>
                      </article>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-tide-deep">
                  Or browse by city
                </p>
                <h3 className="mt-2 font-display text-3xl text-navy sm:text-4xl">
                  Communities in {site.region}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted">
                  Select a service above for filtered city pages, or open a city
                  overview below.
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={serviceAreaRoutes.city(area.slug)}
                      className="group flex h-full min-h-[5.5rem] items-center gap-4 rounded-[1.5rem] border border-sand bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-tide/40 hover:shadow-lg"
                    >
                      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-foam text-tide-deep transition duration-300 group-hover:bg-tide-deep group-hover:text-white">
                        <Icon name="pin" className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-display text-xl leading-tight text-navy sm:text-2xl">
                          {area.city}
                        </span>
                        <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-tide-deep">
                          {area.stateName}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
