import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-10-16");
  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "monthly", priority: 1 },
    { url: absoluteUrl("/solutions/"), lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: absoluteUrl("/studio/"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog/"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}/`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: absoluteUrl("/privacy/"), lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: absoluteUrl("/terms/"), lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
