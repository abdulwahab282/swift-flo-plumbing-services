import type { MetadataRoute } from "next";
import {
  listAllServiceAreaPages,
  listCityParams,
  listServiceHubParams,
} from "@/data/service-area-pages";
import { services } from "@/data/services";
import { site } from "@/data/site";
import { serviceAreaRoutes } from "@/lib/service-area-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [
    "",
    "/about",
    "/services",
    serviceAreaRoutes.index(),
    "/testimonials",
    "/contact",
    ...services.map((service) => `/services/${service.slug}`),
    ...listServiceHubParams().map((item) =>
      serviceAreaRoutes.serviceHub(item.slug),
    ),
    ...listCityParams().map((item) => serviceAreaRoutes.city(item.slug)),
    ...listAllServiceAreaPages().map((page) => page.href),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
