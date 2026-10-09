import { ServicesPageContent } from "@/components/ServicesPageContent";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Plumbing Services",
  description: `Professional plumbing services from ${site.name} throughout ${site.locationFull}. Request a visit ${site.hours.days}, ${site.hours.time}.`,
  path: "/services",
  keywords: [
    "plumbing services Nashville",
    "drain cleaning Middle Tennessee",
    "camera inspections plumber",
    "water filtration system installation",
    "water heater repairs and replacement",
    "bathroom remodeling plumbing",
    "water and sewer excavation repairs",
    "professional plumber Middle Tennessee",
  ],
});

export default function ServicesPage() {
  return <ServicesPageContent />;
}
