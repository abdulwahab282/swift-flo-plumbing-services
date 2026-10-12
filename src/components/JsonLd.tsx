import { serviceAreas } from "@/data/service-areas";
import { site, weekDays } from "@/data/site";

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; path?: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path
        ? { item: `${site.url}${item.path === "/" ? "" : item.path}` }
        : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ServiceJsonLd({
  serviceName,
  description,
  path,
  city,
  stateName,
}: {
  serviceName: string;
  description: string;
  path: string;
  city: string;
  stateName: string;
}) {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${city}`,
    description,
    url: `${site.url}${path}`,
    provider: {
      "@type": "Plumber",
      name: site.name,
      url: site.url,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "State",
        name: stateName,
      },
    },
    serviceType: serviceName,
  };

  if (site.phone) data.telephone = site.phone;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.name,
    description: `${site.name} provides ${site.service.toLowerCase()} throughout ${site.locationFull}.`,
    url: site.url,
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.city,
      containedInPlace: {
        "@type": "State",
        name: area.stateName,
      },
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.state,
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: weekDays,
      opens: site.hours.opens,
      closes: site.hours.closes,
    },
  };

  if (site.phone) data.telephone = site.phone;
  if (site.email) data.email = site.email;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
