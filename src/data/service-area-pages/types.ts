import type { ServiceInAreaContent } from "@/data/service-in-area";
import type { ServiceAreaByServiceContent } from "@/data/service-area-by-service";

export type PageImageRef = {
  src: string;
  alt: string;
};

/** Required content for one city × service page. */
export type CityServicePageContent = ServiceInAreaContent & {
  metaTitle: string;
  metaDescription: string;
  heroImage?: PageImageRef;
  aboutImage?: PageImageRef;
  overviewImage?: PageImageRef;
  ctaImage?: PageImageRef;
};

/** Required narrative content for one city overview page. */
export type CityPageContent = {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  introduction: string;
  summary: string;
  whyLocal: { title: string; text: string }[];
  about: { title: string; description: string };
  services: { title: string; description: string };
  overview: { title: string; description: string };
  details: {
    title: string;
    description: string;
    points: { title: string; text: string }[];
  };
  whyChooseUs: {
    title: string;
    description: string;
    reasons: {
      title: string;
      text: string;
      icon: "pin" | "wrench" | "users" | "shield" | "droplet" | "clock";
    }[];
  };
  cta: { title: string; description: string };
  faqs: { question: string; answer: string }[];
  serviceNotes: string[];
};

/** Required content for one service hub page. */
export type ServiceHubPageContent = ServiceAreaByServiceContent & {
  metaTitle: string;
  metaDescription: string;
};

/**
 * @deprecated Prefer CityServicePageContent. Kept for older override imports.
 */
export type ServiceAreaPageOverride = Partial<ServiceInAreaContent> & {
  metaTitle?: string;
  metaDescription?: string;
  heroImageSrc?: string;
  heroImageAlt?: string;
  aboutImageSrc?: string;
  aboutImageAlt?: string;
  overviewImageSrc?: string;
  overviewImageAlt?: string;
  ctaImageSrc?: string;
  ctaImageAlt?: string;
};

export type ServiceAreaPageRef = {
  areaSlug: string;
  areaCity: string;
  areaLabel: string;
  serviceSlug: string;
  serviceName: string;
  href: string;
  hasDedicatedContent: boolean;
};
