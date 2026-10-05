import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { HowItWorks } from "@/components/HowItWorks";
import { PageHero } from "@/components/PageHero";
import { ServiceList } from "@/components/ServiceCard";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Plumbing Services",
  description: `Professional plumbing services from ${site.name} throughout ${site.locationFull}. Request a visit ${site.hours.days}, ${site.hours.time}.`,
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Professional plumbing services across Middle Tennessee."
        description={`${site.name} offers drain cleaning, camera inspections, water filtration, water heater service, bathroom remodeling plumbing, and water and sewer excavation repairs throughout ${site.locationFull}.`}
        image={images.faucet}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Services" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <ServiceList services={services} />
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            Looking for the service area? Swift Flo serves{" "}
            <Link
              href="/service-areas"
              className="font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
            >
              {site.locationLabel}
            </Link>
            .
          </p>
        </Container>
      </section>
      <HowItWorks tone="light" />
      <CtaSection primaryLabel="Request Plumbing Service" />
    </>
  );
}
