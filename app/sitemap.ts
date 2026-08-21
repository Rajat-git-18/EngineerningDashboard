import type { MetadataRoute } from "next";

import { getAllProjectSlugs } from "@/lib/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = getAllProjectSlugs().map((slug) => ({
    url: `${siteConfig.url}/work/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectRoutes,
  ];
}
