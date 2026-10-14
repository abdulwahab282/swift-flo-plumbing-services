export type ServiceIcon =
  | "droplet"
  | "wrench"
  | "pipe"
  | "flame"
  | "alert"
  | "camera"
  | "filter"
  | "dig";

export type ServiceImageKey =
  | "faucet"
  | "work"
  | "fittings"
  | "bathroom"
  | "hero"
  | "waterHeater"
  | "kitchenFaucet"
  | "galleryCamera"
  | "toiletRepair"
  | "serviceOverview";

/** Catalog entry used by listings, nav, forms, and service-area resolvers. */
export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
  image: ServiceImageKey;
};

/** Dedicated page content for /services/{slug} — edit per service only. */
export type ServicePageContent = {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: ServiceImageKey;
  };
  expect: {
    title: string;
    details: string[];
  };
  sidebar: {
    areaLabel: string;
    areaValue: string;
    daysLabel: string;
    hoursLabel: string;
    secondaryImage: ServiceImageKey;
  };
  areas: {
    title: string;
    description: string;
  };
  cta: {
    title: string;
    description: string;
  };
};
