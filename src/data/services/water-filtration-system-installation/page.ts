import type { ServicePageContent } from "@/data/services/types";
import { site } from "@/data/site";

/** Hardcoded page content for /services/water-filtration-system-installation */
const page: ServicePageContent = {
  metaTitle: `Water Filtration System Installation in ${site.locationLabel}`,
  metaDescription:
    "Upgrade your daily water quality by installing cutting-edge whole-home filtration systems designed to remove impurities and sediment effectively.",
  keywords: [
    "Water Filtration System Installation Nashville",
    "Water Filtration System Installation Middle Tennessee",
    "plumber water filtration system installation",
    "Swift Flo Plumbing Services",
    "professional plumber Nashville",
  ],
  hero: {
    eyebrow: site.locationLabel,
    title: "Water Filtration System Installation",
    description:
      "Swift Flo Plumbing Services installs water filtration systems for customers who want improved water quality at home. From whole-home setups to point-of-use systems, we help match the installation to your plumbing needs.",
    image: "kitchenFaucet",
  },
  expect: {
    title: "What to expect",
    details: [
      "Install water filtration systems suited to your property.",
      "Support cleaner water for drinking, cooking, and household use.",
      "Professional plumbing connections and clean workmanship.",
      "Request a quote and describe the filtration setup you need.",
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
    title: "Water filtration service areas",
    description:
      "Open a dedicated water filtration installation page for your city, or browse every confirmed location for this service.",
  },
  cta: {
    title: `Request water filtration system installation in ${site.locationLabel}`,
    description:
      "Upgrade your daily water quality by installing cutting-edge whole-home filtration systems designed to remove impurities and sediment effectively.",
  },
};

export default page;
