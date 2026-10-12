/**
 * @deprecated Use `src/data/service-area-pages/services/` dedicated content files.
 * Kept as a thin re-export so older imports still work.
 */
export type { CityServicePageContent as ServiceInAreaOverride } from "@/data/service-area-pages/types";
export {
  getCityServicePageContent as getServiceInAreaOverride,
  pageContentKey as serviceInAreaOverrideKey,
} from "@/data/service-area-pages/services";
