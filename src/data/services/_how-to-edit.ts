/**
 * How to edit one service (and its service-area pages)
 * ----------------------------------------------------
 *
 * src/data/services/{service-slug}/
 *   catalog.ts              — listing / nav metadata
 *   page.ts                 — /services/{slug} page copy
 *   hub.ts                  — /service-areas/for/{slug} hub copy
 *   areas/
 *     {city-slug}.ts        — /service-areas/{city}/{service} copy (edit here)
 *     index.ts              — registry for this service’s cities only
 *
 * Dedicated routes (URLs unchanged):
 *   src/app/services/{service-slug}/page.tsx
 *   src/app/service-areas/for/{service-slug}/page.tsx
 *   src/app/service-areas/{city-slug}/{service-slug}/page.tsx
 *
 * Each city × service page imports its own content file directly.
 * Shared UI (header, hero shell, buttons) is fine; do not put another
 * service’s copy in this folder.
 */

export {};
