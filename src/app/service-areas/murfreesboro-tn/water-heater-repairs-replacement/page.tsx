import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { ServiceInAreaDetail } from "@/components/ServiceInAreaDetail";
import { resolveServiceAreaPage } from "@/data/service-area-pages";
import { requireServiceArea } from "@/data/service-areas";
import { requireService } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const AREA_SLUG = "murfreesboro-tn" as const;
const SERVICE_SLUG = "water-heater-repairs-replacement" as const;

const area = requireServiceArea(AREA_SLUG);
const service = requireService(SERVICE_SLUG);
const path = serviceAreaRoutes.cityService(area.slug, service.slug);
const resolved = resolveServiceAreaPage(area, service);

export const metadata = createMetadata({
  title: resolved.meta.title,
  description: resolved.meta.description,
  path,
  keywords: [
    `${service.name} ${area.city}`,
    `plumber ${area.city} ${service.name.toLowerCase()}`,
    `${area.city} TN plumbing`,
    "Swift Flo Plumbing Services",
  ],
});

export default function MurfreesboroTnWaterHeaterRepairsReplacementPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          { name: area.city, path: serviceAreaRoutes.city(area.slug) },
          { name: service.name, path },
        ]}
      />
      <ServiceJsonLd
        serviceName={service.name}
        description={resolved.content.heroDescription}
        path={path}
        city={area.city}
        stateName={area.stateName}
      />
      <ServiceInAreaDetail area={area} service={service} resolved={resolved} />
    </>
  );
}
