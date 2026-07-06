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
      url: `${url}/vibe-trading`,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${url}/waitlist`,
      priority: 0.9,
      lastModified: new Date(),
    },
    {
      url: `${url}/plans`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${url}/compare`,
      priority: 0.8,
      lastModified: new Date(),
    },
    {
      url: `${url}/compare/bloodhound`,
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${url}/compare/build-alpha`,
      priority: 0.6,
      lastModified: new Date(),
    },
    {
      url: `${url}/team`,
      priority: 0.6,
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
