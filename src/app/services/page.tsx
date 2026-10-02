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
  description:
    "Plumbing services from Swift Flo Plumbing Services in Smyrna, Tennessee. Request a visit Monday through Sunday, 8:00 AM to 8:00 PM.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Plumbing services in Smyrna, Tennessee."
        description={`${site.name} offers ${site.service.toLowerCase()} for customers in ${site.locationFull}. Describe the work you need and request a visit during business hours.`}
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
