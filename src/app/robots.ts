import { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_TENSURF_URL;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${url}/sitemap.xml`,
  };
}
