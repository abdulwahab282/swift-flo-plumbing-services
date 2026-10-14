import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/camera-inspections */
const page: ServicePageContent = {
  metaTitle: `Camera Inspections in ${site.locationLabel}`,
  metaDescription:
    "Diagnose hidden pipeline cracks, root intrusions, and stubborn blockages accurately using advanced high-definition sewer video camera technology.",
  keywords: [
    "Camera Inspections Nashville",
    "Camera Inspections Middle Tennessee",
    "plumber camera inspections",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Camera Inspections",
    description:
      "Swift Flo Plumbing Services offers camera inspections to identify blockages, pipe damage, and other underground plumbing concerns. A camera inspection gives customers a clearer understanding of the issue before repair recommendations are made.",
    image: "galleryCamera",
  },
  expect: {
    title: "What to expect",
    details: [
      "Inspect drain and sewer lines with video camera equipment.",
      "Help pinpoint the location and nature of plumbing issues.",
      "Support informed decisions about repairs or replacements.",
      "Available across our confirmed Middle Tennessee service areas.",
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
    title: "Camera inspection service areas",
    description:
      "Open a dedicated camera inspection page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request camera inspections in ${site.locationLabel}`,
    description:
      "Diagnose hidden pipeline cracks, root intrusions, and stubborn blockages accurately using advanced high-definition sewer video camera technology.",
  },
};

export default page;
