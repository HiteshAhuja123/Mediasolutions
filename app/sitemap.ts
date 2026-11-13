import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ Update the base URL to the actual domain before launch
  const baseUrl = 'https://mediasolutions.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}

