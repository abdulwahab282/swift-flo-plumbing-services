import type { ServiceArea } from "@/data/service-areas";
import type { Service } from "@/data/services";
import { site } from "@/data/site";

export type ServiceInAreaContent = {
  heroTitle: string;
  heroDescription: string;
  highlights: { title: string; text: string }[];
  /** Optional mid-page call band rendered immediately after Highlights. */
  callNowTitle?: string;
  callNowDescription?: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutSecondary: string;
  servicesTitle: string;
  servicesDescription: string;
  /** Optional hire/contact band rendered immediately after Our Services. */
  hireTitle?: string;
  hireDescription?: string;
  hireSecondary?: string;
  /** Optional local trust band rendered immediately after the hire/contact section. */
  localTitle?: string;
  localDescription?: string;
  localSecondary?: string;
  ctaTitle: string;
  ctaDescription: string;
  /** Optional top-rated band rendered immediately after the main CTA section. */
  topRatedTitle?: string;
  topRatedDescription?: string;
  topRatedSecondary?: string;
  /** Optional certified experts band rendered after the top-rated section. */
  certifiedTitle?: string;
  certifiedDescription?: string;
  certifiedSecondary?: string;
  overviewTitle: string;
  overviewDescription: string;
  overviewPoints: string[];
  detailsTitle: string;
  detailsDescription: string;
  detailPoints: { title: string; text: string }[];
  whyTitle: string;
  whyDescription: string;
  whySecondary?: string;
  whyReasons: {
    title: string;
    text: string;
    icon: "pin" | "wrench" | "users" | "shield" | "droplet" | "clock";
  }[];
  faqs: { question: string; answer: string }[];
  /** Optional Local coverage section copy (falls back to generated city text). */
  coverageTitle?: string;
  coverageDescription?: string;
  coverageSecondary?: string;
};

export function buildServiceInAreaContent(
  area: ServiceArea,
  service: Service,
): ServiceInAreaContent {
  const city = area.city;
  const label = area.label;
  const name = service.name;
  const lower = service.name.toLowerCase();

  return {
    heroTitle: `${name} in ${city}, TN`,
    heroDescription: `${service.summary} ${site.name} provides professional ${lower} for homeowners and businesses throughout ${label}.`,
    highlights: [
      {
        title: `Local ${city} coverage`,
        text: `Professional ${lower} arranged for customers throughout ${label}.`,
      },
      {
        title: "Dependable results",
        text: "Clear communication and quality workmanship focused on the job you requested.",
      },
      {
        title: "Convenient hours",
        text: `Open ${site.hours.days}, ${site.hours.time}.`,
      },
    ],
    aboutTitle: `${name} for ${city} homes and businesses`,
    aboutDescription: `${service.description} Customers in ${city} can request this service online and describe the plumbing work that needs attention.`,
    aboutSecondary: `Open ${site.hours.days}, ${site.hours.time}. ${site.name} serves ${label} with a straightforward way to request ${lower}.`,
    servicesTitle: `Plumbing services related to ${name}`,
    servicesDescription: `While this page focuses on ${lower} in ${city}, ${site.name} also provides a full range of professional plumbing services across ${site.locationFull}.`,
    ctaTitle: `Request ${name.toLowerCase()} in ${city}`,
    ctaDescription: `Contact ${site.name} to schedule ${lower} in ${label}. Share your details and the work you need — we follow up from there.`,
    overviewTitle: `${name} overview in ${city}`,
    overviewDescription: `From the first request through completion, ${site.name} keeps ${lower} clear and local for customers in ${city}, Tennessee.`,
    overviewPoints: [
      `Professional ${lower} for ${city} customers`,
      "Residential and commercial support",
      "Published hours and straightforward follow-up",
      ...service.details.slice(0, 2),
    ],
    detailsTitle: `${name} details for ${city}`,
    detailsDescription: `What to expect when you request ${lower} from ${site.name} in ${label}.`,
    detailPoints: service.details.map((text, index) => ({
      title:
        [
          `${city} service focus`,
          "How the work helps",
          "Property types served",
          "Scheduling window",
        ][index] ?? `Detail ${index + 1}`,
      text:
        index === 0
          ? `${text} Available for customers requesting service in ${city}.`
          : text,
    })),
    whyTitle: `Why choose Swift Flo for ${lower} in ${city}`,
    whyDescription: `Local coverage, professional plumbing service, and a clear request process for ${name.toLowerCase()} throughout ${label}.`,
    whyReasons: [
      {
        title: `${city} availability`,
        text: `${name} is available for customers throughout ${label}.`,
        icon: "pin",
      },
      {
        title: "Skilled technicians",
        text: service.summary,
        icon: "wrench",
      },
      {
        title: "Clear communication",
        text: "Straightforward updates from inquiry through completion.",
        icon: "users",
      },
      {
        title: "Reliable workmanship",
        text: "Professional plumbing work focused on lasting results.",
        icon: "shield",
      },
      {
        title: "Customer-first care",
        text: "Your request starts with your contact details and a clear description of the job.",
        icon: "droplet",
      },
      {
        title: "Convenient hours",
        text: `Open ${site.hours.days}, ${site.hours.time}.`,
        icon: "clock",
      },
    ],
    faqs: [
      {
        question: `Do you provide ${lower} in ${city}?`,
        answer: `Yes. ${site.name} provides ${lower} for customers in ${label}. Request a visit during published business hours.`,
      },
      {
        question: `What does ${lower} include in ${city}?`,
        answer: service.description,
      },
      {
        question: `How do I schedule ${lower} in ${city}?`,
        answer: `Submit the contact form with your name, phone or email, confirm you need service in ${city}, and describe the work. Our team follows up from there.`,
      },
      {
        question: "What are your hours?",
        answer: `Open ${site.hours.days}, ${site.hours.time}.`,
      },
      {
        question: `Is ${lower} available for commercial properties in ${city}?`,
        answer: `Yes. Residential and commercial customers in ${city} can request ${lower}.`,
      },
      {
        question: "Can I get a free quote?",
        answer: `Yes. Contact ${site.name} to discuss your ${lower} needs in ${city} and request a free quote.`,
      },
      {
        question: `How soon can you come to ${city}?`,
        answer: `Scheduling depends on availability within published hours. Share your preferred timing when you request ${lower} in ${city}.`,
      },
      {
        question: `Are other plumbing services available in ${city}?`,
        answer: `Yes. In addition to ${lower}, ${site.name} provides a full range of professional plumbing services for customers in ${label}.`,
      },
      {
        question: "Do you publish a street address?",
        answer: `A street address has not been published. Service is arranged for customers in ${city}, and the city map is shown for reference.`,
      },
      {
        question: `Why choose Swift Flo for ${lower} in ${city}?`,
        answer: `${site.name} combines local ${city} coverage, professional ${lower}, and clear communication for a straightforward experience from request through completion.`,
      },
      {
        question: "What should I include in my request?",
        answer: `Include your name, a way to reach you, confirm the service location in ${city}, and describe the ${lower} issue or project in as much detail as you can.`,
      },
    ],
  };
}
