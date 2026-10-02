import { site, weekDays } from "@/data/site";

export function LocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: site.name,
    description: `${site.name} provides ${site.service.toLowerCase()} in ${site.locationFull}.`,
    url: site.url,
    areaServed: {
      "@type": "City",
      name: site.city,
      containedInPlace: {
        "@type": "State",
        name: site.stateName,
      },
    },
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
