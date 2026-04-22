import type { MetadataRoute } from "next";
import { blogSlugs, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-04-21");

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/products`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/factory-inspection`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${siteUrl}/blog/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const lpRoutes: MetadataRoute.Sitemap = [
    "bulk-bbq-briquettes",
    "middle-east-charcoal-export",
    "private-label-bbq-charcoal",
  ].map((slug) => ({
    url: `${siteUrl}/lp/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...blogRoutes, ...lpRoutes];
}
