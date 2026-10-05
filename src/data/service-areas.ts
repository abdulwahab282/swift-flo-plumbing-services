import type { ServiceAreaFaq } from "@/data/service-area-faqs";
import { buildServiceAreaFaqs } from "@/data/service-area-faqs";

export type ServiceAreaAboutImageKey =
  | "aboutBrentwood"
  | "aboutFranklin"
  | "aboutGallatin"
  | "aboutHendersonville"
  | "aboutLaVergne"
  | "aboutLebanon"
  | "aboutMtJuliet"
  | "aboutMurfreesboro"
  | "aboutNashville"
  | "aboutSmyrna"
  | "aboutSpringHill"
  | "aboutThompsonsStation";

export type ServiceAreaCtaImageKey =
  | "ctaBrentwood"
  | "ctaFranklin"
  | "ctaGallatin"
  | "ctaHendersonville"
  | "ctaLaVergne"
  | "ctaLebanon"
  | "ctaMtJuliet"
  | "ctaMurfreesboro"
  | "ctaNashville"
  | "ctaSmyrna"
  | "ctaSpringHill"
  | "ctaThompsonsStation";

export type ServiceAreaOverviewImageKey =
  | "overviewBrentwood"
  | "overviewFranklin"
  | "overviewGallatin"
  | "overviewHendersonville"
  | "overviewLaVergne"
  | "overviewLebanon"
  | "overviewMtJuliet"
  | "overviewMurfreesboro"
  | "overviewNashville"
  | "overviewSmyrna"
  | "overviewSpringHill"
  | "overviewThompsonsStation";

export type ServiceAreaHeroImageKey =
  | "heroBrentwood"
  | "heroFranklin"
  | "heroGallatin"
  | "heroHendersonville"
  | "heroLaVergne"
  | "heroLebanon"
  | "heroMtJuliet"
  | "heroMurfreesboro"
  | "heroNashville"
  | "heroSmyrna"
  | "heroSpringHill"
  | "heroThompsonsStation";

export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  label: string;
  summary: string;
  introduction: string;
  heroImage: ServiceAreaHeroImageKey;
  about: {
    title: string;
    description: string;
    image: ServiceAreaAboutImageKey;
  };
  services: {
    title: string;
    description: string;
  };
  overview: {
    title: string;
    description: string;
    image: ServiceAreaOverviewImageKey;
  };
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
  cta: {
    title: string;
    description: string;
    image: ServiceAreaCtaImageKey;
  };
  faqs: ServiceAreaFaq[];
  whyLocal: { title: string; text: string }[];
  serviceNotes: string[];
  map: {
    lat: number;
    lon: number;
    bbox: string;
  };
};

type AreaSeed = {
  city: string;
  slug: string;
  lat: number;
  lon: number;
  bbox: string;
  heroImage: ServiceAreaHeroImageKey;
  aboutImage: ServiceAreaAboutImageKey;
  overviewImage: ServiceAreaOverviewImageKey;
  ctaImage: ServiceAreaCtaImageKey;
};

const areaSeeds: AreaSeed[] = [
  {
    city: "Brentwood",
    slug: "brentwood-tn",
    lat: 36.0331,
    lon: -86.7828,
    bbox: "-86.87,35.99,-86.70,36.08",
    heroImage: "heroBrentwood",
    aboutImage: "aboutBrentwood",
    overviewImage: "overviewBrentwood",
    ctaImage: "ctaBrentwood",
  },
  {
    city: "Franklin",
    slug: "franklin-tn",
    lat: 35.9251,
    lon: -86.8689,
    bbox: "-86.96,35.88,-86.78,35.97",
    heroImage: "heroFranklin",
    aboutImage: "aboutFranklin",
    overviewImage: "overviewFranklin",
    ctaImage: "ctaFranklin",
  },
  {
    city: "Gallatin",
    slug: "gallatin-tn",
    lat: 36.3884,
    lon: -86.4467,
    bbox: "-86.53,36.34,-86.36,36.44",
    heroImage: "heroGallatin",
    aboutImage: "aboutGallatin",
    overviewImage: "overviewGallatin",
    ctaImage: "ctaGallatin",
  },
  {
    city: "Hendersonville",
    slug: "hendersonville-tn",
    lat: 36.3048,
    lon: -86.62,
    bbox: "-86.70,36.26,-86.54,36.35",
    heroImage: "heroHendersonville",
    aboutImage: "aboutHendersonville",
    overviewImage: "overviewHendersonville",
    ctaImage: "ctaHendersonville",
  },
  {
    city: "La Vergne",
    slug: "la-vergne-tn",
    lat: 36.0156,
    lon: -86.5819,
    bbox: "-86.66,35.97,-86.50,36.06",
    heroImage: "heroLaVergne",
    aboutImage: "aboutLaVergne",
    overviewImage: "overviewLaVergne",
    ctaImage: "ctaLaVergne",
  },
  {
    city: "Lebanon",
    slug: "lebanon-tn",
    lat: 36.2081,
    lon: -86.2911,
    bbox: "-86.38,36.16,-86.20,36.26",
    heroImage: "heroLebanon",
    aboutImage: "aboutLebanon",
    overviewImage: "overviewLebanon",
    ctaImage: "ctaLebanon",
  },
  {
    city: "Mt. Juliet",
    slug: "mt-juliet-tn",
    lat: 36.2001,
    lon: -86.5186,
    bbox: "-86.60,36.15,-86.44,36.25",
    heroImage: "heroMtJuliet",
    aboutImage: "aboutMtJuliet",
    overviewImage: "overviewMtJuliet",
    ctaImage: "ctaMtJuliet",
  },
  {
    city: "Murfreesboro",
    slug: "murfreesboro-tn",
    lat: 35.8456,
    lon: -86.3903,
    bbox: "-86.48,35.79,-86.30,35.90",
    heroImage: "heroMurfreesboro",
    aboutImage: "aboutMurfreesboro",
    overviewImage: "overviewMurfreesboro",
    ctaImage: "ctaMurfreesboro",
  },
  {
    city: "Nashville",
    slug: "nashville-tn",
    lat: 36.1627,
    lon: -86.7816,
    bbox: "-86.92,36.08,-86.64,36.25",
    heroImage: "heroNashville",
    aboutImage: "aboutNashville",
    overviewImage: "overviewNashville",
    ctaImage: "ctaNashville",
  },
  {
    city: "Smyrna",
    slug: "smyrna-tn",
    lat: 35.9828,
    lon: -86.5186,
    bbox: "-86.60,35.94,-86.44,36.03",
    heroImage: "heroSmyrna",
    aboutImage: "aboutSmyrna",
    overviewImage: "overviewSmyrna",
    ctaImage: "ctaSmyrna",
  },
  {
    city: "Spring Hill",
    slug: "spring-hill-tn",
    lat: 35.7512,
    lon: -86.93,
    bbox: "-87.02,35.70,-86.84,35.80",
    heroImage: "heroSpringHill",
    aboutImage: "aboutSpringHill",
    overviewImage: "overviewSpringHill",
    ctaImage: "ctaSpringHill",
  },
  {
    city: "Thompson's Station",
    slug: "thompsons-station-tn",
    lat: 35.802,
    lon: -86.9064,
    bbox: "-86.99,35.76,-86.82,35.85",
    heroImage: "heroThompsonsStation",
    aboutImage: "aboutThompsonsStation",
    overviewImage: "overviewThompsonsStation",
    ctaImage: "ctaThompsonsStation",
  },
];

function buildServiceArea(seed: AreaSeed, areaIndex: number): ServiceArea {
  const label = `${seed.city}, TN`;

  return {
    slug: seed.slug,
    city: seed.city,
    state: "TN",
    stateName: "Tennessee",
    label,
    summary: `Professional plumbing service for homeowners and businesses in ${seed.city}, Tennessee.`,
    introduction: `Swift Flo Plumbing Services provides reliable plumbing services for customers in ${seed.city}, Tennessee. Residents and local businesses can request service through the contact form during published hours, Monday through Sunday, 8:00 AM to 8:00 PM.`,
    heroImage: seed.heroImage,
    about: {
      title: `Professional plumbing for ${seed.city} homes and businesses.`,
      description: `${siteName()} is proud to serve ${seed.city} with dependable plumbing service focused on clear communication, quality workmanship, and a straightforward experience. Whether you need help with a repair, fixture work, or a planned plumbing project, our team is ready to support customers throughout ${seed.city}, Tennessee.`,
      image: seed.aboutImage,
    },
    services: {
      title: `Professional Plumbing Services in ${seed.city}`,
      description: `From drain cleaning and camera inspections to water heater repairs, bathroom remodeling plumbing, water filtration, and water and sewer excavation work, we provide reliable plumbing services for homeowners and businesses in ${seed.city}, Tennessee.`,
    },
    overview: {
      title: `Professional plumbing service across ${seed.city}`,
      description: `From routine repairs to planned plumbing projects, ${siteName()} provides dependable professional plumbing services designed around the needs of ${seed.city} homeowners and businesses. Every request is handled with clear communication, quality workmanship, and a straightforward local experience.`,
      image: seed.overviewImage,
    },
    details: {
      title: `Reliable plumbing service in ${seed.city}`,
      description: `Our plumbing coverage in ${seed.city} is built around dependable local service. We work to give every customer clear communication, professional workmanship, and a smooth experience from the first request through completion.`,
      points: [
        {
          title: "Service coverage",
          text: `Professional plumbing service is available for customers throughout ${seed.city}, Tennessee.`,
        },
        {
          title: "Professional approach",
          text: "Every request is handled with attention to quality workmanship and the specific plumbing needs you describe.",
        },
        {
          title: "Customer communication",
          text: "Clear updates from the initial inquiry through scheduling and completion keep the process easy to follow.",
        },
        {
          title: "Scheduling",
          text: "Visits are arranged within published hours: Monday through Sunday, 8:00 AM to 8:00 PM.",
        },
        {
          title: "Quality standards",
          text: "A professional process designed to deliver dependable plumbing results for homes and businesses.",
        },
        {
          title: "Local availability",
          text: `${seed.city} customers can request service with confidence knowing the area is part of our confirmed coverage.`,
        },
      ],
    },
    whyChooseUs: {
      title: `Why ${seed.city} customers choose us`,
      description: `We combine professional plumbing service, dependable communication, and local ${seed.city} coverage to provide a straightforward experience from start to finish.`,
      reasons: [
        {
          title: "Local Expertise",
          text: `Serving ${seed.city} with professional plumbing service tailored to local customer needs.`,
          icon: "pin",
        },
        {
          title: "Professional Service",
          text: "Focused on quality workmanship and customer satisfaction on every visit.",
          icon: "wrench",
        },
        {
          title: "Reliable Communication",
          text: "Clear communication from the initial inquiry through completion.",
          icon: "users",
        },
        {
          title: "Dependable Reliability",
          text: "A consistent, professional approach designed to make plumbing service simple and convenient.",
          icon: "shield",
        },
        {
          title: "Customer Satisfaction",
          text: "Every project is approached with attention to the customer's needs and expectations.",
          icon: "droplet",
        },
        {
          title: "Convenient Hours",
          text: "Open Monday through Sunday, 8:00 AM to 8:00 PM, so scheduling fits around your week.",
          icon: "clock",
        },
      ],
    },
    cta: {
      title: `Need a plumber in ${seed.city}?`,
      description: `Contact ${siteName()} today to discuss your plumbing needs in ${seed.city}. Request a visit during published hours and get clear next steps from a local professional team.`,
      image: seed.ctaImage,
    },
    faqs: buildServiceAreaFaqs(seed.city, areaIndex),
    whyLocal: [
      {
        title: `Serving ${seed.city}`,
        text: `${seed.city} is a confirmed service area for Swift Flo Plumbing Services, giving local customers a direct way to request professional plumbing work.`,
      },
      {
        title: "Easy to request service",
        text: `Customers in ${seed.city} can submit a plumbing service request through the contact form — with clear confirmation that the area is covered.`,
      },
      {
        title: "Open seven days a week",
        text: "The business is open Monday through Sunday, 8:00 AM to 8:00 PM, so scheduling a plumbing visit fits around a typical week.",
      },
    ],
    serviceNotes: [
      `Plumbing services are available for customers in ${seed.city}, Tennessee.`,
      "Service requests are submitted through the online contact form.",
      "Visits are scheduled within published business hours.",
      `A street address has not been published. The map shows the city of ${seed.city}.`,
    ],
    map: {
      lat: seed.lat,
      lon: seed.lon,
      bbox: seed.bbox,
    },
  };
}

function siteName() {
  return "Swift Flo Plumbing Services";
}

/**
 * Confirmed service areas only.
 * Add another seed when Swift Flo begins serving a new city.
 */
export const serviceAreas: ServiceArea[] = areaSeeds.map((seed, index) =>
  buildServiceArea(seed, index),
);

export const serviceAreaCityNames = serviceAreas.map((area) => area.city);

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}

export function formatServiceAreaList(limit = 6) {
  const names = serviceAreaCityNames;
  if (names.length <= limit) {
    return names.join(", ");
  }

  const shown = names.slice(0, limit);
  return `${shown.join(", ")}, and surrounding Middle Tennessee communities`;
}
