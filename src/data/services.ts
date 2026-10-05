export type ServiceIcon =
  | "droplet"
  | "wrench"
  | "pipe"
  | "flame"
  | "alert";

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
  image: "faucet" | "work" | "fittings" | "bathroom" | "hero";
};

/**
 * Confirmed services only.
 * Add a new object when Swift Flo confirms another service.
 * Do not list a service here until it is actually offered.
 */
export const services: Service[] = [
  {
    slug: "plumbing-services",
    name: "Plumbing Services",
    summary:
      "Professional plumbing service for homeowners and businesses throughout Nashville and Middle Tennessee.",
    description:
      "Swift Flo Plumbing Services provides reliable plumbing services for customers throughout Nashville and surrounding Middle Tennessee communities. Request a visit during published business hours and describe the plumbing work you need.",
    details: [
      "Tell us about the plumbing service you need.",
      "Share a phone number and email so the request can be followed up.",
      "Schedule the visit within Monday through Sunday, 8:00 AM to 8:00 PM.",
      "Service is arranged for customers across our confirmed Middle Tennessee service areas.",
    ],
    icon: "droplet",
    image: "faucet",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
