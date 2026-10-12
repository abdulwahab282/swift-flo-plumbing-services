/**
 * Generates dedicated TypeScript content files for every service-area route.
 * Run: node scripts/generate-service-area-content.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const base = path.join(root, "src", "data", "service-area-pages");

const HOURS = "Monday – Sunday, 8:00 AM – 8:00 PM";
const PHONE = "629-238-8322";
const BRAND = "Swift Flo Plumbing Services";

const cities = [
  { slug: "brentwood-tn", city: "Brentwood", label: "Brentwood, TN", pascal: "Brentwood" },
  { slug: "franklin-tn", city: "Franklin", label: "Franklin, TN", pascal: "Franklin" },
  { slug: "gallatin-tn", city: "Gallatin", label: "Gallatin, TN", pascal: "Gallatin" },
  { slug: "hendersonville-tn", city: "Hendersonville", label: "Hendersonville, TN", pascal: "Hendersonville" },
  { slug: "la-vergne-tn", city: "La Vergne", label: "La Vergne, TN", pascal: "LaVergne" },
  { slug: "lebanon-tn", city: "Lebanon", label: "Lebanon, TN", pascal: "Lebanon" },
  { slug: "mt-juliet-tn", city: "Mt. Juliet", label: "Mt. Juliet, TN", pascal: "MtJuliet" },
  { slug: "murfreesboro-tn", city: "Murfreesboro", label: "Murfreesboro, TN", pascal: "Murfreesboro" },
  { slug: "nashville-tn", city: "Nashville", label: "Nashville, TN", pascal: "Nashville" },
  { slug: "smyrna-tn", city: "Smyrna", label: "Smyrna, TN", pascal: "Smyrna" },
  { slug: "spring-hill-tn", city: "Spring Hill", label: "Spring Hill, TN", pascal: "SpringHill" },
  { slug: "thompsons-station-tn", city: "Thompson's Station", label: "Thompson's Station, TN", pascal: "ThompsonsStation" },
];

const services = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    lower: "drain cleaning",
    focus: "clogged and slow drains",
    work: "clearing sinks, showers, tubs, floor drains, and main-line backups",
    summary:
      "Professional drain cleaning restores wastewater flow when fixtures run slow or stop draining.",
    details: [
      "Clear clogged sinks, showers, tubs, and floor drains.",
      "Address slow-draining fixtures before they become larger problems.",
      "Support for residential and commercial drain concerns.",
      "Request service during Monday through Sunday, 8:00 AM to 8:00 PM.",
    ],
    imageSrc: "/images/work.jpg",
    imageAltBase: "Plumber clearing a drain connection",
  },
  {
    slug: "camera-inspections",
    name: "Camera Inspections",
    lower: "camera inspections",
    focus: "hidden pipe conditions",
    work: "video inspection of drain and sewer lines to locate blockages and damage",
    summary:
      "Camera inspections help diagnose underground plumbing issues before repair work begins.",
    details: [
      "Inspect drain and sewer lines with video camera equipment.",
      "Help pinpoint the location and nature of plumbing issues.",
      "Support informed decisions about repairs or replacements.",
      "Available across our confirmed Middle Tennessee service areas.",
    ],
    imageSrc: "/images/gallery-camera.jpg",
    imageAltBase: "Plumbing inspection camera for drain diagnostics",
  },
  {
    slug: "water-filtration-system-installation",
    name: "Water Filtration System Installation",
    lower: "water filtration system installation",
    focus: "cleaner household water",
    work: "installing filtration systems matched to the property plumbing layout",
    summary:
      "Water filtration installation helps improve water quality for drinking, cooking, and daily use.",
    details: [
      "Install water filtration systems suited to your property.",
      "Support cleaner water for drinking, cooking, and household use.",
      "Professional plumbing connections and clean workmanship.",
      "Request a quote and describe the filtration setup you need.",
    ],
    imageSrc: "/images/kitchen-faucet.jpg",
    imageAltBase: "Kitchen faucet and water filtration plumbing",
  },
  {
    slug: "water-heater-repairs-replacement",
    name: "Water Heater Repairs & Replacement",
    lower: "water heater repairs and replacement",
    focus: "dependable hot water",
    work: "diagnosing, repairing, or replacing tank and tankless water heaters",
    summary:
      "Water heater service restores reliable hot water when units leak, fail to heat, or need replacement.",
    details: [
      "Diagnose and repair common water heater problems.",
      "Replace aging or failing water heaters when needed.",
      "Support for tank and tankless water heater concerns.",
      "Schedule service within published business hours.",
    ],
    imageSrc: "/images/water-heater.jpg",
    imageAltBase: "Plumber servicing water heater connections",
  },
  {
    slug: "bathroom-remodeling",
    name: "Bathroom Remodeling",
    lower: "bathroom remodeling plumbing",
    focus: "fixture and remodel plumbing",
    work: "fixture installation and plumbing updates during bathroom remodel projects",
    summary:
      "Bathroom remodeling plumbing covers fixture connections and layout updates for a finished bathroom.",
    details: [
      "Install and connect bathroom fixtures with care.",
      "Support plumbing needs during bathroom remodel projects.",
      "Help update sinks, toilets, showers, and related connections.",
      "Discuss your remodel plans when you request a quote.",
    ],
    imageSrc: "/images/bathroom.jpg",
    imageAltBase: "Bathroom vanity and plumbing fixtures",
  },
  {
    slug: "water-sewer-excavation-repairs-replacements",
    name: "Water & Sewer Excavation Repairs & Replacements",
    lower: "water and sewer excavation repairs and replacements",
    focus: "underground line repairs",
    work: "repairing or replacing damaged water and sewer service lines",
    summary:
      "Excavation repairs address underground water and sewer line damage that needs professional plumbing work.",
    details: [
      "Repair or replace damaged water and sewer lines.",
      "Support excavation-related plumbing work when required.",
      "Address leaks, breaks, and aging underground lines.",
      "Request service with a description of the issue you are seeing.",
    ],
    imageSrc: "/images/fittings.jpg",
    imageAltBase: "Pipe fittings used for underground plumbing repairs",
  },
];

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

function esc(str) {
  return String(str).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function pick(arr, i) {
  return arr[i % arr.length];
}

function cityFaqSet(city, index) {
  const name = city.city;
  const baseFaqs = [
    {
      q: `Do you provide plumbing services in ${name}?`,
      a: `Yes. ${BRAND} provides professional plumbing services for customers in ${city.label}. Request a visit during published hours (${HOURS}).`,
    },
    {
      q: `Which plumbing services are available in ${name}?`,
      a: `Customers in ${name} can request drain cleaning, camera inspections, water filtration installation, water heater repairs and replacement, bathroom remodeling plumbing, and water and sewer excavation repairs.`,
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
      a: `Yes. Residential and commercial customers in ${name} can request professional plumbing service.`,
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
      a: `${name} is a confirmed service area. Customers get professional plumbing work, clear communication, and a straightforward request process from inquiry through completion.`,
    },
    {
      q: `Do you handle drain cleaning in ${name}?`,
      a: `Yes. Drain cleaning is available for ${name} customers along with the rest of our confirmed plumbing services.`,
    },
    {
      q: `Can ${name} customers request water heater service?`,
      a: `Yes. Water heater repairs and replacement are available for customers throughout ${city.label}.`,
    },
  ];
  // Rotate starting point so FAQ order differs by city
  const rotated = [...baseFaqs.slice(index % baseFaqs.length), ...baseFaqs.slice(0, index % baseFaqs.length)];
  return rotated.slice(0, 12);
}

function serviceFaqs(service, city, cityIndex, serviceIndex) {
  const { city: name, label } = city;
  const s = service;
  const extras = [
    {
      q: `What signs suggest I need ${s.lower} in ${name}?`,
      a: `Common reasons include ${s.focus}. If you are seeing related symptoms at a ${name} property, describe them when you request service so we can prepare for the visit.`,
    },
    {
      q: `Is ${s.lower} available for commercial properties in ${name}?`,
      a: `Yes. Homes and businesses in ${name} can request ${s.lower} during published business hours.`,
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
      a: `Yes. ${BRAND} provides ${s.lower} for customers in ${label}. Request a visit during published hours (${HOURS}).`,
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
      a: `Yes. In addition to ${s.lower}, ${BRAND} provides a full range of confirmed plumbing services for customers in ${label}.`,
    },
    {
      q: `Why choose Swift Flo for ${s.lower} in ${name}?`,
      a: `${name} is part of our confirmed coverage. Customers receive professional ${s.lower}, clear communication, and a straightforward request process.`,
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
      text: `${city.city} is a confirmed service area for ${BRAND}, giving local customers a direct way to request professional plumbing work.`,
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
      text: `Professional plumbing service is available for customers throughout ${city.city}, Tennessee.`,
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
    { title: "Local coverage", text: `${city.city} is included in our confirmed Middle Tennessee service areas.`, icon: "pin" },
    { title: "Professional plumbing", text: "Work focuses on the repair, installation, or project you request.", icon: "wrench" },
    { title: "Clear communication", text: "Straightforward updates from the first inquiry through completion.", icon: "users" },
    { title: "Dependable process", text: "A consistent approach designed to make plumbing service easier to arrange.", icon: "shield" },
    { title: "Customer-first requests", text: "Your request starts with contact details and a clear description of the job.", icon: "droplet" },
    { title: "Convenient hours", text: `Open ${HOURS}.`, icon: "clock" },
  ];

  return `import type { CityPageContent } from "@/data/service-area-pages/types";

/** Dedicated content for /service-areas/${city.slug} */
const content: CityPageContent = {
  metaTitle: "Plumbing Services in ${city.city}, TN | ${BRAND}",
  metaDescription: "${BRAND} provides professional plumbing for homes and businesses in ${city.label}. Request service ${HOURS}. Call ${PHONE}.",
  heroTitle: "Professional plumbing services in ${city.city}.",
  introduction: "${BRAND} provides reliable plumbing services for ${angle} in ${city.city}, Tennessee. Request help with ${needs} through the contact form or by calling ${PHONE}.",
  summary: "Professional plumbing service for homeowners and businesses in ${city.label}.",
  whyLocal: ${JSON.stringify(whyLocal, null, 2)},
  about: {
    title: "Professional plumbing for ${city.city} homes and businesses.",
    description: "${BRAND} serves ${city.city} with dependable plumbing focused on clear communication and quality workmanship. Whether you need a repair, fixture work, or a planned plumbing project, customers throughout ${city.label} can request service during published hours.",
  },
  services: {
    title: "Plumbing services available in ${city.city}",
    description: "From drain cleaning and camera inspections to water heater service, bathroom remodeling plumbing, water filtration installation, and water and sewer excavation repairs, ${BRAND} supports ${city.city} customers across confirmed plumbing needs.",
  },
  overview: {
    title: "How plumbing service works in ${city.city}",
    description: "From the first request through completion, ${city.city} customers receive clear next steps, professional workmanship, and scheduling within published hours.",
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
  const cityList = cities.map((c) => c.city).join(", ");
  const sample = cities
    .slice(serviceIndex % 3, serviceIndex % 3 + 5)
    .map((c) => c.city)
    .join(", ");
  const faqs = [
    {
      question: `Where is ${service.lower} available?`,
      answer: `${BRAND} provides ${service.lower} across ${cities.length} confirmed communities in Nashville and Middle Tennessee, including ${sample}.`,
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
      answer: `Yes. Nashville is a confirmed service area. Open the Nashville city page for ${service.lower} or request service directly.`,
    },
    {
      question: `Which cities are listed for ${service.lower}?`,
      answer: `${service.name} pages are available for ${cityList}.`,
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
      { title: "Confirmed city pages", text: `Open a dedicated ${service.lower} page for each supported Middle Tennessee city.`, icon: "pin" },
      { title: "Professional focus", text: service.summary, icon: "wrench" },
      { title: "Published hours", text: `Request ${service.lower} during ${HOURS}.`, icon: "clock" },
    ],
    [
      { title: "Local coverage map", text: `Choose from ${cities.length} confirmed cities where ${service.lower} is offered.`, icon: "pin" },
      { title: "Clear diagnostics-to-repair path", text: `Describe ${service.focus} so follow-up stays accurate.`, icon: "shield" },
      { title: "Direct contact options", text: `Call ${PHONE} or use the contact form to request service.`, icon: "users" },
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
    description: "While this hub focuses on ${service.lower}, ${BRAND} also provides drain cleaning, camera inspections, water filtration installation, water heater service, bathroom remodeling plumbing, and water and sewer excavation repairs across Middle Tennessee.",
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
        title: ["Service focus", "How the work helps", "Property types", "Scheduling"][i] || `Detail ${i + 1}`,
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
  const heroVariants = [
    `${service.name} in ${city.city}, TN`,
    `Professional ${service.lower} for ${city.city}`,
    `${city.city} ${service.name} from Swift Flo`,
  ];
  const heroDescVariants = [
    `${service.summary} ${BRAND} provides ${service.lower} for homeowners and businesses throughout ${city.label}. Call ${PHONE} or request service online.`,
    `Need help with ${service.focus} in ${city.city}? ${BRAND} handles ${service.work} during published hours (${HOURS}).`,
    `${city.city} customers can request ${service.lower} with a clear description of the issue. ${BRAND} follows up with next steps for service in ${city.label}.`,
  ];
  const highlightSets = [
    [
      { title: `${city.city} coverage`, text: `Professional ${service.lower} arranged for customers throughout ${city.label}.` },
      { title: "Dependable results", text: "Clear communication and quality workmanship focused on the job you requested." },
      { title: "Convenient hours", text: `Open ${HOURS}.` },
    ],
    [
      { title: "Local requests", text: `${city.city} is a confirmed service area for ${service.lower}.` },
      { title: pick(["Focused service", "Targeted help", "Clear scope"], serviceIndex), text: `Work centers on ${service.focus} at your ${city.city} property.` },
      { title: "Direct contact", text: `Call ${PHONE} or use the contact form to request a visit.` },
    ],
    [
      { title: "Homes and businesses", text: `Residential and commercial ${service.lower} requests are accepted in ${city.city}.` },
      { title: "Prepared visits", text: `Share symptoms and timing so ${city.city} follow-up stays accurate.` },
      { title: "Related services", text: `Additional plumbing services are available for ${city.city} customers when needed.` },
    ],
  ];
  const overviewPoints = [
    `Professional ${service.lower} for ${city.city} customers`,
    "Residential and commercial support",
    `Published hours: ${HOURS}`,
    ...service.details.slice(0, 2),
  ];
  const detailTitles = [
    [`${city.city} service focus`, "How the work helps", "Property types served", "Scheduling window"],
    ["What we address", "Why it matters", "Where we serve", "When you can request"],
    ["Local priority", "Practical outcome", "Coverage type", "Hours of service"],
  ];
  const whyReasons = [
    { title: `${city.city} availability`, text: `${service.name} is available for customers throughout ${city.label}.`, icon: "pin" },
    { title: "Skilled technicians", text: service.summary, icon: "wrench" },
    { title: "Clear communication", text: "Straightforward updates from inquiry through completion.", icon: "users" },
    { title: "Reliable workmanship", text: "Professional plumbing work focused on lasting results.", icon: "shield" },
    { title: "Customer-first care", text: "Your request starts with contact details and a clear description of the job.", icon: "droplet" },
    { title: "Convenient hours", text: `Open ${HOURS}.`, icon: "clock" },
  ];

  const heroSrc = cityImage(city, "hero");
  const aboutSrc = cityImage(city, "about");
  const overviewSrc = service.imageSrc;
  const ctaSrc = cityImage(city, "cta");

  const content = {
    metaTitle: `${service.name} in ${city.city}, TN | ${BRAND}`,
    metaDescription: `${service.summary} Serving ${city.label}. Request ${service.lower} ${HOURS}. Call ${PHONE}.`,
    heroTitle: pick(heroVariants, cityIndex + serviceIndex),
    heroDescription: pick(heroDescVariants, cityIndex + serviceIndex * 2),
    highlights: pick(highlightSets, cityIndex + serviceIndex),
    aboutTitle: `${service.name} for ${city.city} homes and businesses`,
    aboutDescription: `${service.summary} Customers in ${city.city} can request ${service.lower} online or by phone and describe the plumbing work that needs attention.`,
    aboutSecondary: `Open ${HOURS}. ${BRAND} serves ${city.label} with a straightforward way to request ${service.lower}. Call ${PHONE}.`,
    servicesTitle: `Plumbing services related to ${service.name}`,
    servicesDescription: `While this page focuses on ${service.lower} in ${city.city}, ${BRAND} also provides a full range of professional plumbing services across Nashville and Middle Tennessee.`,
    ctaTitle: `Request ${service.lower} in ${city.city}`,
    ctaDescription: `Contact ${BRAND} to schedule ${service.lower} in ${city.label}. Share your details and the work you need — we follow up from there.`,
    overviewTitle: `${service.name} overview in ${city.city}`,
    overviewDescription: `From the first request through completion, ${BRAND} keeps ${service.lower} clear and local for customers in ${city.city}, Tennessee.`,
    overviewPoints,
    detailsTitle: `${service.name} details for ${city.city}`,
    detailsDescription: `What to expect when you request ${service.lower} from ${BRAND} in ${city.label}.`,
    detailPoints: service.details.map((text, i) => ({
      title: pick(detailTitles, serviceIndex)[i] || `Detail ${i + 1}`,
      text: i === 0 ? `${text} Available for customers requesting service in ${city.city}.` : text,
    })),
    whyTitle: `Why choose Swift Flo for ${service.lower} in ${city.city}`,
    whyDescription: `Local coverage, professional plumbing service, and a clear request process for ${service.lower} throughout ${city.label}.`,
    whyReasons,
    faqs: faqs.map((f) => ({ question: f.q, answer: f.a })),
    heroImage: {
      src: heroSrc,
      alt: `${service.imageAltBase} in ${city.city}, Tennessee`,
    },
    aboutImage: {
      src: aboutSrc,
      alt: `${service.name} workmanship for ${city.city} customers`,
    },
    overviewImage: {
      src: overviewSrc,
      alt: `${service.imageAltBase} for ${city.city} service overview`,
    },
    ctaImage: {
      src: ctaSrc,
      alt: `Request ${service.lower} in ${city.city}`,
    },
  };

  return `import type { CityServicePageContent } from "@/data/service-area-pages/types";

/** Dedicated content for /service-areas/${city.slug}/${service.slug} */
const content: CityServicePageContent = ${JSON.stringify(content, null, 2)};

export default content;
`;
}

// --- Generate files ---
const cityImports = [];
const hubImports = [];
const serviceImports = [];
const serviceEntries = [];

for (const [ci, city] of cities.entries()) {
  const file = path.join(base, "cities", `${city.slug}.ts`);
  writeFile(file, generateCityPage(city, ci));
  cityImports.push(`import ${city.pascal} from "./${city.slug}";`);
}

for (const [si, service] of services.entries()) {
  const file = path.join(base, "hubs", `${service.slug}.ts`);
  writeFile(file, generateHubPage(service, si));
  const hubIdent = service.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  hubImports.push(`import ${hubIdent} from "./${service.slug}";`);
}

for (const [ci, city] of cities.entries()) {
  for (const [si, service] of services.entries()) {
    const file = path.join(base, "services", city.slug, `${service.slug}.ts`);
    writeFile(file, generateCityServicePage(city, service, ci, si));
    const ident = `${city.pascal}_${service.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`;
    serviceImports.push(
      `import ${ident} from "./${city.slug}/${service.slug}";`,
    );
    serviceEntries.push(`  "${city.slug}::${service.slug}": ${ident},`);
  }
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
${services
  .map((s) => {
    const ident = s.slug.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
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

console.log(
  `Generated ${cities.length} city pages, ${services.length} hubs, ${cities.length * services.length} city×service pages.`,
);
