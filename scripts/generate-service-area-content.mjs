/**
 * Generates dedicated TypeScript content files for every service-area route.
 * Run: node scripts/generate-service-area-content.mjs
 *
 * City × service + hub content lives under each service folder:
 *   src/data/services/{serviceSlug}/areas/{citySlug}.ts
 *   src/data/services/{serviceSlug}/hub.ts
 *
 * City overview pages remain under:
 *   src/data/service-area-pages/cities/{citySlug}.ts
 *
 * Also rewrites src/data/service-area-pages/coverage.ts from service-area-config.mjs.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  BRAND,
  HOURS,
  PHONE,
  cities,
  coverageByServiceSlug,
  getCitiesForService,
  listCoveredCombos,
  services,
} from "./service-area-config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = path.join(root, "src", "data", "service-area-pages");
const servicesDataRoot = path.join(root, "src", "data", "services");

/** City-index angles that stay unique even after city-name stripping. */
const cityUniqueHooks = [
  "Older subdivision plumbing and busy weekday schedules shape how visits are planned.",
  "Growth corridors and mixed residential-commercial streets influence common request types.",
  "Lakeside and corridor properties often bring drainage and fixture wear into the same week.",
  "Commuter households usually need clear windows within published daytime hours.",
  "Campus-adjacent rentals and owner-occupied homes both show up in local request volume.",
  "Newer builds and aging service lines can appear on the same week’s schedule.",
  "Neighborhood HOA timing and driveway access sometimes affect how work is staged.",
  "Light industrial edges and residential cores create a wide range of plumbing scopes.",
  "Downtown-adjacent and suburban properties need the same clear request process.",
  "Family homes and small offices alike benefit from straightforward scheduling follow-up.",
  "Seasonal usage swings show up in hot-water and drainage requests throughout the year.",
  "Rural-edge and in-town addresses share the same confirmed coverage and hours.",
];

/** Per-service narrative hooks (keyed by service slug). */
const serviceUniqueHooks = {
  "drain-cleaning": {
    aboutLead:
      "Slow sinks, recurring shower backups, and main-line symptoms are handled with a clear diagnostic-to-clearing path.",
    overviewLead:
      "Drain work starts with the fixtures you name and expands only as far as the backup requires.",
    detailFocus:
      "Clearing accessible fixture drains before escalating to deeper line work when symptoms point that way.",
  },
  "camera-inspections": {
    aboutLead:
      "Video inspection clarifies whether a blockage, offset, root intrusion, or pipe damage is driving the symptoms.",
    overviewLead:
      "Camera work is used to locate the issue so repair recommendations stay grounded in what the line shows.",
    detailFocus:
      "Recording and reviewing underground conditions before recommending excavation or repair scopes.",
  },
  "water-filtration-system-installation": {
    aboutLead:
      "Filtration installs are matched to household water goals, available space, and the existing supply layout.",
    overviewLead:
      "Installation covers professional plumbing connections so filtered water reaches the points you care about most.",
    detailFocus:
      "Sizing and connecting filtration equipment without disrupting the rest of the home’s plumbing.",
  },
  "water-heater-repairs-replacement": {
    aboutLead:
      "No-hot-water calls, leaks, and aging tanks are diagnosed before recommending repair or replacement.",
    overviewLead:
      "Water heater visits focus on restoring reliable hot water with a clear recommendation for the unit on site.",
    detailFocus:
      "Repairing recoverable failures when practical and replacing units that no longer serve the property well.",
  },
  "bathroom-remodeling": {
    aboutLead:
      "Remodel plumbing covers fixture layout updates, rough-in support, and finished connections for a working bathroom.",
    overviewLead:
      "Bathroom projects stay coordinated around the plumbing scope you describe—vanities, showers, toilets, and related lines.",
    detailFocus:
      "Installing and connecting fixtures so the finished bathroom performs cleanly day to day.",
  },
  "water-sewer-excavation-repairs-replacements": {
    aboutLead:
      "Underground water and sewer failures are scoped carefully before excavation and line replacement begin.",
    overviewLead:
      "Excavation repairs address leaks, breaks, and aging service lines that cannot be resolved from inside the building alone.",
    detailFocus:
      "Repairing or replacing damaged underground lines with clear communication about access and restoration expectations.",
  },
};

const cityAngles = [
  "homes and local businesses that need clear scheduling and professional follow-up",
  "residential and commercial customers looking for dependable plumbing support",
  "property owners who want a straightforward way to request plumbing service",
  "households and workplaces that need plumbing work handled during published hours",
  "customers who prefer clear communication from the first request through completion",
  "homes and businesses that need professional plumbing without guesswork about coverage",
  "property managers and homeowners coordinating planned or urgent plumbing work",
  "customers across the community who need service arranged within published hours",
  "residential and commercial sites that need plumbing handled with clean workmanship",
  "local customers who want a direct request process and confirmed area coverage",
  "homes and businesses that need reliable plumbing support throughout the week",
  "customers who want professional plumbing arranged with clear next steps",
];

const cityNeedLines = [
  "slow drains, fixture leaks, hot-water trouble, or planned plumbing updates",
  "clogged fixtures, water heater concerns, remodel plumbing, or line repairs",
  "drain backups, inspection needs, filtration installs, or bathroom fixture work",
  "everyday plumbing repairs and larger projects that need professional attention",
  "fixture issues, drainage problems, and underground line concerns",
  "hot-water failures, drain clogs, remodel plumbing, and filtration upgrades",
  "residential repairs and commercial plumbing requests that need clear follow-up",
  "planned installs as well as repairs that cannot wait until a more convenient week",
  "drain, water heater, bathroom, filtration, and underground plumbing needs",
  "service calls that require confirmed coverage and a simple request process",
  "plumbing repairs and installations scheduled around a typical work week",
  "both routine maintenance concerns and more involved plumbing projects",
];

function pick(arr, i) {
  return arr[i % arr.length];
}

function cityFaqSet(city, index) {
  const name = city.city;
  const coveredServices = services.filter((service) =>
    (coverageByServiceSlug[service.slug] ?? []).includes(city.slug),
  );
  const serviceNames = coveredServices.map((s) => s.lower).join(", ");
  const baseFaqs = [
    {
      q: `Do you provide plumbing services in ${name}?`,
      a: `Yes. ${BRAND} provides professional plumbing services for customers in ${city.label}, including ${city.community}. Request a visit during published hours (${HOURS}).`,
    },
    {
      q: `Which plumbing services are available in ${name}?`,
      a: `Customers in ${name} can request ${serviceNames}.`,
    },
    {
      q: `How do I request a plumber in ${name}?`,
      a: `Use the contact form or call ${PHONE}. Include your name, phone or email, confirm the service location in ${name}, and describe the plumbing work you need.`,
    },
    {
      q: `What are your business hours for ${name} service?`,
      a: `We are open ${HOURS}. Visits for ${name} customers are arranged within these published hours.`,
    },
    {
      q: `Do you serve both homes and businesses in ${name}?`,
      a: `Yes. Residential and commercial customers in ${name} can request professional plumbing service across ${city.community}.`,
    },
    {
      q: `Can I get a free quote for plumbing work in ${name}?`,
      a: `Yes. Contact ${BRAND} to discuss your ${name} plumbing needs and request a free quote. Pricing depends on the work required.`,
    },
    {
      q: `How soon can you schedule a visit in ${name}?`,
      a: `Scheduling depends on availability within published hours. Share your preferred timing when you request service in ${name}.`,
    },
    {
      q: `Is a street address published for ${name} service?`,
      a: `A street address has not been published. Service is arranged for customers in ${name}, and the city map on this page is shown for reference.`,
    },
    {
      q: `What should I include in my ${name} service request?`,
      a: `Include your name, a way to reach you, confirm ${name} as the service city, and describe the issue or project in as much detail as you can.`,
    },
    {
      q: `Why choose ${BRAND} in ${name}?`,
      a: `${name} is a confirmed service area covering ${city.community}. Customers get professional plumbing work, clear communication, and a straightforward request process.`,
    },
    {
      q: `Do you handle drain cleaning in ${name}?`,
      a: coveredServices.some((s) => s.slug === "drain-cleaning")
        ? `Yes. Drain cleaning is available for ${name} customers along with the rest of our confirmed plumbing services for this city.`
        : `Contact ${BRAND} to confirm which plumbing services are currently offered in ${name}.`,
    },
    {
      q: `Can ${name} customers request water heater service?`,
      a: coveredServices.some((s) => s.slug === "water-heater-repairs-replacement")
        ? `Yes. Water heater repairs and replacement are available for customers throughout ${city.label}.`
        : `Contact ${BRAND} to confirm water heater availability in ${name}.`,
    },
  ];
  const rotated = [
    ...baseFaqs.slice(index % baseFaqs.length),
    ...baseFaqs.slice(0, index % baseFaqs.length),
  ];
  return rotated.slice(0, 12);
}

function serviceFaqs(service, city, cityIndex, serviceIndex) {
  const { city: name, label, community } = city;
  const s = service;
  const extras = [
    {
      q: `What signs suggest I need ${s.lower} in ${name}?`,
      a: `Common reasons include ${s.focus}. If you are seeing related symptoms at a ${name} property near ${community}, describe them when you request service so we can prepare for the visit.`,
    },
    {
      q: `Is ${s.lower} available for commercial properties in ${name}?`,
      a: `Yes. Homes and businesses across ${community} can request ${s.lower} during published business hours.`,
    },
    {
      q: `How do ${name} customers prepare for ${s.lower}?`,
      a: `Note which fixtures or areas are affected, when the issue started, and any recent plumbing work. Share those details with your ${name} service request.`,
    },
    {
      q: `Does pricing for ${s.lower} in ${name} appear online?`,
      a: `Pricing is not listed as a flat rate because every job differs. Contact ${BRAND} for a free quote based on the ${name} work you describe.`,
    },
    {
      q: `Can I request ${s.lower} and another plumbing service in ${name}?`,
      a: `Yes. Mention every plumbing concern in your request so ${name} follow-up can account for the full scope.`,
    },
    {
      q: `What happens after I request ${s.lower} in ${name}?`,
      a: `Our team reviews your contact details and description, then follows up to confirm next steps for service in ${label}.`,
    },
  ];
  const core = [
    {
      q: `Do you provide ${s.lower} in ${name}?`,
      a: `Yes. ${BRAND} provides ${s.lower} for customers in ${label}, including ${community}. Request a visit during published hours (${HOURS}).`,
    },
    {
      q: `What does ${s.lower} include for ${name} customers?`,
      a: `${s.summary} Typical work involves ${s.work}. Share your ${name} property details when you contact us.`,
    },
    {
      q: `How do I schedule ${s.lower} in ${name}?`,
      a: `Submit the contact form or call ${PHONE}. Confirm ${name} as the service city and describe the ${s.lower} work you need.`,
    },
    {
      q: `What are your hours for ${s.lower} in ${name}?`,
      a: `Open ${HOURS}. ${name} visits for ${s.lower} are arranged within these published hours.`,
    },
    {
      q: `Can I get a free quote for ${s.lower} in ${name}?`,
      a: `Yes. Contact ${BRAND} to discuss ${s.lower} needs in ${name} and request a free quote.`,
    },
    {
      q: `How soon can you come to ${name} for ${s.lower}?`,
      a: `Scheduling depends on availability within published hours. Share preferred timing with your ${name} request.`,
    },
    {
      q: `Are related plumbing services available in ${name}?`,
      a: `Yes. In addition to ${s.lower}, ${BRAND} provides other confirmed plumbing services for customers in ${label}.`,
    },
    {
      q: `Why choose Swift Flo for ${s.lower} in ${name}?`,
      a: `${name} is part of our confirmed coverage spanning ${community}. Customers receive professional ${s.lower}, clear communication, and a straightforward request process.`,
    },
  ];
  const all = [...core, ...extras];
  const start = (cityIndex * 3 + serviceIndex * 2) % all.length;
  return [...all.slice(start), ...all.slice(0, start)].slice(0, 12);
}

function cityImage(city, kind) {
  const map = {
    Brentwood: "brentwood",
    Franklin: "franklin",
    Gallatin: "gallatin",
    Hendersonville: "hendersonville",
    "La Vergne": "la-vergne",
    Lebanon: "lebanon",
    "Mt. Juliet": "mt-juliet",
    Murfreesboro: "murfreesboro",
    Nashville: "nashville",
    Smyrna: "smyrna",
    "Spring Hill": "spring-hill",
    "Thompson's Station": "thompsons-station",
  };
  const key = map[city.city];
  return {
    hero: `/images/hero-${key}.jpg`,
    about: `/images/about-${key}.jpg`,
    overview: `/images/overview-${key}.jpg`,
    cta: `/images/cta-${key}.jpg`,
  }[kind];
}

function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents, "utf8");
}

function generateCityPage(city, index) {
  const angle = pick(cityAngles, index);
  const needs = pick(cityNeedLines, index);
  const faqs = cityFaqSet(city, index);
  const whyLocal = [
    {
      title: `Serving ${city.city}`,
      text: `${city.city} is a confirmed service area for ${BRAND}, covering ${city.community}.`,
    },
    {
      title: pick(
        ["Straightforward requests", "Easy service requests", "Clear request process"],
        index,
      ),
      text: `Customers in ${city.city} can submit a plumbing request through the contact form or by phone, with confirmed coverage for ${city.label}.`,
    },
    {
      title: pick(["Open seven days", "Weeklong availability", "Convenient hours"], index),
      text: `Service visits are arranged within published hours: ${HOURS}.`,
    },
  ];
  const points = [
    {
      title: "Confirmed coverage",
      text: `Professional plumbing service is available throughout ${city.community}.`,
    },
    {
      title: pick(["Professional process", "Quality-focused visits", "Careful workmanship"], index),
      text: "Every request is handled with attention to the plumbing needs you describe and clean, professional work.",
    },
    {
      title: pick(["Clear communication", "Direct updates", "Simple follow-up"], index),
      text: "Updates from inquiry through scheduling and completion keep the process easy to follow.",
    },
    {
      title: "Published hours",
      text: `Visits for ${city.city} customers are arranged ${HOURS}.`,
    },
    {
      title: pick(["Residential and commercial", "Homes and businesses", "Property support"], index),
      text: `Both residential and commercial customers in ${city.city} can request service.`,
    },
    {
      title: pick(["Local availability", "Community coverage", "Area confirmation"], index),
      text: `${city.city} appears on our confirmed service area list, so customers know coverage applies before they request a visit.`,
    },
  ];
  const reasons = [
    {
      title: "Local coverage",
      text: `${city.city} is included in our confirmed Middle Tennessee service areas, including ${city.community}.`,
      icon: "pin",
    },
    {
      title: "Professional plumbing",
      text: "Work focuses on the repair, installation, or project you request.",
      icon: "wrench",
    },
    {
      title: "Clear communication",
      text: "Straightforward updates from the first inquiry through completion.",
      icon: "users",
    },
    {
      title: "Dependable process",
      text: "A consistent approach designed to make plumbing service easier to arrange.",
      icon: "shield",
    },
    {
      title: "Customer-first requests",
      text: "Your request starts with contact details and a clear description of the job.",
      icon: "droplet",
    },
    {
      title: "Convenient hours",
      text: `Open ${HOURS}.`,
      icon: "clock",
    },
  ];

  return `import type { CityPageContent } from "@/data/service-area-pages/types";

/** Dedicated content for /service-areas/${city.slug} */
const content: CityPageContent = {
  metaTitle: "Plumbing Services in ${city.city}, TN | ${BRAND}",
  metaDescription: "${BRAND} provides professional plumbing for homes and businesses in ${city.label}. Serving ${city.community}. Request service ${HOURS}. Call ${PHONE}.",
  heroTitle: "Professional plumbing services in ${city.city}.",
  introduction: "${BRAND} provides reliable plumbing services for ${angle} across ${city.community}. Request help with ${needs} through the contact form or by calling ${PHONE}.",
  summary: "Professional plumbing service for homeowners and businesses in ${city.label}.",
  whyLocal: ${JSON.stringify(whyLocal, null, 2)},
  about: {
    title: "Professional plumbing for ${city.city} homes and businesses.",
    description: "${BRAND} serves ${city.city} with dependable plumbing focused on clear communication and quality workmanship. Whether you need a repair, fixture work, or a planned plumbing project, customers throughout ${city.community} can request service during published hours.",
  },
  services: {
    title: "Plumbing services available in ${city.city}",
    description: "From drain cleaning and camera inspections to water heater service, bathroom remodeling plumbing, water filtration installation, and water and sewer excavation repairs, ${BRAND} supports ${city.city} customers across confirmed plumbing needs.",
  },
  overview: {
    title: "How plumbing service works in ${city.city}",
    description: "From the first request through completion, ${city.city} customers across ${city.community} receive clear next steps, professional workmanship, and scheduling within published hours.",
  },
  details: {
    title: "What ${city.city} customers can expect",
    description: "Local coverage details and service expectations for plumbing requests in ${city.label}.",
    points: ${JSON.stringify(points, null, 2)},
  },
  whyChooseUs: {
    title: "Why ${city.city} customers choose Swift Flo",
    description: "Confirmed local coverage, professional plumbing service, and a straightforward request process for ${city.label}.",
    reasons: ${JSON.stringify(reasons, null, 2)},
  },
  cta: {
    title: "Need a plumber in ${city.city}?",
    description: "Contact ${BRAND} to discuss plumbing needs in ${city.label}. Call ${PHONE} or use the contact form to request a visit during published hours.",
  },
  faqs: ${JSON.stringify(
    faqs.map((f) => ({ question: f.q, answer: f.a })),
    null,
    2,
  )},
  serviceNotes: [
    "Plumbing services are available for customers in ${city.city}, Tennessee.",
    "Service requests are submitted through the online contact form or by phone at ${PHONE}.",
    "Visits are scheduled within published business hours: ${HOURS}.",
    "A street address has not been published. The map shows the city of ${city.city}.",
  ],
};

export default content;
`;
}

function generateHubPage(service, serviceIndex) {
  const covered = getCitiesForService(service.slug);
  const cityList = covered.map((c) => c.city).join(", ");
  const sample = covered
    .slice(serviceIndex % Math.max(covered.length, 1), (serviceIndex % Math.max(covered.length, 1)) + 5)
    .map((c) => c.city);
  const sampleText =
    sample.length > 0
      ? sample.join(", ")
      : "our confirmed Middle Tennessee communities";

  const faqs = [
    {
      question: `Where is ${service.lower} available?`,
      answer: `${BRAND} provides ${service.lower} across ${covered.length} confirmed communities in Nashville and Middle Tennessee, including ${sampleText}.`,
    },
    {
      question: `How do I find ${service.lower} near me?`,
      answer: `Select your city from the list on this page or use the service area finder. Each city link opens the dedicated ${service.lower} page for that location.`,
    },
    {
      question: `What does ${service.lower} typically include?`,
      answer: `${service.summary} Typical work involves ${service.work}.`,
    },
    {
      question: "What are your business hours?",
      answer: `We are open ${HOURS}. Visits for ${service.lower} are arranged within these hours.`,
    },
    {
      question: `How do I request ${service.lower}?`,
      answer: `Use the contact form or call ${PHONE}. Include your name, phone or email, city, and a clear description of the ${service.lower} work you need.`,
    },
    {
      question: "Do you serve both homes and businesses?",
      answer: `Yes. ${service.name} is available for residential and commercial customers throughout our Middle Tennessee service areas.`,
    },
    {
      question: "Can I get a free quote?",
      answer: `Yes. Contact us to discuss your ${service.lower} needs and request a free quote. Pricing depends on the work required.`,
    },
    {
      question: "How quickly can you schedule a visit?",
      answer: `Scheduling depends on availability within published hours (${HOURS}). Share your preferred timing when you submit a request.`,
    },
    {
      question: `Is ${service.lower} available in Nashville?`,
      answer: covered.some((c) => c.slug === "nashville-tn")
        ? `Yes. Nashville is a confirmed service area. Open the Nashville city page for ${service.lower} or request service directly.`
        : `Check the city list on this page to see where ${service.lower} is currently offered.`,
    },
    {
      question: `Which cities are listed for ${service.lower}?`,
      answer:
        cityList.length > 0
          ? `${service.name} pages are available for ${cityList}.`
          : `${service.name} coverage cities are listed on this page as they are confirmed.`,
    },
    {
      question: "Why choose Swift Flo for this service?",
      answer: `${BRAND} combines confirmed Middle Tennessee coverage, professional ${service.lower}, and a straightforward request process.`,
    },
    {
      question: "What should I include in my request?",
      answer: `Include your name, a way to reach you, your city, and details about the ${service.focus} you need addressed.`,
    },
  ];

  const highlightSets = [
    [
      {
        title: "Confirmed city pages",
        text: `Open a dedicated ${service.lower} page for each supported Middle Tennessee city.`,
        icon: "pin",
      },
      { title: "Professional focus", text: service.summary, icon: "wrench" },
      {
        title: "Published hours",
        text: `Request ${service.lower} during ${HOURS}.`,
        icon: "clock",
      },
    ],
    [
      {
        title: "Local coverage map",
        text: `Choose from ${covered.length} confirmed cities where ${service.lower} is offered.`,
        icon: "pin",
      },
      {
        title: "Clear diagnostics-to-repair path",
        text: `Describe ${service.focus} so follow-up stays accurate.`,
        icon: "shield",
      },
      {
        title: "Direct contact options",
        text: `Call ${PHONE} or use the contact form to request service.`,
        icon: "users",
      },
    ],
  ];

  return `import type { ServiceHubPageContent } from "@/data/service-area-pages/types";

/** Dedicated content for /service-areas/for/${service.slug} */
const content: ServiceHubPageContent = {
  metaTitle: "${service.name} Service Areas in Middle Tennessee | ${BRAND}",
  metaDescription: "${service.summary} Available from ${BRAND} throughout Nashville and Middle Tennessee. Call ${PHONE}.",
  hero: {
    title: "${service.name} across Middle Tennessee",
    description: "${service.summary} Browse confirmed cities below to open the ${service.lower} page for your community, or request service directly.",
  },
  highlights: ${JSON.stringify(pick(highlightSets, serviceIndex), null, 2)},
  about: {
    title: "About ${service.lower} from Swift Flo",
    description: "${service.summary} Customers throughout our confirmed service areas can request help with ${service.work}.",
    secondary: "Open ${HOURS}. Share your city and a clear description of the work so follow-up stays accurate.",
  },
  servicesSection: {
    title: "Related plumbing services",
    description: "While this hub focuses on ${service.lower}, ${BRAND} also provides additional confirmed plumbing services across Middle Tennessee.",
  },
  cta: {
    title: "Request ${service.lower}",
    description: "Contact ${BRAND} at ${PHONE} or use the contact form. Include your city and details about ${service.focus}.",
  },
  overview: {
    title: "${service.name} coverage overview",
    description: "Every city listed on this page has a dedicated ${service.lower} route with location-specific content.",
    points: [
      "Dedicated city pages for ${service.lower}",
      "Residential and commercial requests",
      "Published hours: ${HOURS}",
      ...${JSON.stringify(service.details.slice(0, 2))},
    ],
  },
  details: {
    title: "What ${service.lower} can address",
    description: "Common reasons customers request ${service.lower} and how requests are handled.",
    points: ${JSON.stringify(
      service.details.map((text, i) => ({
        title:
          ["Service focus", "How the work helps", "Property types", "Scheduling"][i] ||
          `Detail ${i + 1}`,
        text,
      })),
      null,
      2,
    )},
  },
  whyChoose: {
    title: "Why choose Swift Flo for ${service.lower}",
    description: "Confirmed coverage across Middle Tennessee, professional plumbing work, and a clear request process.",
    reasons: [
      { title: "Multi-city coverage", text: "${service.name} is offered across confirmed Middle Tennessee communities.", icon: "pin" },
      { title: "Skilled technicians", text: ${JSON.stringify(service.summary)}, icon: "wrench" },
      { title: "Clear communication", text: "Straightforward updates from inquiry through completion.", icon: "users" },
      { title: "Reliable workmanship", text: "Professional plumbing work focused on lasting results.", icon: "shield" },
      { title: "Customer-first care", text: "Requests start with your contact details and a clear job description.", icon: "droplet" },
      { title: "Convenient hours", text: "Open ${HOURS}.", icon: "clock" },
    ],
  },
  faqs: ${JSON.stringify(faqs, null, 2)},
};

export default content;
`;
}

function generateCityServicePage(city, service, cityIndex, serviceIndex) {
  const faqs = serviceFaqs(service, city, cityIndex, serviceIndex);
  const hooks =
    serviceUniqueHooks[service.slug] ?? {
      aboutLead: service.summary,
      overviewLead: `From the first request through completion, ${service.lower} stays clear and local.`,
      detailFocus: service.work,
    };
  const cityHook = pick(cityUniqueHooks, cityIndex + serviceIndex * 3);
  const seed = cityIndex * 11 + serviceIndex * 17;

  const heroVariants = [
    `${service.name} in ${city.city}, TN`,
    `Professional ${service.lower} for ${city.city}`,
    `${city.city} ${service.name} from Swift Flo`,
    `${service.name} support across ${city.city}`,
  ];
  const heroDescVariants = [
    `${service.summary} ${BRAND} provides ${service.lower} for homeowners and businesses throughout ${city.community}. ${cityHook} Call ${PHONE} or request service online.`,
    `Need help with ${service.focus} in ${city.city}? ${BRAND} handles ${service.work} across ${city.community} during published hours (${HOURS}). ${cityHook}`,
    `${city.city} customers can request ${service.lower} with a clear description of the issue. ${hooks.aboutLead} ${BRAND} follows up with next steps for service in ${city.label}.`,
    `${hooks.overviewLead} Serving ${city.community}. Open ${HOURS}. Call ${PHONE}.`,
  ];
  const highlightSets = [
    [
      {
        title: `${city.city} coverage`,
        text: `Professional ${service.lower} arranged for customers throughout ${city.community}. ${cityHook}`,
      },
      {
        title: pick(
          ["Service-first process", "Scoped visits", "Issue-led planning"],
          seed,
        ),
        text: hooks.detailFocus,
      },
      { title: "Convenient hours", text: `Open ${HOURS}.` },
    ],
    [
      {
        title: "Local requests",
        text: `${city.city} is a confirmed service area for ${service.lower}.`,
      },
      {
        title: pick(["Focused service", "Targeted help", "Clear scope"], serviceIndex),
        text: `Work centers on ${service.focus} at your ${city.city} property. ${hooks.aboutLead}`,
      },
      {
        title: "Direct contact",
        text: `Call ${PHONE} or use the contact form to request a visit.`,
      },
    ],
    [
      {
        title: "Homes and businesses",
        text: `Residential and commercial ${service.lower} requests are accepted across ${city.community}.`,
      },
      {
        title: "Prepared visits",
        text: `${cityHook} Share symptoms and timing so ${city.city} follow-up stays accurate.`,
      },
      {
        title: pick(
          ["Related plumbing options", "Additional services nearby", "Full service menu"],
          seed + 1,
        ),
        text: `Additional plumbing services are available for ${city.city} customers when ${service.lower} is only part of the need.`,
      },
    ],
    [
      {
        title: `${service.name} locally`,
        text: `${hooks.overviewLead} Coverage includes ${city.community}.`,
      },
      {
        title: pick(["Clear next steps", "Simple follow-up", "Direct updates"], seed + 2),
        text: "You describe the job once; scheduling and visit prep stay aligned to that description.",
      },
      {
        title: "Published availability",
        text: `Requests are arranged ${HOURS} for ${city.city} customers.`,
      },
    ],
  ];
  const overviewPoints = [
    `Professional ${service.lower} for ${city.city} customers`,
    `Coverage across ${city.community}`,
    cityHook,
    `Published hours: ${HOURS}`,
    hooks.detailFocus,
    ...service.details.slice(0, 2),
  ];
  const detailTitles = [
    [
      `${city.city} service focus`,
      "How the work helps",
      "Property types served",
      "Scheduling window",
    ],
    ["What we address", "Why it matters", "Where we serve", "When you can request"],
    ["Local priority", "Practical outcome", "Coverage type", "Hours of service"],
    [
      `${service.name} scope`,
      "Property impact",
      `${city.city} coverage`,
      "Request timing",
    ],
  ];
  const whyReasons = [
    {
      title: `${city.city} availability`,
      text: `${service.name} is available for customers throughout ${city.community}. ${cityHook}`,
      icon: "pin",
    },
    {
      title: pick(
        ["Skilled technicians", "Trained plumbing team", "Experienced hands"],
        seed,
      ),
      text: `${service.summary} ${hooks.aboutLead}`,
      icon: "wrench",
    },
    {
      title: "Clear communication",
      text: `Straightforward updates from inquiry through completion for ${service.lower} in ${city.city}.`,
      icon: "users",
    },
    {
      title: "Reliable workmanship",
      text: `${hooks.detailFocus}`,
      icon: "shield",
    },
    {
      title: "Customer-first care",
      text: `Your ${city.city} request starts with contact details and a clear description of ${service.focus}.`,
      icon: "droplet",
    },
    { title: "Convenient hours", text: `Open ${HOURS}.`, icon: "clock" },
  ];

  const content = {
    metaTitle: `${service.name} in ${city.city}, TN | ${BRAND}`,
    metaDescription: `${service.summary} Serving ${city.label} — ${city.community}. ${cityHook} Request ${service.lower} ${HOURS}. Call ${PHONE}.`,
    heroTitle: pick(heroVariants, seed),
    heroDescription: pick(heroDescVariants, seed + 1),
    highlights: pick(highlightSets, seed),
    aboutTitle: `${service.name} for ${city.city} homes and businesses`,
    aboutDescription: `${hooks.aboutLead} Customers across ${city.community} can request ${service.lower} online or by phone and describe the plumbing work that needs attention. ${cityHook}`,
    aboutSecondary: `Open ${HOURS}. ${BRAND} serves ${city.label} with a straightforward way to request ${service.lower}. Call ${PHONE}.`,
    servicesTitle: `Plumbing services related to ${service.name}`,
    servicesDescription: `While this page focuses on ${service.lower} in ${city.city}, ${BRAND} also provides a full range of professional plumbing services across Nashville and Middle Tennessee.`,
    ctaTitle: `Request ${service.lower} in ${city.city}`,
    ctaDescription: `Contact ${BRAND} to schedule ${service.lower} in ${city.label}. Share details about ${service.focus} — we follow up from there.`,
    overviewTitle: `${service.name} overview in ${city.city}`,
    overviewDescription: `${hooks.overviewLead} ${BRAND} keeps ${service.lower} clear and local for customers across ${city.community}.`,
    overviewPoints,
    detailsTitle: `${service.name} details for ${city.city}`,
    detailsDescription: `What to expect when you request ${service.lower} from ${BRAND} in ${city.label}. Focus: ${hooks.detailFocus}`,
    detailPoints: service.details.map((text, i) => ({
      title: pick(detailTitles, seed)[i] || `Detail ${i + 1}`,
      text:
        i === 0
          ? `${text} Available for customers requesting service in ${city.city}. ${cityHook}`
          : i === 1
            ? `${text} ${hooks.detailFocus}`
            : text,
    })),
    whyTitle: `Why choose Swift Flo for ${service.lower} in ${city.city}`,
    whyDescription: `Local coverage across ${city.community}, professional ${service.lower}, and a clear request process. ${cityHook}`,
    whyReasons,
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    heroImage: {
      src: cityImage(city, "hero"),
      alt: `${service.imageAltBase} in ${city.city}, Tennessee`,
    },
    aboutImage: {
      src: cityImage(city, "about"),
      alt: `${service.name} workmanship for ${city.city} customers`,
    },
    overviewImage: {
      src: service.imageSrc,
      alt: `${service.imageAltBase} for ${city.city} service overview`,
    },
    ctaImage: {
      src: cityImage(city, "cta"),
      alt: `Request ${service.lower} in ${city.city}`,
    },
  };

  return `import type { CityServicePageContent } from "@/data/service-area-pages/types";

/** Dedicated content for /service-areas/${city.slug}/${service.slug}
 *  Edit path: src/data/services/${service.slug}/areas/${city.slug}.ts
 */
const content: CityServicePageContent = ${JSON.stringify(content, null, 2)};

export default content;
`;
}

function writeCoverageFile() {
  const entries = services
    .map((service) => {
      const slugs = coverageByServiceSlug[service.slug] ?? [];
      const list = slugs.map((slug) => `    "${slug}",`).join("\n");
      return `  "${service.slug}": [\n${list}\n  ],`;
    })
    .join("\n");

  writeFile(
    path.join(base, "coverage.ts"),
    `import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";

/**
 * Explicit coverage matrix: which services are offered in which cities.
 *
 * Each service lists the city slugs where it is available. The finder and
 * dedicated route pages only expose combinations listed here.
 *
 * Source of truth for generation scripts: scripts/service-area-config.mjs
 * To limit a service later, edit that config (or this file) and regenerate.
 */
export const serviceCoverageByServiceSlug: Record<string, readonly string[]> = {
${entries}
};

// Guard: every catalog service must have an explicit coverage entry.
for (const service of services) {
  if (!(service.slug in serviceCoverageByServiceSlug)) {
    throw new Error(
      \`Missing coverage entry for service "\${service.slug}" in coverage.ts\`,
    );
  }
}

// Guard: every listed city slug must exist in serviceAreas.
const knownAreaSlugs = new Set(serviceAreas.map((area) => area.slug));
for (const [serviceSlug, areaSlugs] of Object.entries(serviceCoverageByServiceSlug)) {
  for (const areaSlug of areaSlugs) {
    if (!knownAreaSlugs.has(areaSlug)) {
      throw new Error(
        \`Unknown area slug "\${areaSlug}" listed under service "\${serviceSlug}"\`,
      );
    }
  }
}

export function getAreaSlugsForService(serviceSlug: string): string[] {
  return [...(serviceCoverageByServiceSlug[serviceSlug] ?? [])];
}

export function isServiceOfferedInArea(areaSlug: string, serviceSlug: string) {
  return getAreaSlugsForService(serviceSlug).includes(areaSlug);
}

export function getServiceSlugsForArea(areaSlug: string): string[] {
  return services
    .filter((service) => isServiceOfferedInArea(areaSlug, service.slug))
    .map((service) => service.slug);
}
`,
  );
}

// --- Generate files ---
const cityImports = [];
const hubImports = [];
const serviceImports = [];
const serviceEntries = [];

/** @param {string} slug */
function toCamelIdent(slug) {
  return slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

writeCoverageFile();

for (const [ci, city] of cities.entries()) {
  const file = path.join(base, "cities", `${city.slug}.ts`);
  writeFile(file, generateCityPage(city, ci));
  cityImports.push(`import ${city.pascal} from "./${city.slug}";`);
}

const hubServices = services.filter(
  (service) => getCitiesForService(service.slug).length > 0,
);

for (const [si, service] of services.entries()) {
  if (getCitiesForService(service.slug).length === 0) continue;
  const hubFile = path.join(servicesDataRoot, service.slug, "hub.ts");
  writeFile(hubFile, generateHubPage(service, si));
  const hubIdent = toCamelIdent(service.slug);
  hubImports.push(
    `import ${hubIdent} from "@/data/services/${service.slug}/hub";`,
  );
}

const cityIndexBySlug = Object.fromEntries(cities.map((c, i) => [c.slug, i]));
const serviceIndexBySlug = Object.fromEntries(services.map((s, i) => [s.slug, i]));

/** @type {Map<string, { imports: string[], entries: string[] }>} */
const perServiceAreaRegistries = new Map();

for (const combo of listCoveredCombos()) {
  const ci = cityIndexBySlug[combo.areaSlug];
  const si = serviceIndexBySlug[combo.serviceSlug];
  const file = path.join(
    servicesDataRoot,
    combo.serviceSlug,
    "areas",
    `${combo.areaSlug}.ts`,
  );
  writeFile(
    file,
    generateCityServicePage(combo.city, combo.service, ci, si),
  );

  const ident = `${combo.city.pascal}_${toCamelIdent(combo.serviceSlug)}`;
  const importPath = `@/data/services/${combo.serviceSlug}/areas/${combo.areaSlug}`;
  serviceImports.push(`import ${ident} from "${importPath}";`);
  serviceEntries.push(
    `  "${combo.areaSlug}::${combo.serviceSlug}": ${ident},`,
  );

  if (!perServiceAreaRegistries.has(combo.serviceSlug)) {
    perServiceAreaRegistries.set(combo.serviceSlug, {
      imports: [],
      entries: [],
    });
  }
  const reg = perServiceAreaRegistries.get(combo.serviceSlug);
  const cityIdent = combo.city.pascal;
  reg.imports.push(`import ${cityIdent} from "./${combo.areaSlug}";`);
  reg.entries.push(`  "${combo.areaSlug}": ${cityIdent},`);
}

for (const [serviceSlug, reg] of perServiceAreaRegistries) {
  writeFile(
    path.join(servicesDataRoot, serviceSlug, "areas", "index.ts"),
    `import type { CityServicePageContent } from "@/data/service-area-pages/types";
import { listPagesForService } from "@/data/service-area-pages";
import { serviceAreaRoutes } from "@/lib/service-area-routes";
${reg.imports.join("\n")}

export const SERVICE_SLUG = "${serviceSlug}" as const;

export const serviceHubHref = serviceAreaRoutes.serviceHub(SERVICE_SLUG);

/** Hardcoded city pages for this service only. */
export const areaPagesByCitySlug: Record<string, CityServicePageContent> = {
${reg.entries.join("\n")}
};

export function getAreaPage(citySlug: string) {
  return areaPagesByCitySlug[citySlug];
}

export function listAreaCitySlugs() {
  return Object.keys(areaPagesByCitySlug);
}

/** Finder / nav links for this service’s city pages only. */
export function getServiceAreaPages() {
  return listPagesForService(SERVICE_SLUG);
}
`,
  );
}

writeFile(
  path.join(base, "cities", "index.ts"),
  `import type { CityPageContent } from "@/data/service-area-pages/types";
${cityImports.join("\n")}

export const cityPageContentBySlug: Record<string, CityPageContent> = {
${cities.map((c) => `  "${c.slug}": ${c.pascal},`).join("\n")}
};

export function getCityPageContent(areaSlug: string): CityPageContent | undefined {
  return cityPageContentBySlug[areaSlug];
}

export function hasCityPageContent(areaSlug: string) {
  return Boolean(cityPageContentBySlug[areaSlug]);
}
`,
);

writeFile(
  path.join(base, "hubs", "index.ts"),
  `import type { ServiceHubPageContent } from "@/data/service-area-pages/types";
${hubImports.join("\n")}

export const serviceHubContentBySlug: Record<string, ServiceHubPageContent> = {
${hubServices
  .map((s) => {
    const ident = toCamelIdent(s.slug);
    return `  "${s.slug}": ${ident},`;
  })
  .join("\n")}
};

export function getServiceHubContent(serviceSlug: string): ServiceHubPageContent | undefined {
  return serviceHubContentBySlug[serviceSlug];
}

export function hasServiceHubContent(serviceSlug: string) {
  return Boolean(serviceHubContentBySlug[serviceSlug]);
}
`,
);

writeFile(
  path.join(base, "services", "index.ts"),
  `import type { CityServicePageContent } from "@/data/service-area-pages/types";
${serviceImports.join("\n")}

/**
 * Aggregated registry of every city × service content module.
 * Canonical edit location: src/data/services/{service}/areas/{city}.ts
 */
export const cityServicePageContent: Record<string, CityServicePageContent> = {
${serviceEntries.join("\n")}
};

export function pageContentKey(areaSlug: string, serviceSlug: string) {
  return \`\${areaSlug}::\${serviceSlug}\`;
}

export function getCityServicePageContent(
  areaSlug: string,
  serviceSlug: string,
): CityServicePageContent | undefined {
  return cityServicePageContent[pageContentKey(areaSlug, serviceSlug)];
}

export function hasCityServicePageContent(areaSlug: string, serviceSlug: string) {
  return Boolean(getCityServicePageContent(areaSlug, serviceSlug));
}
`,
);

const combos = listCoveredCombos();
console.log(
  `Generated ${cities.length} city pages, ${hubServices.length} hubs, ${combos.length} city×service pages under src/data/services/{service}/areas/, plus coverage.ts.`,
);
