import type { ServiceHubPageContent } from "@/data/service-area-pages/types";
import drainCleaning from "./drain-cleaning";
import cameraInspections from "./camera-inspections";
import waterFiltrationSystemInstallation from "./water-filtration-system-installation";
import waterHeaterRepairsReplacement from "./water-heater-repairs-replacement";
import bathroomRemodeling from "./bathroom-remodeling";
import waterSewerExcavationRepairsReplacements from "./water-sewer-excavation-repairs-replacements";

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
