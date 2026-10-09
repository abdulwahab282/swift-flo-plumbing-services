import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/Button";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero, PageSection } from "@/components/PageHero";
import { images } from "@/data/images";
import { getService, services } from "@/data/services";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service" };
  }

  return createMetadata({
    title: `${service.name} in ${site.locationLabel}`,
    description: service.summary,
    path: `/services/${service.slug}`,
    keywords: [
      `${service.name} Nashville`,
      `${service.name} Middle Tennessee`,
      `plumber ${service.name.toLowerCase()}`,
      "Swift Flo Plumbing Services",
      "professional plumber Nashville",
    ],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const image = images[service.image];

  return (
    <>
      <PageHero
        eyebrow={site.locationLabel}
        title={service.name}
        description={service.description}
        image={image}
        breadcrumb={[
          { href: "/", label: "Home" },
          { href: "/services", label: "Services" },
          { label: service.name },
        ]}
      />
      <PageSection>
        <Container className="grid items-start gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl text-navy">What to expect</h2>
            <ul className="mt-6 space-y-3">
              {service.details.map((detail) => (
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
                Service area
              </p>
              <p className="mt-3 font-display text-3xl">{site.locationFull}</p>
            </article>
            <article className="rounded-[1.75rem] border border-sand bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
                Days
              </p>
              <p className="mt-3 font-display text-2xl text-navy">{site.hours.days}</p>
            </article>
            <article className="rounded-[1.75rem] border border-sand bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-tide-deep">
                Hours
              </p>
              <p className="mt-3 font-display text-2xl text-navy">{site.hours.time}</p>
            </article>
            <div className="relative min-h-56 overflow-hidden rounded-[1.75rem] sm:col-span-2">
              <Image
                src={images.fittings.src}
                alt={images.fittings.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </PageSection>
      <CtaSection
        title={`Request ${service.name.toLowerCase()} in ${site.locationLabel}`}
        description={service.summary}
      />
    </>
  );
}
