export type ServiceIcon =
  | "droplet"
  | "wrench"
  | "pipe"
  | "flame"
  | "alert"
  | "shield"
  | "clock"
  | "pin";

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  details: string[];
  icon: ServiceIcon;
  image: "faucet" | "work" | "fittings" | "bathroom" | "hero" | "waterHeater" | "toiletRepair" | "kitchenFaucet";
};

/**
 * Professional Plumbing Services offered by Swift Flo Plumbing Services.
 * Serving Nashville and Middle Tennessee communities.
 */
export const services: Service[] = [
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning & Unclogging",
    summary:
      "Fast, thorough clearing of stubborn kitchen, bathroom, and sewer line blockages using professional equipment.",
    description:
      "Swift Flo Plumbing Services provides expert drain cleaning for residential and commercial customers across Middle Tennessee. We eliminate stubborn build-up, grease, tree roots, and obstructions to restore optimal water flow and prevent costly backups.",
    details: [
      "Thorough diagnostics to pinpoint the exact location and cause of drain clogs.",
      "Safe, heavy-duty mechanical snaking and clearing methods.",
      "Mainline sewer cleaning and localized branch drain unclogging.",
      "Preventive tips and guidance to keep your plumbing flowing freely.",
    ],
    icon: "droplet",
    image: "kitchenFaucet",
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Repair & Installation",
    summary:
      "Reliable repair and installation for standard tank and tankless water heaters throughout Middle Tennessee.",
    description:
      "Restore your hot water quickly with Swift Flo's professional water heater services. We diagnose heating elements, thermostats, valves, and sediment issues, and install energy-efficient tank and tankless models suited to your household size and budget.",
    details: [
      "Rapid diagnostics for lack of hot water, leaks, strange noises, and pilot issues.",
      "Replacement and new installation of premium tank and tankless water heaters.",
      "Safety relief valve inspection and expansion tank maintenance.",
      "Full compliance with Tennessee plumbing codes and manufacturer warranties.",
    ],
    icon: "flame",
    image: "waterHeater",
  },
  {
    slug: "pipe-leak-repair",
    name: "Pipe Repair & Leak Detection",
    summary:
      "Precision detection and lasting repairs for leaking, corroded, or burst pipes in residential and commercial buildings.",
    description:
      "A hidden pipe leak can cause extensive structural and cosmetic damage if left untreated. Swift Flo Plumbing Services utilizes non-invasive diagnostic techniques to locate leaks quickly and provide clean, durable repairs in copper, PEX, and PVC piping.",
    details: [
      "Pinpoint leak detection behind walls, under floorboards, and underground.",
      "Targeted pipe section repair and whole-home repiping solutions.",
      "High-pressure fitting replacements and burst pipe emergency repairs.",
      "Water pressure testing to ensure long-term system integrity.",
    ],
    icon: "pipe",
    image: "fittings",
  },
  {
    slug: "fixture-faucet-installation",
    name: "Fixture & Faucet Installation",
    summary:
      "Flawless installation and repair of sink faucets, shower valves, bathtubs, and modern kitchen/bath hardware.",
    description:
      "Upgrade your home's aesthetics and efficiency with professional fixture installation from Swift Flo Plumbing Services. We expertly install and repair high-grade kitchen faucets, bathroom sinks, showerheads, shut-off valves, and laundry connections.",
    details: [
      "Leak-free mounting and secure supply-line connections.",
      "Repair of dripping, sputtering, or low-pressure faucets and cartridges.",
      "Installation of customer-supplied fixtures or contractor-grade replacements.",
      "Shut-off valve upgrades and water supply line replacements.",
    ],
    icon: "wrench",
    image: "faucet",
  },
  {
    slug: "toilet-repair-replacement",
    name: "Toilet Repair & Replacement",
    summary:
      "Complete troubleshooting and replacement for running, leaking, rocking, or clogged toilet systems.",
    description:
      "From broken flappers and fill valves to cracked porcelain and faulty wax rings, a malfunctioning toilet is a major inconvenience. Swift Flo provides prompt toilet repair and installs water-saving, high-efficiency replacement models.",
    details: [
      "Elimination of persistent toilet running, phantom flushing, and weak flushes.",
      "Wax ring replacement and flange repairs to prevent floor rot and leaks.",
      "Installation of modern dual-flush and comfort-height toilets.",
      "Heavy blockage extraction and line verification.",
    ],
    icon: "alert",
    image: "toiletRepair",
  },
  {
    slug: "bathroom-plumbing",
    name: "Bathroom & Remodel Plumbing",
    summary:
      "Comprehensive rough-in, line relocation, and finish plumbing for bathroom and kitchen renovations.",
    description:
      "Planning a bathroom or kitchen renovation in Middle Tennessee? Swift Flo Plumbing Services provides seamless remodel plumbing, from rerouting water lines and drain stacks to installing luxurious showers, tubs, and double vanities.",
    details: [
      "Rough-in plumbing layout conforming strictly to Tennessee building codes.",
      "Water supply and waste pipe rerouting for custom floor plans.",
      "Walk-in shower, tub-to-shower conversion, and freestanding tub plumbing.",
      "Comprehensive pressure testing and aesthetic trim installations.",
    ],
    icon: "wrench",
    image: "bathroom",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
