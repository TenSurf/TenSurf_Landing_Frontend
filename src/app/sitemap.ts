import { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_HUB_URL;

export default function (): MetadataRoute.Sitemap {
  return [
    {
      url: `${url}`,
      priority: 1,
      lastModified: new Date(),
    },
    {
      url: `${url}/tools/WidgetSurf`,
      priority: .8,
      lastModified: new Date(),
    },
    {
      url: `${url}/terms-of-use`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/risk-disclosure`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/refund-policy`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/privacy-policy`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/faq`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/contact-us`,
      priority: .7,
      lastModified: new Date(),
    },
    {
      url: `${url}/about-us`,
      priority: .7,
      lastModified: new Date(),
    },
  ]
}