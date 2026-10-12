/**
 * Generates dedicated page.tsx files for every Service Area URL.
 *
 * Usage: node scripts/generate-service-area-pages.mjs
 *
 * Content stays in src/data/service-area-pages/**; this script only
 * creates thin route wrappers that connect each URL to that content.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const appRoot = path.join(root, "src", "app", "service-areas");

const cities = [
  "brentwood-tn",
  "franklin-tn",
  "gallatin-tn",
  "hendersonville-tn",
  "la-vergne-tn",
  "lebanon-tn",
  "mt-juliet-tn",
  "murfreesboro-tn",
  "nashville-tn",
  "smyrna-tn",
  "spring-hill-tn",
  "thompsons-station-tn",
];

const services = [
  "drain-cleaning",
  "camera-inspections",
  "water-filtration-system-installation",
  "water-heater-repairs-replacement",
  "bathroom-remodeling",
  "water-sewer-excavation-repairs-replacements",
];

/** @param {string} slug */
function toPascalCase(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

/** @param {string} filePath @param {string} contents */
function writeFile(filePath, contents) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, contents, "utf8");
}

/** @param {string} areaSlug */
function cityPageSource(areaSlug) {
  const componentName = `${toPascalCase(areaSlug)}ServiceAreaPage`;
  return `import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServiceAreaDetail } from "@/components/ServiceAreaDetail";
import { resolveCityPage } from "@/data/service-area-pages";
import { requireServiceArea, serviceAreas } from "@/data/service-areas";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const AREA_SLUG = "${areaSlug}" as const;

const area = requireServiceArea(AREA_SLUG);
const pageContent = resolveCityPage(AREA_SLUG);
const onlyArea = serviceAreas.length === 1;
const path = onlyArea
  ? serviceAreaRoutes.index()
  : serviceAreaRoutes.city(area.slug);

export const metadata = createMetadata({
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
  path,
  keywords: [
    \`plumber \${area.city}\`,
    \`plumbing services \${area.city} TN\`,
    \`\${area.city} drain cleaning\`,
    \`\${area.city} water heater repair\`,
    \`local plumber \${area.city}\`,
    "Swift Flo Plumbing Services",
  ],
});

export default function ${componentName}() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          { name: area.label, path: serviceAreaRoutes.city(area.slug) },
        ]}
      />
      <ServiceAreaDetail area={area} pageContent={pageContent} />
    </>
  );
}
`;
}

/** @param {string} areaSlug @param {string} serviceSlug */
function cityServicePageSource(areaSlug, serviceSlug) {
  const componentName = `${toPascalCase(areaSlug)}${toPascalCase(serviceSlug)}Page`;
  return `import { BreadcrumbJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { ServiceInAreaDetail } from "@/components/ServiceInAreaDetail";
import { resolveServiceAreaPage } from "@/data/service-area-pages";
import { requireServiceArea } from "@/data/service-areas";
import { requireService } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const AREA_SLUG = "${areaSlug}" as const;
const SERVICE_SLUG = "${serviceSlug}" as const;

const area = requireServiceArea(AREA_SLUG);
const service = requireService(SERVICE_SLUG);
const path = serviceAreaRoutes.cityService(area.slug, service.slug);
const resolved = resolveServiceAreaPage(area, service);

export const metadata = createMetadata({
  title: resolved.meta.title,
  description: resolved.meta.description,
  path,
  keywords: [
    \`\${service.name} \${area.city}\`,
    \`plumber \${area.city} \${service.name.toLowerCase()}\`,
    \`\${area.city} TN plumbing\`,
    "Swift Flo Plumbing Services",
  ],
});

export default function ${componentName}() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          { name: area.city, path: serviceAreaRoutes.city(area.slug) },
          { name: service.name, path },
        ]}
      />
      <ServiceJsonLd
        serviceName={service.name}
        description={resolved.content.heroDescription}
        path={path}
        city={area.city}
        stateName={area.stateName}
      />
      <ServiceInAreaDetail area={area} service={service} resolved={resolved} />
    </>
  );
}
`;
}

/** @param {string} serviceSlug */
function serviceHubPageSource(serviceSlug) {
  const componentName = `${toPascalCase(serviceSlug)}ServiceAreasHubPage`;
  return `import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { ServiceAreaByServiceDetail } from "@/components/ServiceAreaByServiceDetail";
import { resolveServiceHubPage } from "@/data/service-area-pages";
import { requireService } from "@/data/services";
import { createMetadata } from "@/lib/metadata";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

const SERVICE_SLUG = "${serviceSlug}" as const;

const service = requireService(SERVICE_SLUG);
const pageContent = resolveServiceHubPage(service.slug);

export const metadata = createMetadata({
  title: pageContent.metaTitle,
  description: pageContent.metaDescription,
  path: serviceAreaRoutes.serviceHub(service.slug),
  keywords: [
    \`\${service.name} Middle Tennessee\`,
    \`\${service.name} Nashville\`,
    \`\${service.name} Smyrna TN\`,
    \`plumber \${service.name.toLowerCase()}\`,
    "Swift Flo Plumbing Services",
  ],
});

export default function ${componentName}() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Service Areas", path: serviceAreaRoutes.index() },
          {
            name: \`\${service.name} areas\`,
            path: serviceAreaRoutes.serviceHub(service.slug),
          },
        ]}
      />
      <ServiceAreaByServiceDetail service={service} pageContent={pageContent} />
    </>
  );
}
`;
}

let cityCount = 0;
let cityServiceCount = 0;
let hubCount = 0;

for (const city of cities) {
  writeFile(path.join(appRoot, city, "page.tsx"), cityPageSource(city));
  cityCount += 1;

  for (const service of services) {
    writeFile(
      path.join(appRoot, city, service, "page.tsx"),
      cityServicePageSource(city, service),
    );
    cityServiceCount += 1;
  }
}

for (const service of services) {
  writeFile(
    path.join(appRoot, "for", service, "page.tsx"),
    serviceHubPageSource(service),
  );
  hubCount += 1;
}

console.log(
  `Generated ${cityCount} city pages, ${cityServiceCount} city×service pages, ${hubCount} service hub pages (${cityCount + cityServiceCount + hubCount} total).`,
);
