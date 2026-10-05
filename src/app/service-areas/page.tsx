import { ServiceAreasPageContent } from "@/components/ServiceAreasPageContent";
import { formatServiceAreaList } from "@/data/service-areas";
import { site } from "@/data/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: `Plumbing Service Areas in ${site.region}`,
  description: `${site.name} provides professional plumbing services throughout ${site.locationFull}, including ${formatServiceAreaList(6)}. Request a visit during published business hours.`,
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return <ServiceAreasPageContent />;
}
