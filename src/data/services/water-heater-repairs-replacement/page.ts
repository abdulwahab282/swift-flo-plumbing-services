import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/water-heater-repairs-replacement */
const page: ServicePageContent = {
  metaTitle: `Water Heater Repairs & Replacement in ${site.locationLabel}`,
  metaDescription:
    "Ensure endless hot water supply for your household through expert diagnostic repairs or seamless new unit installations.",
  keywords: [
    "Water Heater Repairs & Replacement Nashville",
    "Water Heater Repairs & Replacement Middle Tennessee",
    "plumber water heater repairs and replacement",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Water Heater Repairs & Replacement",
    description:
      "Swift Flo Plumbing Services provides water heater repairs and replacements throughout Middle Tennessee. If your water heater is leaking, not heating properly, or ready for an upgrade, our team can help restore dependable hot water.",
    image: "waterHeater",
  },
  expect: {
    title: "What to expect",
    details: [
      "Diagnose and repair common water heater problems.",
      "Replace aging or failing water heaters when needed.",
      "Support for tank and tankless water heater concerns.",
      "Schedule service within published business hours.",
    ],
  },
  sidebar: {
    areaLabel: "Service area",
    areaValue: site.locationFull,
    daysLabel: "Days",
    hoursLabel: "Hours",
    secondaryImage: "fittings",
  },
  areas: {
    title: "Water heater service areas",
    description:
      "Open a dedicated water heater page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request water heater repairs & replacement in ${site.locationLabel}`,
    description:
      "Ensure endless hot water supply for your household through expert diagnostic repairs or seamless new unit installations.",
  },
};

export default page;
