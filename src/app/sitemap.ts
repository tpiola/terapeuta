import type { MetadataRoute } from "next";

const SITE_URL = "https://terapeuta-next.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL }];
}
