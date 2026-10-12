import { formatServiceAreaList, serviceAreas } from "@/data/service-areas";
import { services, type Service } from "@/data/services";
import { site } from "@/data/site";

export type ServiceAreaByServiceContent = {
  hero: { title: string; description: string };
  highlights: { title: string; text: string; icon: "pin" | "shield" | "clock" | "wrench" | "droplet" | "users" }[];
  about: { title: string; description: string; secondary: string };
  servicesSection: { title: string; description: string };
  cta: { title: string; description: string };
  overview: { title: string; description: string; points: string[] };
  details: { title: string; description: string; points: { title: string; text: string }[] };
  whyChoose: {
    title: string;
    description: string;
    reasons: {
      title: string;
      text: string;
      icon: "pin" | "wrench" | "users" | "shield" | "droplet" | "clock";
    }[];
  };
  faqs: { question: string; answer: string }[];
};

const areaCount = serviceAreas.length;
const areaSample = formatServiceAreaList(5);

function buildFaqs(service: Service): { question: string; answer: string }[] {
  return [
    {
      question: `Where is ${service.name.toLowerCase()} available?`,
      answer: `${site.name} provides ${service.name.toLowerCase()} across ${areaCount} confirmed communities in ${site.locationFull}, including ${areaSample}.`,
    },
    {
      question: `Do you offer ${service.name.toLowerCase()} in Smyrna, TN?`,
      answer: `Yes. Customers in Smyrna and nearby Middle Tennessee communities can request ${service.name.toLowerCase()} during published business hours.`,
    },
    {
      question: `What does ${service.name.toLowerCase()} typically include?`,
      answer: `${service.description} When you request service, share details about the property and the issue so we can follow up accurately.`,
    },
    {
      question: "What are your business hours?",
      answer: `We are open ${site.hours.days}, ${site.hours.time}. Visits for ${service.name.toLowerCase()} are arranged within these hours.`,
    },
    {
      question: `How do I request ${service.name.toLowerCase()}?`,
      answer: `Use the contact form or call ${site.name}. Include your name, phone or email, city, and a clear description of the ${service.name.toLowerCase()} work you need.`,
    },
    {
      question: "Do you serve both homes and businesses?",
      answer: `Yes. ${service.name} is available for residential and commercial customers throughout our Middle Tennessee service areas.`,
    },
    {
      question: "Can I get a free quote?",
      answer: `Yes. Contact us to discuss your ${service.name.toLowerCase()} needs and request a free quote. Pricing depends on the work required and is confirmed once we understand the job.`,
    },
    {
      question: "How quickly can you schedule a visit?",
      answer: `Scheduling depends on availability within our published hours (${site.hours.days}, ${site.hours.time}). Share your preferred timing when you submit a request.`,
    },
    {
      question: `Is ${service.name.toLowerCase()} available near Nashville?`,
      answer: `Yes. ${site.name} serves Nashville and surrounding communities. If your city appears on our service areas list, you can request ${service.name.toLowerCase()} there.`,
    },
    {
      question: "Are your technicians licensed and insured?",
      answer: `Swift Flo Plumbing Services focuses on professional workmanship and clear communication. Every visit is handled as professional plumbing service focused on the job you requested.`,
    },
    {
      question: `Why choose Swift Flo for ${service.name.toLowerCase()}?`,
      answer: `${site.name} combines local Middle Tennessee coverage, dependable ${service.name.toLowerCase()}, and a straightforward request process so customers know what to expect from inquiry through completion.`,
    },
  ];
}

export function buildServiceAreaByServiceContent(
  service: Service,
): ServiceAreaByServiceContent {
  return {
    hero: {
      title: `${service.name} across ${site.region}`,
      description: `${service.summary} Available for customers throughout ${site.locationFull}, including ${areaSample}.`,
    },
    highlights: [
      {
        title: "Wide local coverage",
        text: `${service.name} is available in ${areaCount} confirmed Middle Tennessee communities.`,
        icon: "pin",
      },
      {
        title: "Professional workmanship",
        text: "Clear communication, careful work, and dependable results on every visit.",
        icon: "shield",
      },
      {
        title: "Convenient scheduling",
        text: `Request service ${site.hours.days}, ${site.hours.time}.`,
        icon: "clock",
      },
    ],
    about: {
      title: `About ${service.name.toLowerCase()} in Middle Tennessee`,
      description: service.description,
      secondary: `${site.name} provides ${service.name.toLowerCase()} for homeowners and businesses across our published service areas. Tell us your city and describe the work you need when you request a visit.`,
    },
    servicesSection: {
      title: `${service.name} where you need it`,
      description: `Browse the communities where ${service.name.toLowerCase()} is available, or explore related plumbing services from ${site.name}.`,
    },
    cta: {
      title: `Need ${service.name.toLowerCase()} near you?`,
      description: `Contact ${site.name} to request ${service.name.toLowerCase()} in your Middle Tennessee community. Open ${site.hours.days}, ${site.hours.time}.`,
    },
    overview: {
      title: `${service.name} overview`,
      description: `From first contact through completion, ${site.name} keeps ${service.name.toLowerCase()} straightforward for customers across ${site.locationFull}.`,
      points: [
        `Professional ${service.name.toLowerCase()} for homes and businesses`,
        "Coverage across confirmed Middle Tennessee cities",
        "Clear requests and published business hours",
        ...service.details.slice(0, 2),
      ],
    },
    details: {
      title: `${service.name} details`,
      description: `What customers can expect when requesting ${service.name.toLowerCase()} from ${site.name}.`,
      points: service.details.map((text, index) => ({
        title: ["What we handle", "How we help", "Who we serve", "When to reach us"][
          index
        ] ?? `Detail ${index + 1}`,
        text,
      })),
    },
    whyChoose: {
      title: `Why choose Swift Flo for ${service.name.toLowerCase()}`,
      description: `Local coverage, professional plumbing service, and a clear way to request ${service.name.toLowerCase()} throughout ${site.region}.`,
      reasons: [
        {
          title: "Local Middle Tennessee coverage",
          text: `Serving ${areaCount} communities with dependable ${service.name.toLowerCase()}.`,
          icon: "pin",
        },
        {
          title: "Focused expertise",
          text: service.summary,
          icon: "wrench",
        },
        {
          title: "Clear communication",
          text: "Straightforward updates from the initial inquiry through scheduling and completion.",
          icon: "users",
        },
        {
          title: "Reliable process",
          text: "A professional approach designed around the job you described.",
          icon: "shield",
        },
        {
          title: "Customer-first service",
          text: "Your request starts with your name, a way to reach you, and a clear description of the work.",
          icon: "droplet",
        },
        {
          title: "Convenient hours",
          text: `Open ${site.hours.days}, ${site.hours.time}.`,
          icon: "clock",
        },
      ],
    },
    faqs: buildFaqs(service),
  };
}

export function getServiceAreaServiceParams() {
  return services.map((service) => ({ slug: service.slug }));
}
