import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServiceAreaDetail } from "@/components/ServiceAreaDetail";
import { resolveCityPage } from "@/data/service-area-pages";
import { requireServiceArea, serviceAreas } from "@/data/service-areas";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const AREA_SLUG = "lebanon-tn" as const;

const area = requireServiceArea(AREA_SLUG);
const pageContent = resolveCityPage(AREA_SLUG);
const onlyArea = serviceAreas.length === 1;
const path = onlyArea
  ? serviceAreaRoutes.index()
  : serviceAreaRoutes.city(area.slug);

export const metadata = createMetadata({
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
  path,
  keywords: [
    `plumber ${area.city}`,
    `plumbing services ${area.city} TN`,
    `${area.city} drain cleaning`,
    `${area.city} water heater repair`,
    `local plumber ${area.city}`,
    "Swift Flo Plumbing Services",
  ],
});

export default function LebanonTnServiceAreaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          { name: area.label, path: serviceAreaRoutes.city(area.slug) },
        ]}
      />
      <ServiceAreaDetail area={area} pageContent={pageContent} />
    </>
  );
}
