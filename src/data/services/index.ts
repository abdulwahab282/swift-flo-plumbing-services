import bathroomRemodeling from "@/data/services/bathroom-remodeling/catalog";
import cameraInspections from "@/data/services/camera-inspections/catalog";
import drainCleaning from "@/data/services/drain-cleaning/catalog";
import waterFiltration from "@/data/services/water-filtration-system-installation/catalog";
import waterHeater from "@/data/services/water-heater-repairs-replacement/catalog";
import waterSewerExcavation from "@/data/services/water-sewer-excavation-repairs-replacements/catalog";
import type { Service } from "@/data/services/types";

export type {
  Service,
  ServiceIcon,
  ServiceImageKey,
  ServicePageContent,
} from "@/data/services/types";

/**
 * Confirmed plumbing services offered by Swift Flo.
 * Each service’s editable content lives in src/data/services/{slug}/.
 */
export const services: Service[] = [
  drainCleaning,
  cameraInspections,
  waterFiltration,
  waterHeater,
  bathroomRemodeling,
  waterSewerExcavation,
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function requireService(slug: string): Service {
  const service = getService(slug);
  if (!service) {
    throw new Error(`Missing service data for ${slug}`);
  }
  return service;
}
