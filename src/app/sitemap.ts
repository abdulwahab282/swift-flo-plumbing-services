import type { MetadataRoute } from "next";
import { serviceAreas } from "@/data/service-areas";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/testimonials",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...serviceAreas.map((area) => `/service-areas/${area.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
