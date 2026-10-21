import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://asiaplastik.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/prototype"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
