export const site = {
  name: "Swift Flo Plumbing Services",
  shortName: "Swift Flo",
  service: "Professional Plumbing Services",
  city: "Nashville",
  baseCity: "Smyrna",
  state: "TN",
  stateName: "Tennessee",
  region: "Middle Tennessee",
  locationLabel: "Nashville & Middle TN",
  locationFull: "Nashville and Middle Tennessee communities",
  coverageCount: 12,
  hours: {
    days: "Monday – Sunday",
    time: "8:00 AM – 8:00 PM",
    opens: "08:00",
    closes: "20:00",
  },
  phone: "629-238-8322",
  email: "swiftfloplumbing2025@gmail.com",
  url: siteUrl(),
} as const;

function siteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (productionHost) return `https://${productionHost}`;

  return "http://localhost:3000";
}

export const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function phoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
