import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/bathroom-remodeling */
const page: ServicePageContent = {
  metaTitle: `Bathroom Remodeling in ${site.locationLabel}`,
  metaDescription:
    "Bring your renovation vision to life with precise plumbing layout updates, fixture installations, and modern luxury upgrades.",
  keywords: [
    "Bathroom Remodeling Nashville",
    "Bathroom Remodeling Middle Tennessee",
    "plumber bathroom remodeling",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Bathroom Remodeling",
    description:
      "Swift Flo Plumbing Services supports bathroom remodeling with professional plumbing installations and fixture work. From updating vanities and showers to broader remodel plumbing needs, we help create a finished bathroom that works well day to day.",
    image: "bathroom",
  },
  expect: {
    title: "What to expect",
    details: [
      "Install and connect bathroom fixtures with care.",
      "Support plumbing needs during bathroom remodel projects.",
      "Help update sinks, toilets, showers, and related connections.",
      "Discuss your remodel plans when you request a quote.",
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
    title: "Bathroom remodeling service areas",
    description:
      "Open a dedicated bathroom remodeling page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request bathroom remodeling in ${site.locationLabel}`,
    description:
      "Bring your renovation vision to life with precise plumbing layout updates, fixture installations, and modern luxury upgrades.",
  },
};

export default page;
