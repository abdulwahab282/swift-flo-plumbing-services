import { getAreaSlugsForService } from "@/data/service-area-pages/coverage";
import { hasCityServicePageContent } from "@/data/service-area-pages/services";
import type { ServiceAreaPageRef } from "@/data/service-area-pages/types";
import { getServiceArea, serviceAreas } from "@/data/service-areas";
import { getService, services } from "@/data/services";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

/** City × service pages for one service (coverage-aware). */
export function listPagesForService(serviceSlug: string): ServiceAreaPageRef[] {
  const service = getService(serviceSlug);
  if (!service) return [];

  return getAreaSlugsForService(serviceSlug)
    .map((areaSlug) => {
      const area = getServiceArea(areaSlug);
      if (!area) return null;

      return {
        areaSlug: area.slug,
        areaCity: area.city,
        areaLabel: area.label,
        serviceSlug: service.slug,
        serviceName: service.name,
        href: serviceAreaRoutes.cityService(area.slug, service.slug),
        hasDedicatedContent: hasCityServicePageContent(area.slug, service.slug),
      } satisfies ServiceAreaPageRef;
    })
    .filter((page): page is ServiceAreaPageRef => page !== null);
}

/** Every valid city × service page. */
export function listAllServiceAreaPages(): ServiceAreaPageRef[] {
  return services.flatMap((service) => listPagesForService(service.slug));
}

export function listCityParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export function listCityServiceParams() {
  return listAllServiceAreaPages().map((page) => ({
    slug: page.areaSlug,
    service: page.serviceSlug,
  }));
}

export function listServiceHubParams() {
  return services.map((service) => ({ slug: service.slug }));
}
