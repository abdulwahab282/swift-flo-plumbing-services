import type { ServiceHubPageContent } from "@/data/service-area-pages/types";
import drainCleaning from "@/data/services/drain-cleaning/hub";
import cameraInspections from "@/data/services/camera-inspections/hub";
import waterFiltrationSystemInstallation from "@/data/services/water-filtration-system-installation/hub";
import waterHeaterRepairsReplacement from "@/data/services/water-heater-repairs-replacement/hub";
import bathroomRemodeling from "@/data/services/bathroom-remodeling/hub";
import waterSewerExcavationRepairsReplacements from "@/data/services/water-sewer-excavation-repairs-replacements/hub";

export const serviceHubContentBySlug: Record<string, ServiceHubPageContent> = {
  "drain-cleaning": drainCleaning,
  "camera-inspections": cameraInspections,
  "water-filtration-system-installation": waterFiltrationSystemInstallation,
  "water-heater-repairs-replacement": waterHeaterRepairsReplacement,
  "bathroom-remodeling": bathroomRemodeling,
  "water-sewer-excavation-repairs-replacements": waterSewerExcavationRepairsReplacements,
};

export function getServiceHubContent(serviceSlug: string): ServiceHubPageContent | undefined {
  return serviceHubContentBySlug[serviceSlug];
}

export function hasServiceHubContent(serviceSlug: string) {
  return Boolean(serviceHubContentBySlug[serviceSlug]);
}
