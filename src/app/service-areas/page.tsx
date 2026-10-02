import { Container } from "@/components/Container";
import { CtaSection } from "@/components/CtaSection";
import { PageHero } from "@/components/PageHero";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Service Areas in Middle Tennessee",
  description:
    "Swift Flo Plumbing Services provides professional plumbing across 12 Middle Tennessee communities: Nashville, Brentwood, Franklin, Murfreesboro, and surrounding areas.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Plumbing Services Across Middle Tennessee"
        description={`${site.name} provides dedicated, professional plumbing services across 12 Middle Tennessee communities. Select your city below to learn more or request service.`}
        image={images.serviceOverview}
        breadcrumb={[{ href: "/", label: "Home" }, { label: "Service Areas" }]}
      />
      <ServiceAreaSection />
      <CtaSection
        title="Need Plumbing Service in Middle Tennessee?"
        description="Whether you reside in Nashville, Williamson County, Rutherford County, Wilson County, or Sumner County, Swift Flo is ready to assist. Contact us today for a free quote."
        primaryLabel="Request a Free Quote"
      />
    </>
  );
}
