import type { ServiceArea } from "@/data/service-areas";

export function MapEmbed({ area }: { area: ServiceArea }) {
  const src = `https://www.openstreetmap.org/export/embed.html?bbox=${encodeURIComponent(area.map.bbox)}&layer=mapnik&marker=${area.map.lat}%2C${area.map.lon}`;
  const external = `https://www.openstreetmap.org/?mlat=${area.map.lat}&mlon=${area.map.lon}#map=12/${area.map.lat}/${area.map.lon}`;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-sand bg-white shadow-sm">
      <iframe
        title={`Map of ${area.city}, ${area.stateName}`}
        src={src}
        className="h-80 w-full border-0 sm:h-96"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="flex flex-col gap-2 border-t border-sand px-5 py-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          Map of {area.city}, {area.stateName}. A street address has not been
          published.
        </p>
        <a
          href={external}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-tide-deep underline decoration-copper/60 underline-offset-4"
        >
          Open the map
        </a>
      </div>
    </div>
  );
}
