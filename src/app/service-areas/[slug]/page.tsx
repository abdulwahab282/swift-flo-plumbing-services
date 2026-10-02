import { notFound } from "next/navigation";
import { ServiceAreaDetail } from "@/components/ServiceAreaDetail";
import { getServiceArea, serviceAreas } from "@/data/service-areas";
import { createMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    return { title: "Service area" };
  }

  const onlyArea = serviceAreas.length === 1;

  return createMetadata({
    title: `Plumbing in ${area.label}`,
    description: area.summary,
    path: onlyArea ? "/service-areas" : `/service-areas/${area.slug}`,
  });
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  return <ServiceAreaDetail area={area} />;
}
