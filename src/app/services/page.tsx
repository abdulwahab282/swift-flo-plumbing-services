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
  title: "Professional Plumbing Services",
  description:
    "Comprehensive plumbing services from Swift Flo Plumbing Services across Nashville and 12 Middle Tennessee communities. Request service Monday through Sunday, 8:00 AM to 8:00 PM.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional Plumbing Services Across Middle Tennessee"
        description={`${site.name} provides dependable, code-compliant plumbing solutions for homeowners and commercial spaces across ${site.locationFull}. Tell us about your project or repair and request a visit.`}
        image={images.serviceOverview}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Services" }]}
      />
      <section className="py-20 sm:py-28">
        <Container>
          <div className="mb-10 max-w-2xl">
            <h2 className="font-display text-3xl text-navy">All Plumbing Services</h2>
            <p className="mt-2 text-sm text-muted">
              Explore our range of professional plumbing services designed to meet the needs of Middle Tennessee properties.
            </p>
          </div>
          <ServiceList services={services} />
          <div className="mt-12 rounded-2xl border border-sand bg-foam p-6 sm:p-8">
            <h3 className="font-display text-xl text-navy">Service Area Coverage</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Looking for local coverage in your city? Swift Flo serves{" "}
              <Link
                href="/service-areas"
                className="font-semibold text-tide-deep underline decoration-copper underline-offset-4 hover:text-copper"
              >
                12 Middle Tennessee communities
              </Link>
              , including Nashville, Brentwood, Franklin, Murfreesboro, Hendersonville, and surrounding areas.
            </p>
          </div>
        </Container>
      </section>
      <HowItWorks tone="light" />
      <CtaSection
        title="Ready to Request Plumbing Service?"
        description="Our experienced plumbers are available Monday through Sunday, 8:00 AM to 8:00 PM. Get your free quote today."
        primaryLabel="Get a Free Quote"
      />
    </>
  );
}
