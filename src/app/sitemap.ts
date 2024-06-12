import { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_TENSURF_URL;
export const revalidate = 30 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${url}`,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${url}/tools/WidgetSurf`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${url}/terms-of-use`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/risk-disclosure`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/refund-policy`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/privacy-policy`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/faq`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/contact-us`,
      priority: 0.7,
      lastModified: new Date(),
    },
    {
      url: `${url}/about-us`,
      priority: 0.7,
      lastModified: new Date(),
    },
  ];
}
