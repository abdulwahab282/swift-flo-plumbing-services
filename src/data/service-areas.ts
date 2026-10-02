export type ServiceArea = {
  slug: string;
  city: string;
  state: string;
  stateName: string;
  county: string;
  label: string;
  summary: string;
  introduction: string;
  whyLocal: { title: string; text: string }[];
  serviceNotes: string[];
  map: {
    lat: number;
    lon: number;
    bbox: string;
  };
};

/**
 * Official service areas confirmed for Swift Flo Plumbing Services.
 * Serving Nashville and Middle Tennessee communities.
 */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "nashville-tn",
    city: "Nashville",
    state: "TN",
    stateName: "Tennessee",
    county: "Davidson County",
    label: "Nashville, TN",
    summary:
      "Comprehensive residential and commercial plumbing services across the greater Nashville area.",
    introduction:
      "Swift Flo Plumbing Services proudly provides professional plumbing solutions throughout Nashville, Tennessee. From historic neighborhoods to expanding suburbs, our experienced technicians deliver reliable diagnostics, pipe repairs, fixture installs, and water heater care.",
    whyLocal: [
      {
        title: "Metropolitan Coverage",
        text: "Serving Nashville homeowners, renters, and commercial properties with prompt dispatch and dedicated attention.",
      },
      {
        title: "Experienced Workmanship",
        text: "Equipped to handle everything from older Nashville home infrastructure to modern fixture and sewer line upgrades.",
      },
      {
        title: "Consistent 7-Day Hours",
        text: "Available Monday through Sunday from 8:00 AM to 8:00 PM for easy scheduling and prompt service.",
      },
    ],
    serviceNotes: [
      "Full plumbing repairs, replacements, and routine maintenance.",
      "Clear upfront communication and free quote inquiries.",
      "Visits arranged Monday through Sunday, 8:00 AM – 8:00 PM.",
      "Local service covering Davidson County and metropolitan Nashville.",
    ],
    map: {
      lat: 36.1627,
      lon: -86.7816,
      bbox: "-86.92,36.08,-86.65,36.25",
    },
  },
  {
    slug: "brentwood-tn",
    city: "Brentwood",
    state: "TN",
    stateName: "Tennessee",
    county: "Williamson County",
    label: "Brentwood, TN",
    summary:
      "Premier plumbing services for luxury homes and residential properties in Brentwood, Tennessee.",
    introduction:
      "Swift Flo Plumbing Services offers top-tier plumbing services for Brentwood residents. We specialize in precision leak detection, water heater installations, drain cleaning, and high-end fixture repair with clean, professional workmanship.",
    whyLocal: [
      {
        title: "Williamson County Focus",
        text: "Tailored plumbing solutions for Brentwood residential estates, subdivisions, and local commercial spaces.",
      },
      {
        title: "Meticulous Care",
        text: "We treat your home with utmost respect, using floor protection and spotless clean-up after every repair.",
      },
      {
        title: "Seven-Day Availability",
        text: "Flexible scheduling 8:00 AM to 8:00 PM, 7 days a week, so plumbing issues don't disrupt your routine.",
      },
    ],
    serviceNotes: [
      "High-efficiency water heaters, pressure regulators, and leak repairs.",
      "Fast response for residential homeowners across Brentwood.",
      "Transparent quote requests handled quickly by our team.",
      "Serving all Brentwood neighborhoods and surrounding Williamson County.",
    ],
    map: {
      lat: 36.0331,
      lon: -86.7828,
      bbox: "-86.86,35.97,-86.70,36.09",
    },
  },
  {
    slug: "franklin-tn",
    city: "Franklin",
    state: "TN",
    stateName: "Tennessee",
    county: "Williamson County",
    label: "Franklin, TN",
    summary:
      "Reliable plumbing repairs, repiping, and maintenance throughout historic and modern Franklin, TN.",
    introduction:
      "Residents and property owners in Franklin trust Swift Flo Plumbing Services for dependable, timely, and professional plumbing service. Whether you require faucet replacements, sewer line inspections, or water heater maintenance, we deliver lasting results.",
    whyLocal: [
      {
        title: "Historic & Modern Expertise",
        text: "Skilled at updating vintage plumbing networks in downtown Franklin as well as servicing new construction builds.",
      },
      {
        title: "Straightforward Communication",
        text: "Clear explanations of needed repairs with no confusing jargon or hidden surprises.",
      },
      {
        title: "Prompt Local Scheduling",
        text: "Seven-day coverage from 8:00 AM to 8:00 PM ensuring prompt attention when plumbing needs arise.",
      },
    ],
    serviceNotes: [
      "Comprehensive pipe repair, drain clearing, and fixture installation.",
      "Dedicated Williamson County service team.",
      "Free estimate requests processed without delay.",
      "Open Monday through Sunday, 8:00 AM to 8:00 PM.",
    ],
    map: {
      lat: 35.9251,
      lon: -86.8689,
      bbox: "-86.96,35.86,-86.78,35.99",
    },
  },
  {
    slug: "gallatin-tn",
    city: "Gallatin",
    state: "TN",
    stateName: "Tennessee",
    county: "Sumner County",
    label: "Gallatin, TN",
    summary:
      "Dependable plumbing repair and installation solutions for homeowners and businesses in Gallatin, TN.",
    introduction:
      "Swift Flo Plumbing Services brings professional plumbing workmanship to Gallatin and Sumner County. From clogged lines and running toilets to tankless water heaters and whole-home repiping, our licensed approach ensures peace of mind.",
    whyLocal: [
      {
        title: "Sumner County Coverage",
        text: "Dedicated service covering Gallatin and the northeast Nashville corridor.",
      },
      {
        title: "Quality Parts & Materials",
        text: "We utilize commercial-grade fittings, durable pipes, and trusted brand-name components.",
      },
      {
        title: "Full-Week Availability",
        text: "Open 7 days a week, 8:00 AM to 8:00 PM to support Gallatin households whenever plumbing issues emerge.",
      },
    ],
    serviceNotes: [
      "Complete plumbing diagnostics, leak detection, and drain care.",
      "Friendly, professional local service technicians.",
      "Request service quickly online or by phone.",
      "Serving Gallatin residential communities and commercial facilities.",
    ],
    map: {
      lat: 36.3884,
      lon: -86.4467,
      bbox: "-86.53,36.32,-86.36,36.46",
    },
  },
  {
    slug: "hendersonville-tn",
    city: "Hendersonville",
    state: "TN",
    stateName: "Tennessee",
    county: "Sumner County",
    label: "Hendersonville, TN",
    summary:
      "Trusted plumbing services along Old Hickory Lake and throughout Hendersonville, Tennessee.",
    introduction:
      "Swift Flo Plumbing Services provides prompt, professional plumbing services to families and businesses in Hendersonville. We handle kitchen and bathroom plumbing, water filtration, water heaters, and pipe leak emergencies with utmost efficiency.",
    whyLocal: [
      {
        title: "Lakeside Community Focus",
        text: "Familiar with the specific water pressure, filtration, and plumbing requirements of lakeside and inland homes.",
      },
      {
        title: "Clean, Courteous Professionals",
        text: "We respect your schedule and keep your living spaces tidy and orderly while we work.",
      },
      {
        title: "Reliable Response Times",
        text: "Operating Monday through Sunday, 8:00 AM to 8:00 PM for predictable and convenient booking.",
      },
    ],
    serviceNotes: [
      "Water heater replacements, leak repairs, and drain clearing.",
      "Transparent pricing discussions upfront.",
      "Easy online service request system.",
      "Sumner County and Hendersonville coverage.",
    ],
    map: {
      lat: 36.3048,
      lon: -86.62,
      bbox: "-86.70,36.24,-86.54,36.37",
    },
  },
  {
    slug: "la-vergne-tn",
    city: "La Vergne",
    state: "TN",
    stateName: "Tennessee",
    county: "Rutherford County",
    label: "La Vergne, TN",
    summary:
      "Fast, dependable plumbing service for homes, townhouses, and businesses in La Vergne, TN.",
    introduction:
      "Swift Flo Plumbing Services delivers prompt plumbing repair and installation in La Vergne, Tennessee. Whether you're dealing with a sudden pipe burst, sewer backup, or dripping faucet, our technicians resolve it quickly and thoroughly.",
    whyLocal: [
      {
        title: "Rapid Local Dispatch",
        text: "Located right along the Percy Priest corridor for quick response to La Vergne calls.",
      },
      {
        title: "Comprehensive Solutions",
        text: "From routine fixture swaps to complex underground pipe repairs, we have you covered.",
      },
      {
        title: "Everyday Service Hours",
        text: "Ready to assist Monday through Sunday from 8:00 AM to 8:00 PM.",
      },
    ],
    serviceNotes: [
      "Emergency leak resolution, toilet repairs, and drain cleaning.",
      "Convenient booking through our simple inquiry form.",
      "Licensed and professional plumbing standards.",
      "Serving all La Vergne neighborhoods and Rutherford County.",
    ],
    map: {
      lat: 36.0156,
      lon: -86.5819,
      bbox: "-86.66,35.96,-86.50,36.07",
    },
  },
  {
    slug: "lebanon-tn",
    city: "Lebanon",
    state: "TN",
    stateName: "Tennessee",
    county: "Wilson County",
    label: "Lebanon, TN",
    summary:
      "Quality plumbing services and expert system installations for Lebanon, TN homeowners.",
    introduction:
      "Swift Flo Plumbing Services extends honest, high-quality plumbing services to Lebanon and Wilson County. We take pride in accurate troubleshooting, clean repairs, and transparent communication from the first phone call through job completion.",
    whyLocal: [
      {
        title: "Wilson County Coverage",
        text: "Providing dedicated plumbing support to Lebanon's growing residential neighborhoods and commercial centers.",
      },
      {
        title: "Long-Lasting Workmanship",
        text: "We fix plumbing problems at their source rather than applying temporary surface patches.",
      },
      {
        title: "Seven-Day Scheduling",
        text: "Open 8:00 AM to 8:00 PM every day of the week to accommodate your timeline.",
      },
    ],
    serviceNotes: [
      "Water heaters, garbage disposals, drain clogs, and pipe repiping.",
      "Friendly customer support and quick quote responses.",
      "Licensed, code-compliant plumbing solutions.",
      "Serving Lebanon and eastern Middle Tennessee.",
    ],
    map: {
      lat: 36.2081,
      lon: -86.3281,
      bbox: "-86.41,36.14,-86.24,36.28",
    },
  },
  {
    slug: "mt-juliet-tn",
    city: "Mt. Juliet",
    state: "TN",
    stateName: "Tennessee",
    county: "Wilson County",
    label: "Mt. Juliet, TN",
    summary:
      "Dependable plumbing repair, fixture upgrades, and drain services in Mt. Juliet, Tennessee.",
    introduction:
      "For homeowners and businesses in Mt. Juliet, Swift Flo Plumbing Services is the dependable local plumbing partner. From kitchen renovations and water heater upgrades to stubborn drain cleanouts, we deliver flawless results.",
    whyLocal: [
      {
        title: "Fast Growing Community Partner",
        text: "Tailored plumbing solutions for both established and newly constructed Mt. Juliet homes.",
      },
      {
        title: "Transparent & Honest",
        text: "Upfront communication and thorough inspections so you can make informed decisions.",
      },
      {
        title: "Open Daily 8 AM – 8 PM",
        text: "Seven-day availability ensures your plumbing repairs are addressed promptly.",
      },
    ],
    serviceNotes: [
      "Kitchen & bathroom plumbing, water line repairs, and toilet replacements.",
      "Clear quotes and courteous technicians.",
      "Operating Monday through Sunday, 8:00 AM to 8:00 PM.",
      "Serving Mt. Juliet, Providence, and surrounding Wilson County.",
    ],
    map: {
      lat: 36.2001,
      lon: -86.5186,
      bbox: "-86.59,36.14,-86.44,36.26",
    },
  },
  {
    slug: "murfreesboro-tn",
    city: "Murfreesboro",
    state: "TN",
    stateName: "Tennessee",
    county: "Rutherford County",
    label: "Murfreesboro, TN",
    summary:
      "Full-service residential and commercial plumbing services across Murfreesboro, TN.",
    introduction:
      "Swift Flo Plumbing Services provides expert plumbing services throughout Murfreesboro, Tennessee. From MTSU-area residences to family neighborhoods and commercial facilities, we handle water heaters, sewer cleanouts, and pipe repairs with precision.",
    whyLocal: [
      {
        title: "Deep Rutherford County Roots",
        text: "Extensive local knowledge of Murfreesboro water systems and plumbing infrastructure.",
      },
      {
        title: "Prompt Service Execution",
        text: "We arrive equipped with the right tools and replacement parts to solve problems on the spot.",
      },
      {
        title: "Daily Hours You Can Count On",
        text: "Open 7 days a week, 8:00 AM – 8:00 PM for scheduled maintenance and urgent plumbing repairs.",
      },
    ],
    serviceNotes: [
      "Drain unclogging, water heater installation, leak detection, and pipe repairs.",
      "Clear, honest estimates with no hidden surprise fees.",
      "Dedicated technicians serving Murfreesboro and Rutherford County.",
      "Open Monday through Sunday from 8:00 AM to 8:00 PM.",
    ],
    map: {
      lat: 35.8456,
      lon: -86.3903,
      bbox: "-86.48,35.78,-86.30,35.92",
    },
  },
  {
    slug: "smyrna-tn",
    city: "Smyrna",
    state: "TN",
    stateName: "Tennessee",
    county: "Rutherford County",
    label: "Smyrna, TN",
    summary:
      "Local plumbing services for homeowners and commercial spaces in Smyrna, Tennessee.",
    introduction:
      "Swift Flo Plumbing Services has served Smyrna, Tennessee with reliable, honest plumbing solutions. We provide responsive service for dripping faucets, low water pressure, broken water heaters, sewer clogs, and full pipe replacements.",
    whyLocal: [
      {
        title: "Local Smyrna Community Hub",
        text: "Our core service territory with quick dispatch to Smyrna homes and businesses.",
      },
      {
        title: "Professional Standards",
        text: "Quality workmanship that meets and exceeds local Tennessee building and plumbing codes.",
      },
      {
        title: "Reliable Hours",
        text: "Open Monday through Sunday, 8:00 AM to 8:00 PM for convenient scheduling.",
      },
    ],
    serviceNotes: [
      "Full residential plumbing repair, installation, and inspection.",
      "Quick online service booking and phone consultations.",
      "Transparent recommendations tailored to your home's needs.",
      "Serving all Smyrna neighborhoods and Rutherford County.",
    ],
    map: {
      lat: 35.9828,
      lon: -86.5186,
      bbox: "-86.60,35.94,-86.44,36.03",
    },
  },
  {
    slug: "spring-hill-tn",
    city: "Spring Hill",
    state: "TN",
    stateName: "Tennessee",
    county: "Williamson / Maury County",
    label: "Spring Hill, TN",
    summary:
      "Trusted plumbing repairs, fixture installs, and drain services in Spring Hill, Tennessee.",
    introduction:
      "Swift Flo Plumbing Services proudly serves the growing community of Spring Hill, Tennessee. We help homeowners maintain efficient, reliable plumbing systems with thorough inspections, water heater replacements, and rapid leak repairs.",
    whyLocal: [
      {
        title: "Southern Middle TN Coverage",
        text: "Serving both the Williamson County and Maury County sections of Spring Hill.",
      },
      {
        title: "Modern Plumbing Knowledge",
        text: "Specializing in modern PEX piping, tankless water heating systems, and water filtration.",
      },
      {
        title: "Available Seven Days a Week",
        text: "Booking visits Monday through Sunday, 8:00 AM to 8:00 PM.",
      },
    ],
    serviceNotes: [
      "Water heater repairs, leak detection, sewer clearing, and faucet swaps.",
      "Fast response and courteous customer service.",
      "Free quotes through our online contact form.",
      "Serving Spring Hill and surrounding communities.",
    ],
    map: {
      lat: 35.7512,
      lon: -86.93,
      bbox: "-87.00,35.70,-86.86,35.80",
    },
  },
  {
    slug: "thompsons-station-tn",
    city: "Thompson's Station",
    state: "TN",
    stateName: "Tennessee",
    county: "Williamson County",
    label: "Thompson's Station, TN",
    summary:
      "High-standard plumbing care for residential properties in Thompson's Station, Tennessee.",
    introduction:
      "Swift Flo Plumbing Services provides dependable plumbing craftsmanship to residents of Thompson's Station. From rural residential systems to new subdivision properties, we deliver clean, code-compliant plumbing solutions.",
    whyLocal: [
      {
        title: "Williamson County Reliability",
        text: "Bringing prompt, attentive plumbing service to Thompson's Station households.",
      },
      {
        title: "Expert Problem Solving",
        text: "Pinpointing hidden leaks, clearing stubborn blockages, and installing top-tier fixtures.",
      },
      {
        title: "7-Day Consistent Availability",
        text: "Open 8:00 AM to 8:00 PM every day so you can schedule at your convenience.",
      },
    ],
    serviceNotes: [
      "Full-service plumbing repair, replacement, and regular maintenance.",
      "Courteous, licensed technicians respecting your home.",
      "Request service easily online or via phone.",
      "Serving Thompson's Station and surrounding Williamson County.",
    ],
    map: {
      lat: 35.7981,
      lon: -86.9083,
      bbox: "-86.97,35.74,-86.84,35.85",
    },
  },
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((area) => area.slug === slug);
}
