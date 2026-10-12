import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";

const allAreaSlugs = serviceAreas.map((area) => area.slug);

/**
 * Explicit coverage matrix: which services are offered in which cities.
 *
 * Each service lists the city slugs where it is available. The finder and
 * dedicated route pages only expose combinations listed here.
 *
 * To limit a service later, replace its city list with a subset of area slugs.
 */
export const serviceCoverageByServiceSlug: Record<string, readonly string[]> = {
  "drain-cleaning": [...allAreaSlugs],
  "camera-inspections": [...allAreaSlugs],
  "water-filtration-system-installation": [...allAreaSlugs],
  "water-heater-repairs-replacement": [...allAreaSlugs],
  "bathroom-remodeling": [...allAreaSlugs],
  "water-sewer-excavation-repairs-replacements": [...allAreaSlugs],
};

// Guard: every catalog service must have an explicit coverage entry.
for (const service of services) {
  if (!(service.slug in serviceCoverageByServiceSlug)) {
    throw new Error(
      `Missing coverage entry for service "${service.slug}" in coverage.ts`,
    );
  }
}

export function getAreaSlugsForService(serviceSlug: string): string[] {
  return [...(serviceCoverageByServiceSlug[serviceSlug] ?? [])];
}

export function isServiceOfferedInArea(areaSlug: string, serviceSlug: string) {
  return getAreaSlugsForService(serviceSlug).includes(areaSlug);
}

export function getServiceSlugsForArea(areaSlug: string): string[] {
  return services
    .filter((service) => isServiceOfferedInArea(areaSlug, service.slug))
    .map((service) => service.slug);
}
