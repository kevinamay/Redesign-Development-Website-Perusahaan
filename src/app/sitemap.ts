import type { MetadataRoute } from "next";
import { articlesSummary } from "@/data/articlesSummary";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://asiaplastik.com";
  const now = new Date();

  // Core static marketing and product pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/article`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/partner`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Dynamic routes for all 176 published articles
  const articleRoutes: MetadataRoute.Sitemap = articlesSummary.map((article) => {
    const parsedDate = new Date(article.date);
    const lastModified = isNaN(parsedDate.getTime()) ? now : parsedDate;

    return {
      url: `${baseUrl}/article/${article.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
