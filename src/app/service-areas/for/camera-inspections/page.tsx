import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServiceAreaByServiceDetail } from "@/components/ServiceAreaByServiceDetail";
import { assertValidServiceHubPageContent } from "@/data/service-area-pages/validate";
import pageContent from "@/data/services/camera-inspections/hub";
import { requireService } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const SERVICE_SLUG = "camera-inspections" as const;

const service = requireService(SERVICE_SLUG);
assertValidServiceHubPageContent(pageContent, SERVICE_SLUG);

export const metadata = createMetadata({
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
  path: serviceAreaRoutes.serviceHub(service.slug),
  keywords: [
    `${service.name} Middle Tennessee`,
    `${service.name} Nashville`,
    `${service.name} Smyrna TN`,
    `plumber ${service.name.toLowerCase()}`,
    "Swift Flo Plumbing Services",
  ],
});

export default function CameraInspectionsServiceAreasHubPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          {
            name: `${service.name} areas`,
            path: serviceAreaRoutes.serviceHub(service.slug),
          },
        ]}
      />
      <ServiceAreaByServiceDetail service={service} pageContent={pageContent} />
    </>
  );
}
