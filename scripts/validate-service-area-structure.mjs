/**
 * Validates Structure 2 Service Area architecture:
 * - every city / hub / covered city×service has page.tsx + content
 * - no orphan routes outside coverage
 * - content files meet FAQ / section minimums
 * - exact duplicate content bodies are reported
 *
 * Usage: node scripts/validate-service-area-structure.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import {
  cities,
  getCitiesForService,
  listCoveredCombos,
  services,
} from "./service-area-config.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const appRoot = path.join(root, "src", "app", "service-areas");
const dataRoot = path.join(root, "src", "data", "service-area-pages");
const servicesDataRoot = path.join(root, "src", "data", "services");

const errors = [];
const warnings = [];

function exists(filePath) {
  return fs.existsSync(filePath);
}

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function requireFile(filePath, label) {
  if (!exists(filePath)) {
    errors.push(`Missing ${label}: ${path.relative(root, filePath)}`);
    return false;
  }
  return true;
}

function stripCityNames(text) {
  let out = text;
  for (const city of cities) {
    out = out.split(city.city).join("[CITY]");
    out = out.split(city.label).join("[LABEL]");
    out = out.split(city.community).join("[COMMUNITY]");
  }
  return out.replace(/\s+/g, " ").trim();
}

function contentFingerprint(filePath) {
  const raw = read(filePath);
  const body = raw
    .replace(/^import[\s\S]*?;\s*/m, "")
    .replace(/\/\*\*[\s\S]*?\*\//, "")
    .replace(/export default content;\s*$/, "");
  return createHash("sha1").update(stripCityNames(body)).digest("hex");
}

function countFaqs(filePath) {
  const text = read(filePath);
  const matches = text.match(/"question"\s*:/g);
  return matches?.length ?? 0;
}

function hasSectionMarkers(filePath, markers) {
  const text = read(filePath);
  return markers.filter((marker) => !text.includes(marker));
}

// --- Required city pages ---
for (const city of cities) {
  requireFile(
    path.join(appRoot, city.slug, "page.tsx"),
    `city route page.tsx`,
  );
  const contentFile = path.join(dataRoot, "cities", `${city.slug}.ts`);
  if (requireFile(contentFile, `city content`)) {
    const faqCount = countFaqs(contentFile);
    if (faqCount < 10) {
      errors.push(
        `City ${city.slug}: only ${faqCount} FAQs (need ≥10)`,
      );
    }
  }
}

// --- Required hubs ---
for (const service of services) {
  if (getCitiesForService(service.slug).length === 0) continue;
  requireFile(
    path.join(appRoot, "for", service.slug, "page.tsx"),
    `hub route page.tsx`,
  );
  const contentFile = path.join(servicesDataRoot, service.slug, "hub.ts");
  if (requireFile(contentFile, `hub content`)) {
    const faqCount = countFaqs(contentFile);
    if (faqCount < 10) {
      errors.push(
        `Hub ${service.slug}: only ${faqCount} FAQs (need ≥10)`,
      );
    }
  }
}

// --- Required city × service ---
const requiredCityServiceMarkers = [
  "heroTitle",
  "highlights",
  "aboutTitle",
  "servicesTitle",
  "ctaTitle",
  "overviewTitle",
  "detailsTitle",
  "whyTitle",
  "faqs",
];

const fingerprints = new Map();

for (const combo of listCoveredCombos()) {
  requireFile(
    path.join(appRoot, combo.areaSlug, combo.serviceSlug, "page.tsx"),
    `city×service route`,
  );
  const contentFile = path.join(
    servicesDataRoot,
    combo.serviceSlug,
    "areas",
    `${combo.areaSlug}.ts`,
  );
  if (requireFile(contentFile, `city×service content`)) {
    const faqCount = countFaqs(contentFile);
    if (faqCount < 10) {
      errors.push(
        `${combo.areaSlug}/${combo.serviceSlug}: only ${faqCount} FAQs (need ≥10)`,
      );
    }
    const missing = hasSectionMarkers(
      contentFile,
      requiredCityServiceMarkers,
    );
    if (missing.length) {
      errors.push(
        `${combo.areaSlug}/${combo.serviceSlug}: missing fields ${missing.join(", ")}`,
      );
    }

    const fp = contentFingerprint(contentFile);
    const key = `${combo.serviceSlug}::${fp}`;
    if (!fingerprints.has(key)) fingerprints.set(key, []);
    fingerprints.get(key).push(`${combo.areaSlug}/${combo.serviceSlug}`);
  }
}

for (const [, pages] of fingerprints) {
  if (pages.length > 1) {
    warnings.push(
      `Near-duplicate content (same service, city names stripped) across: ${pages.join(", ")}`,
    );
  }
}

// --- Orphan city×service routes outside coverage ---
const covered = new Set(
  listCoveredCombos().map((c) => `${c.areaSlug}/${c.serviceSlug}`),
);

for (const city of cities) {
  const cityDir = path.join(appRoot, city.slug);
  if (!exists(cityDir)) continue;
  for (const entry of fs.readdirSync(cityDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const serviceSlug = entry.name;
    if (!services.some((s) => s.slug === serviceSlug)) continue;
    const key = `${city.slug}/${serviceSlug}`;
    if (!covered.has(key)) {
      errors.push(
        `Orphan route outside coverage: /service-areas/${key} (remove page or add to coverage)`,
      );
    }
  }
}

// --- Index + coverage files ---
requireFile(path.join(appRoot, "page.tsx"), "service-areas index");
requireFile(path.join(dataRoot, "coverage.ts"), "coverage.ts");
requireFile(path.join(dataRoot, "cities", "index.ts"), "cities registry");
requireFile(path.join(dataRoot, "hubs", "index.ts"), "hubs registry");
requireFile(path.join(dataRoot, "services", "index.ts"), "services registry");

// --- Dynamic [slug] routes must not exist under service-areas ---
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name.startsWith("[") && entry.name.endsWith("]")) {
        errors.push(
          `Dynamic segment under service-areas is not allowed: ${path.relative(root, full)}`,
        );
      }
      walk(full);
    }
  }
}
walk(appRoot);

const comboCount = listCoveredCombos().length;
console.log(
  `Checked ${cities.length} cities, ${services.length} services, ${comboCount} covered city×service combos.`,
);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const warning of warnings) console.log(`  - ${warning}`);
}

if (errors.length) {
  console.error(`\nFailed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log("\nService Area Structure 2 validation passed.");
