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

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
  image: ServiceImageKey;
};

/**
 * Confirmed plumbing services offered by Swift Flo.
 */
export const services: Service[] = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    summary:
      "Professional drain cleaning to clear clogs and restore proper flow in sinks, showers, tubs, and main lines.",
    description:
      "Swift Flo Plumbing Services provides professional drain cleaning for homeowners and businesses throughout Nashville and Middle Tennessee. Whether you are dealing with slow drains, recurring clogs, or a blocked main line, our team can help restore reliable drainage.",
    details: [
      "Clear clogged sinks, showers, tubs, and floor drains.",
      "Address slow-draining fixtures before they become larger problems.",
      "Support for residential and commercial drain concerns.",
      "Request service during Monday through Sunday, 8:00 AM to 8:00 PM.",
    ],
    icon: "pipe",
    image: "work",
  },
  {
    slug: "camera-inspections",
    name: "Camera Inspections",
    summary:
      "Video camera inspections that help locate drain and sewer line issues with clear, accurate diagnostics.",
    description:
      "Swift Flo Plumbing Services offers camera inspections to identify blockages, pipe damage, and other underground plumbing concerns. A camera inspection gives customers a clearer understanding of the issue before repair recommendations are made.",
    details: [
      "Inspect drain and sewer lines with video camera equipment.",
      "Help pinpoint the location and nature of plumbing issues.",
      "Support informed decisions about repairs or replacements.",
      "Available across our confirmed Middle Tennessee service areas.",
    ],
    icon: "camera",
    image: "galleryCamera",
  },
  {
    slug: "water-filtration-system-installation",
    name: "Water Filtration System Installation",
    summary:
      "Professional installation of water filtration systems for cleaner, better-tasting water throughout the home.",
    description:
      "Swift Flo Plumbing Services installs water filtration systems for customers who want improved water quality at home. From whole-home setups to point-of-use systems, we help match the installation to your plumbing needs.",
    details: [
      "Install water filtration systems suited to your property.",
      "Support cleaner water for drinking, cooking, and household use.",
      "Professional plumbing connections and clean workmanship.",
      "Request a quote and describe the filtration setup you need.",
    ],
    icon: "filter",
    image: "kitchenFaucet",
  },
  {
    slug: "water-heater-repairs-replacement",
    name: "Water Heater Repairs & Replacement",
    summary:
      "Dependable water heater repair and replacement service for homes and businesses that need reliable hot water.",
    description:
      "Swift Flo Plumbing Services provides water heater repairs and replacements throughout Middle Tennessee. If your water heater is leaking, not heating properly, or ready for an upgrade, our team can help restore dependable hot water.",
    details: [
      "Diagnose and repair common water heater problems.",
      "Replace aging or failing water heaters when needed.",
      "Support for tank and tankless water heater concerns.",
      "Schedule service within published business hours.",
    ],
    icon: "flame",
    image: "waterHeater",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    summary:
      "Plumbing support for bathroom remodeling projects, including fixtures, connections, and professional installations.",
    description:
      "Swift Flo Plumbing Services supports bathroom remodeling with professional plumbing installations and fixture work. From updating vanities and showers to broader remodel plumbing needs, we help create a finished bathroom that works well day to day.",
    details: [
      "Install and connect bathroom fixtures with care.",
      "Support plumbing needs during bathroom remodel projects.",
      "Help update sinks, toilets, showers, and related connections.",
      "Discuss your remodel plans when you request a quote.",
    ],
    icon: "wrench",
    image: "bathroom",
  },
  {
    slug: "water-sewer-excavation-repairs-replacements",
    name: "Water & Sewer Excavation Repairs & Replacements",
    summary:
      "Excavation-related water and sewer line repairs and replacements for damaged or aging underground plumbing.",
    description:
      "Swift Flo Plumbing Services handles water and sewer excavation repairs and replacements when underground lines need professional attention. From damaged service lines to necessary replacements, we provide clear communication and dependable plumbing work.",
    details: [
      "Repair or replace damaged water and sewer lines.",
      "Support excavation-related plumbing work when required.",
      "Address leaks, breaks, and aging underground lines.",
      "Request service with a description of the issue you are seeing.",
    ],
    icon: "dig",
    image: "fittings",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
