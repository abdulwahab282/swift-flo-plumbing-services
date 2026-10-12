/**
 * Shared Service Area catalog for Node generation / validation scripts.
 * Runtime coverage lives in src/data/service-area-pages/coverage.ts —
 * keep both in sync (generate:service-area-content rewrites coverage.ts).
 */

export const HOURS = "Monday – Sunday, 8:00 AM – 8:00 PM";
export const PHONE = "629-238-8322";
export const BRAND = "Swift Flo Plumbing Services";

export const cities = [
  {
    slug: "brentwood-tn",
    city: "Brentwood",
    label: "Brentwood, TN",
    pascal: "Brentwood",
    community:
      "residential streets and commercial corridors near Cool Springs and Maryland Farms",
  },
  {
    slug: "franklin-tn",
    city: "Franklin",
    label: "Franklin, TN",
    pascal: "Franklin",
    community:
      "historic downtown Franklin plus growing neighborhoods across Williamson County",
  },
  {
    slug: "gallatin-tn",
    city: "Gallatin",
    label: "Gallatin, TN",
    pascal: "Gallatin",
    community:
      "homes and businesses around Gallatin’s town center and nearby Sumner County roads",
  },
  {
    slug: "hendersonville-tn",
    city: "Hendersonville",
    label: "Hendersonville, TN",
    pascal: "Hendersonville",
    community:
      "lakeside neighborhoods and commercial stretches along the Hendersonville corridor",
  },
  {
    slug: "la-vergne-tn",
    city: "La Vergne",
    label: "La Vergne, TN",
    pascal: "LaVergne",
    community:
      "residential communities and light industrial areas between Nashville and Murfreesboro",
  },
  {
    slug: "lebanon-tn",
    city: "Lebanon",
    label: "Lebanon, TN",
    pascal: "Lebanon",
    community:
      "Wilson County neighborhoods and commercial properties around Lebanon’s city core",
  },
  {
    slug: "mt-juliet-tn",
    city: "Mt. Juliet",
    label: "Mt. Juliet, TN",
    pascal: "MtJuliet",
    community:
      "growing Mt. Juliet subdivisions and Providence-area commercial addresses",
  },
  {
    slug: "murfreesboro-tn",
    city: "Murfreesboro",
    label: "Murfreesboro, TN",
    pascal: "Murfreesboro",
    community:
      "Rutherford County homes, campus-area rentals, and commercial properties citywide",
  },
  {
    slug: "nashville-tn",
    city: "Nashville",
    label: "Nashville, TN",
    pascal: "Nashville",
    community:
      "Nashville neighborhoods and commercial districts across Davidson County service requests",
  },
  {
    slug: "smyrna-tn",
    city: "Smyrna",
    label: "Smyrna, TN",
    pascal: "Smyrna",
    community:
      "Smyrna neighborhoods and commercial properties along the Nissan Drive corridor",
  },
  {
    slug: "spring-hill-tn",
    city: "Spring Hill",
    label: "Spring Hill, TN",
    pascal: "SpringHill",
    community:
      "Spring Hill subdivisions spanning Maury and Williamson County growth areas",
  },
  {
    slug: "thompsons-station-tn",
    city: "Thompson's Station",
    label: "Thompson's Station, TN",
    pascal: "ThompsonsStation",
    community:
      "Thompson’s Station neighborhoods and surrounding Williamson County properties",
  },
];

export const services = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    lower: "drain cleaning",
    focus: "clogged and slow drains",
    work: "clearing sinks, showers, tubs, floor drains, and main-line backups",
    summary:
      "Professional drain cleaning restores wastewater flow when fixtures run slow or stop draining.",
    details: [
      "Clear clogged sinks, showers, tubs, and floor drains.",
      "Address slow-draining fixtures before they become larger problems.",
      "Support for residential and commercial drain concerns.",
      "Request service during Monday through Sunday, 8:00 AM to 8:00 PM.",
    ],
    imageSrc: "/images/work.jpg",
    imageAltBase: "Plumber clearing a drain connection",
  },
  {
    slug: "camera-inspections",
    name: "Camera Inspections",
    lower: "camera inspections",
    focus: "hidden pipe conditions",
    work: "video inspection of drain and sewer lines to locate blockages and damage",
    summary:
      "Camera inspections help diagnose underground plumbing issues before repair work begins.",
    details: [
      "Inspect drain and sewer lines with video camera equipment.",
      "Help pinpoint the location and nature of plumbing issues.",
      "Support informed decisions about repairs or replacements.",
      "Available across our confirmed Middle Tennessee service areas.",
    ],
    imageSrc: "/images/gallery-camera.jpg",
    imageAltBase: "Plumbing inspection camera for drain diagnostics",
  },
  {
    slug: "water-filtration-system-installation",
    name: "Water Filtration System Installation",
    lower: "water filtration system installation",
    focus: "cleaner household water",
    work: "installing filtration systems matched to the property plumbing layout",
    summary:
      "Water filtration installation helps improve water quality for drinking, cooking, and daily use.",
    details: [
      "Install water filtration systems suited to your property.",
      "Support cleaner water for drinking, cooking, and household use.",
      "Professional plumbing connections and clean workmanship.",
      "Request a quote and describe the filtration setup you need.",
    ],
    imageSrc: "/images/kitchen-faucet.jpg",
    imageAltBase: "Kitchen faucet and water filtration plumbing",
  },
  {
    slug: "water-heater-repairs-replacement",
    name: "Water Heater Repairs & Replacement",
    lower: "water heater repairs and replacement",
    focus: "dependable hot water",
    work: "diagnosing, repairing, or replacing tank and tankless water heaters",
    summary:
      "Water heater service restores reliable hot water when units leak, fail to heat, or need replacement.",
    details: [
      "Diagnose and repair common water heater problems.",
      "Replace aging or failing water heaters when needed.",
      "Support for tank and tankless water heater concerns.",
      "Schedule service within published business hours.",
    ],
    imageSrc: "/images/water-heater.jpg",
    imageAltBase: "Plumber servicing water heater connections",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    lower: "bathroom remodeling plumbing",
    focus: "fixture and remodel plumbing",
    work: "fixture installation and plumbing updates during bathroom remodel projects",
    summary:
      "Bathroom remodeling plumbing covers fixture connections and layout updates for a finished bathroom.",
    details: [
      "Install and connect bathroom fixtures with care.",
      "Support plumbing needs during bathroom remodel projects.",
      "Help update sinks, toilets, showers, and related connections.",
      "Discuss your remodel plans when you request a quote.",
    ],
    imageSrc: "/images/bathroom.jpg",
    imageAltBase: "Bathroom vanity and plumbing fixtures",
  },
  {
    slug: "water-sewer-excavation-repairs-replacements",
    name: "Water & Sewer Excavation Repairs & Replacements",
    lower: "water and sewer excavation repairs and replacements",
    focus: "underground line repairs",
    work: "repairing or replacing damaged water and sewer service lines",
    summary:
      "Excavation repairs address underground water and sewer line damage that needs professional plumbing work.",
    details: [
      "Repair or replace damaged water and sewer lines.",
      "Support excavation-related plumbing work when required.",
      "Address leaks, breaks, and aging underground lines.",
      "Request service with a description of the issue you are seeing.",
    ],
    imageSrc: "/images/fittings.jpg",
    imageAltBase: "Pipe fittings used for underground plumbing repairs",
  },
];

/** Explicit coverage: service slug → city slugs where that service is offered. */
export const coverageByServiceSlug = Object.fromEntries(
  services.map((service) => [service.slug, cities.map((city) => city.slug)]),
);

export function getCitiesForService(serviceSlug) {
  const slugs = coverageByServiceSlug[serviceSlug] ?? [];
  return cities.filter((city) => slugs.includes(city.slug));
}

export function isCovered(areaSlug, serviceSlug) {
  return (coverageByServiceSlug[serviceSlug] ?? []).includes(areaSlug);
}

export function listCoveredCombos() {
  return services.flatMap((service) =>
    getCitiesForService(service.slug).map((city) => ({
      areaSlug: city.slug,
      serviceSlug: service.slug,
      city,
      service,
    })),
  );
}
