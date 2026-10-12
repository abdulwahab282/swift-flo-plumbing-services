/**
 * @deprecated Override registry replaced by dedicated content files in
 * `src/data/service-area-pages/services/{areaSlug}/{serviceSlug}.ts`.
 *
 * Re-exports the new registry so older imports keep working.
 */
export {
  getCityServicePageContent as getServiceAreaPageOverride,
  hasCityServicePageContent as hasServiceAreaPageOverride,
  pageContentKey as pageOverrideKey,
  cityServicePageContent as serviceAreaPageOverrides,
} from "@/data/service-area-pages/services";
