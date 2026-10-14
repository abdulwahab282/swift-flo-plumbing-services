import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/water-sewer-excavation-repairs-replacements */
const page: ServicePageContent = {
  metaTitle: `Water & Sewer Excavation Repairs & Replacements in ${site.locationLabel}`,
  metaDescription:
    "Tackle severe underground line failures safely using heavy-duty excavation methods and durable, long-lasting replacement materials.",
  keywords: [
    "Water & Sewer Excavation Repairs & Replacements Nashville",
    "Water & Sewer Excavation Repairs & Replacements Middle Tennessee",
    "plumber water and sewer excavation repairs and replacements",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Water & Sewer Excavation Repairs & Replacements",
    description:
      "Swift Flo Plumbing Services handles water and sewer excavation repairs and replacements when underground lines need professional attention. From damaged service lines to necessary replacements, we provide clear communication and dependable plumbing work.",
    image: "fittings",
  },
  expect: {
    title: "What to expect",
    details: [
      "Repair or replace damaged water and sewer lines.",
      "Support excavation-related plumbing work when required.",
      "Address leaks, breaks, and aging underground lines.",
      "Request service with a description of the issue you are seeing.",
    ],
  },
  sidebar: {
    areaLabel: "Service area",
    areaValue: site.locationFull,
    daysLabel: "Days",
    hoursLabel: "Hours",
    secondaryImage: "work",
  },
  areas: {
    title: "Water & sewer excavation service areas",
    description:
      "Open a dedicated excavation repairs page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request water & sewer excavation repairs in ${site.locationLabel}`,
    description:
      "Tackle severe underground line failures safely using heavy-duty excavation methods and durable, long-lasting replacement materials.",
  },
};

export default page;
