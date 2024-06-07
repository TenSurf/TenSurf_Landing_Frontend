import { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_HUB_URL;

export default function () :MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      
    },
    sitemap: `${url}/sitemap.xml`,
  }
}