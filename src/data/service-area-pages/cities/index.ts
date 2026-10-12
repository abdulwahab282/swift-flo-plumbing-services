import type { CityPageContent } from "@/data/service-area-pages/types";
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

export const cityPageContentBySlug: Record<string, CityPageContent> = {
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

export function getCityPageContent(areaSlug: string): CityPageContent | undefined {
  return cityPageContentBySlug[areaSlug];
}

export function hasCityPageContent(areaSlug: string) {
  return Boolean(cityPageContentBySlug[areaSlug]);
}
