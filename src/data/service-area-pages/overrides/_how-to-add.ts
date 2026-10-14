/**
 * HOW TO ADD / EDIT ONE CITY × SERVICE PAGE
 * -----------------------------------------
 * Dedicated content (required) lives here:
 *   src/data/services/{serviceSlug}/areas/{areaSlug}.ts
 *
 * Dedicated route page (required) lives here:
 *   src/app/service-areas/{areaSlug}/{serviceSlug}/page.tsx
 *
 * Example:
 *   services/smyrna-tn/water-heater-repairs-replacement.ts
 *   app/service-areas/smyrna-tn/water-heater-repairs-replacement/page.tsx
 *
 * 1. Export a default CityServicePageContent object with full page copy,
 *    FAQs (10+), and metaTitle / metaDescription.
 * 2. Register it in services/index.ts under `${areaSlug}::${serviceSlug}`.
 * 3. Add or regenerate the matching page.tsx route wrapper.
 *
 * City pages:   cities/{areaSlug}.ts → cities/index.ts
 *               app/service-areas/{areaSlug}/page.tsx
 * Service hubs: hubs/{serviceSlug}.ts → hubs/index.ts
 *               app/service-areas/for/{serviceSlug}/page.tsx
 *
 * Or regenerate content + route pages:
 *   node scripts/generate-service-area-content.mjs
 *   node scripts/generate-service-area-pages.mjs
 *
 * Page URL: /service-areas/{areaSlug}/{serviceSlug}
 */

export {};
