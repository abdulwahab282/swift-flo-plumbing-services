import {
  assertAllServiceAreaContentPresent,
  assertValidCityPageContent,
  assertValidCityServicePageContent,
  assertValidServiceHubPageContent,
} from "@/data/service-area-pages/validate";
import {
  getCityPageContent,
  hasCityPageContent,
} from "@/data/service-area-pages/cities";
import {
  getServiceHubContent,
  hasServiceHubContent,
} from "@/data/service-area-pages/hubs";
import {
  getCityServicePageContent,
  hasCityServicePageContent,
  pageContentKey,
} from "@/data/service-area-pages/services";
import type {
  CityPageContent,
  CityServicePageContent,
  ServiceHubPageContent,
} from "@/data/service-area-pages/types";
import type { ServiceArea } from "@/data/service-areas";
import type { ServiceInAreaContent } from "@/data/service-in-area";
import type { Service } from "@/data/services";

export type {
  CityPageContent,
  CityServicePageContent,
  ServiceAreaPageOverride,
  ServiceAreaPageRef,
  ServiceHubPageContent,
} from "@/data/service-area-pages/types";
export {
  listAllServiceAreaPages,
  listCityParams,
  listCityServiceParams,
  listPagesForService,
  listServiceHubParams,
} from "@/data/service-area-pages/catalog";
export {
  getAreaSlugsForService,
  getServiceSlugsForArea,
  isServiceOfferedInArea,
  serviceCoverageByServiceSlug,
} from "@/data/service-area-pages/coverage";
export {
  getCityPageContent,
  hasCityPageContent,
} from "@/data/service-area-pages/cities";
export {
  getServiceHubContent,
  hasServiceHubContent,
} from "@/data/service-area-pages/hubs";
export {
  getCityServicePageContent,
  hasCityServicePageContent,
  pageContentKey,
} from "@/data/service-area-pages/services";

/** @deprecated Use hasCityServicePageContent */
export const hasServiceAreaPageOverride = hasCityServicePageContent;
/** @deprecated Use pageContentKey */
export const pageOverrideKey = pageContentKey;
/** @deprecated Use getCityServicePageContent */
export function getServiceAreaPageOverride(
  areaSlug: string,
  serviceSlug: string,
) {
  return getCityServicePageContent(areaSlug, serviceSlug);
}

export type ResolvedServiceAreaPage = {
  content: ServiceInAreaContent;
  meta: { title: string; description: string };
  images: {
    hero?: { src: string; alt: string };
    about?: { src: string; alt: string };
    overview?: { src: string; alt: string };
    cta?: { src: string; alt: string };
  };
};

function splitCityServiceContent(page: CityServicePageContent): ResolvedServiceAreaPage {
  const {
    metaTitle,
    metaDescription,
    heroImage,
    aboutImage,
    overviewImage,
    ctaImage,
    ...content
  } = page;

  return {
    content,
    meta: {
      title: metaTitle,
      description: metaDescription,
    },
    images: {
      hero: heroImage,
      about: aboutImage,
      overview: overviewImage,
      cta: ctaImage,
    },
  };
}

/**
 * Resolves dedicated hardcoded content for a city × service page.
 * Throws if the required content file is missing or incomplete.
 */
export function resolveServiceAreaPage(
  area: ServiceArea,
  service: Service,
): ResolvedServiceAreaPage {
  const page = getCityServicePageContent(area.slug, service.slug);
  if (!page) {
    throw new Error(
      `Missing dedicated content for /service-areas/${area.slug}/${service.slug}. ` +
        `Add src/data/service-area-pages/services/${area.slug}/${service.slug}.ts and register it.`,
    );
  }

  assertValidCityServicePageContent(page, `${area.slug}/${service.slug}`);
  return splitCityServiceContent(page);
}

export function resolveCityPage(areaSlug: string): CityPageContent {
  const page = getCityPageContent(areaSlug);
  if (!page) {
    throw new Error(
      `Missing dedicated city content for /service-areas/${areaSlug}. ` +
        `Add src/data/service-area-pages/cities/${areaSlug}.ts and register it.`,
    );
  }
  assertValidCityPageContent(page, areaSlug);
  return page;
}

export function resolveServiceHubPage(serviceSlug: string): ServiceHubPageContent {
  const page = getServiceHubContent(serviceSlug);
  if (!page) {
    throw new Error(
      `Missing dedicated hub content for /service-areas/for/${serviceSlug}. ` +
        `Add src/data/service-area-pages/hubs/${serviceSlug}.ts and register it.`,
    );
  }
  assertValidServiceHubPageContent(page, serviceSlug);
  return page;
}

export function getServiceAreaPageContent(
  area: ServiceArea,
  service: Service,
): ServiceInAreaContent {
  return resolveServiceAreaPage(area, service).content;
}

export function getServiceAreaPageMeta(
  area: ServiceArea,
  service: Service,
): { title: string; description: string } {
  return resolveServiceAreaPage(area, service).meta;
}

// Fail fast during module evaluation / build if any route lacks content.
assertAllServiceAreaContentPresent();
