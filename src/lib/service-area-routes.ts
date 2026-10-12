import { getServiceArea } from "@/data/service-areas";
import { isServiceOfferedInArea } from "@/data/service-area-pages/coverage";
import { getService } from "@/data/services";

/** Central route builders for the Service Area system. */
export const serviceAreaRoutes = {
  index: () => "/service-areas",
  city: (areaSlug: string) => `/service-areas/${areaSlug}`,
  cityService: (areaSlug: string, serviceSlug: string) =>
    `/service-areas/${areaSlug}/${serviceSlug}`,
  serviceHub: (serviceSlug: string) => `/service-areas/for/${serviceSlug}`,
  finderWithService: (serviceSlug: string) =>
    `/service-areas?service=${serviceSlug}#find-by-service`,
} as const;

export function isValidCitySlug(areaSlug: string) {
  return Boolean(getServiceArea(areaSlug));
}

export function isValidServiceSlug(serviceSlug: string) {
  return Boolean(getService(serviceSlug));
}

export function isValidCityServiceCombo(areaSlug: string, serviceSlug: string) {
  return (
    isValidCitySlug(areaSlug) &&
    isValidServiceSlug(serviceSlug) &&
    isServiceOfferedInArea(areaSlug, serviceSlug)
  );
}
