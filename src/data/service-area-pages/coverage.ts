import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";

/**
 * Explicit coverage matrix: which services are offered in which cities.
 *
 * Each service lists the city slugs where it is available. The finder and
 * dedicated route pages only expose combinations listed here.
 *
 * Source of truth for generation scripts: scripts/service-area-config.mjs
 * To limit a service later, edit that config (or this file) and regenerate.
 */
export const serviceCoverageByServiceSlug: Record<string, readonly string[]> = {
  "drain-cleaning": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
  "camera-inspections": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
  "water-filtration-system-installation": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
  "water-heater-repairs-replacement": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
  "bathroom-remodeling": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
  "water-sewer-excavation-repairs-replacements": [
    "brentwood-tn",
    "franklin-tn",
    "gallatin-tn",
    "hendersonville-tn",
    "la-vergne-tn",
    "lebanon-tn",
    "mt-juliet-tn",
    "murfreesboro-tn",
    "nashville-tn",
    "smyrna-tn",
    "spring-hill-tn",
    "thompsons-station-tn",
  ],
};

// Guard: every catalog service must have an explicit coverage entry.
for (const service of services) {
  if (!(service.slug in serviceCoverageByServiceSlug)) {
    throw new Error(
      `Missing coverage entry for service "${service.slug}" in coverage.ts`,
    );
  }
}

// Guard: every listed city slug must exist in serviceAreas.
const knownAreaSlugs = new Set(serviceAreas.map((area) => area.slug));
for (const [serviceSlug, areaSlugs] of Object.entries(serviceCoverageByServiceSlug)) {
  for (const areaSlug of areaSlugs) {
    if (!knownAreaSlugs.has(areaSlug)) {
      throw new Error(
        `Unknown area slug "${areaSlug}" listed under service "${serviceSlug}"`,
      );
    }
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
