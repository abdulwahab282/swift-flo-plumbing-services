import type { ServiceInAreaContent } from "@/data/service-in-area";
import type {
  CityPageContent,
  CityServicePageContent,
  ServiceHubPageContent,
} from "@/data/service-area-pages/types";
import { listAllServiceAreaPages } from "@/data/service-area-pages/catalog";
import { hasCityPageContent } from "@/data/service-area-pages/cities";
import { hasServiceHubContent } from "@/data/service-area-pages/hubs";
import { hasCityServicePageContent } from "@/data/service-area-pages/services";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";

const requiredStringFields: (keyof ServiceInAreaContent)[] = [
  "heroTitle",
  "heroDescription",
  "aboutTitle",
  "aboutDescription",
  "aboutSecondary",
  "servicesTitle",
  "servicesDescription",
  "ctaTitle",
  "ctaDescription",
  "overviewTitle",
  "overviewDescription",
  "detailsTitle",
  "detailsDescription",
  "whyTitle",
  "whyDescription",
];

export function validateServiceInAreaContent(
  content: ServiceInAreaContent,
  context: string,
): string[] {
  const errors: string[] = [];

  for (const field of requiredStringFields) {
    const value = content[field];
    if (typeof value !== "string" || value.trim().length < 8) {
      errors.push(`${context}: missing/short field "${field}"`);
    }
  }

  if (!content.highlights?.length) {
    errors.push(`${context}: highlights required`);
  }
  if (!content.overviewPoints?.length) {
    errors.push(`${context}: overviewPoints required`);
  }
  if (!content.detailPoints?.length) {
    errors.push(`${context}: detailPoints required`);
  }
  if (!Array.isArray(content.whyReasons)) {
    errors.push(`${context}: whyReasons must be an array`);
  }
  if (!content.faqs || content.faqs.length < 6) {
    errors.push(
      `${context}: at least 6 FAQs required (found ${content.faqs?.length ?? 0})`,
    );
  }

  return errors;
}

export function validateCityServicePageContent(
  content: CityServicePageContent,
  context: string,
): string[] {
  const errors = validateServiceInAreaContent(content, context);

  if (!content.metaTitle?.trim()) {
    errors.push(`${context}: metaTitle required`);
  }
  if (!content.metaDescription || content.metaDescription.trim().length < 20) {
    errors.push(`${context}: metaDescription required`);
  }

  return errors;
}

export function validateCityPageContent(
  content: CityPageContent,
  context: string,
): string[] {
  const errors: string[] = [];
  const required: (keyof CityPageContent)[] = [
    "metaTitle",
    "metaDescription",
    "heroTitle",
    "introduction",
    "summary",
  ];

  for (const field of required) {
    const value = content[field];
    if (typeof value !== "string" || value.trim().length < 8) {
      errors.push(`${context}: missing/short field "${String(field)}"`);
    }
  }

  if (!content.whyLocal?.length) errors.push(`${context}: whyLocal required`);
  if (!content.about?.title || !content.about?.description) {
    errors.push(`${context}: about required`);
  }
  if (!content.services?.title || !content.services?.description) {
    errors.push(`${context}: services required`);
  }
  if (!content.overview?.title || !content.overview?.description) {
    errors.push(`${context}: overview required`);
  }
  if (!content.details?.points?.length) {
    errors.push(`${context}: details.points required`);
  }
  if (!content.whyChooseUs?.reasons?.length) {
    errors.push(`${context}: whyChooseUs.reasons required`);
  }
  if (!content.cta?.title || !content.cta?.description) {
    errors.push(`${context}: cta required`);
  }
  if (!content.faqs || content.faqs.length < 10) {
    errors.push(
      `${context}: at least 10 FAQs required (found ${content.faqs?.length ?? 0})`,
    );
  }

  return errors;
}

export function validateServiceHubPageContent(
  content: ServiceHubPageContent,
  context: string,
): string[] {
  const errors: string[] = [];

  if (!content.metaTitle?.trim()) errors.push(`${context}: metaTitle required`);
  if (!content.metaDescription || content.metaDescription.trim().length < 20) {
    errors.push(`${context}: metaDescription required`);
  }
  if (!content.hero?.title || !content.hero?.description) {
    errors.push(`${context}: hero required`);
  }
  if (!content.highlights?.length) errors.push(`${context}: highlights required`);
  if (!content.faqs || content.faqs.length < 10) {
    errors.push(
      `${context}: at least 10 FAQs required (found ${content.faqs?.length ?? 0})`,
    );
  }

  return errors;
}

export function assertValidServiceInAreaContent(
  content: ServiceInAreaContent,
  context: string,
) {
  const errors = validateServiceInAreaContent(content, context);
  if (errors.length > 0) {
    throw new Error(
      `Invalid service-area page content:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}

export function assertValidCityServicePageContent(
  content: CityServicePageContent,
  context: string,
) {
  const errors = validateCityServicePageContent(content, context);
  if (errors.length > 0) {
    throw new Error(
      `Invalid city×service page content:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}

export function assertValidCityPageContent(
  content: CityPageContent,
  context: string,
) {
  const errors = validateCityPageContent(content, context);
  if (errors.length > 0) {
    throw new Error(
      `Invalid city page content:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}

export function assertValidServiceHubPageContent(
  content: ServiceHubPageContent,
  context: string,
) {
  const errors = validateServiceHubPageContent(content, context);
  if (errors.length > 0) {
    throw new Error(
      `Invalid service hub content:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}

/** Ensures every generated route has a dedicated content file registered. */
export function assertAllServiceAreaContentPresent() {
  const errors: string[] = [];

  for (const area of serviceAreas) {
    if (!hasCityPageContent(area.slug)) {
      errors.push(`Missing city content: cities/${area.slug}.ts`);
    }
  }

  for (const service of services) {
    if (!hasServiceHubContent(service.slug)) {
      errors.push(`Missing hub content: hubs/${service.slug}.ts`);
    }
  }

  for (const page of listAllServiceAreaPages()) {
    if (!hasCityServicePageContent(page.areaSlug, page.serviceSlug)) {
      errors.push(
        `Missing city×service content: services/${page.areaSlug}/${page.serviceSlug}.ts`,
      );
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `Service area content registry incomplete:\n${errors.map((e) => `- ${e}`).join("\n")}`,
    );
  }
}
