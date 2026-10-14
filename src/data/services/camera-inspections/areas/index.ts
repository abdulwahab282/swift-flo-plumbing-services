import type { CityServicePageContent } from "@/data/service-area-pages/types";
import { listPagesForService } from "@/data/service-area-pages";
import { serviceAreaRoutes } from "@/lib/service-area-routes";
import Brentwood from "./brentwood-tn";
import Franklin from "./franklin-tn";
import Gallatin from "./gallatin-tn";
import Hendersonville from "./hendersonville-tn";
import LaVergne from "./la-vergne-tn";
import Lebanon from "./lebanon-tn";
import MtJuliet from "./mt-juliet-tn";
import Murfreesboro from "./murfreesboro-tn";
import Nashville from "./nashville-tn";
import Smyrna from "./smyrna-tn";
import SpringHill from "./spring-hill-tn";
import ThompsonsStation from "./thompsons-station-tn";

export const SERVICE_SLUG = "camera-inspections" as const;

export const serviceHubHref = serviceAreaRoutes.serviceHub(SERVICE_SLUG);

/** Hardcoded city pages for this service only. */
export const areaPagesByCitySlug: Record<string, CityServicePageContent> = {
  "brentwood-tn": Brentwood,
  "franklin-tn": Franklin,
  "gallatin-tn": Gallatin,
  "hendersonville-tn": Hendersonville,
  "la-vergne-tn": LaVergne,
  "lebanon-tn": Lebanon,
  "mt-juliet-tn": MtJuliet,
  "murfreesboro-tn": Murfreesboro,
  "nashville-tn": Nashville,
  "smyrna-tn": Smyrna,
  "spring-hill-tn": SpringHill,
  "thompsons-station-tn": ThompsonsStation,
};

export function getAreaPage(citySlug: string) {
  return areaPagesByCitySlug[citySlug];
}

export function listAreaCitySlugs() {
  return Object.keys(areaPagesByCitySlug);
}

/** Finder / nav links for this service’s city pages only. */
export function getServiceAreaPages() {
  return listPagesForService(SERVICE_SLUG);
}
