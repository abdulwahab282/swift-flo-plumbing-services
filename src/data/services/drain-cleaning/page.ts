import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/drain-cleaning */
const page: ServicePageContent = {
  metaTitle: `Drain Cleaning in ${site.locationLabel}`,
  metaDescription:
    "Swiftly eliminate stubborn clogs and restore proper wastewater flow with our thorough, professional residential and commercial drain clearing techniques.",
  keywords: [
    "Drain Cleaning Nashville",
    "Drain Cleaning Middle Tennessee",
    "plumber drain cleaning",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Drain Cleaning",
    description:
      "Swift Flo Plumbing Services provides professional drain cleaning for homeowners and businesses throughout Nashville and Middle Tennessee. Whether you are dealing with slow drains, recurring clogs, or a blocked main line, our team can help restore reliable drainage.",
    image: "work",
  },
  expect: {
    title: "What to expect",
    details: [
      "Clear clogged sinks, showers, tubs, and floor drains.",
      "Address slow-draining fixtures before they become larger problems.",
      "Support for residential and commercial drain concerns.",
      "Request service during Monday through Sunday, 8:00 AM to 8:00 PM.",
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
    title: "Drain cleaning service areas",
    description:
      "Open a dedicated drain cleaning page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request drain cleaning in ${site.locationLabel}`,
    description:
      "Swiftly eliminate stubborn clogs and restore proper wastewater flow with our thorough, professional residential and commercial drain clearing techniques.",
  },
};

export default page;
