import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // ⚠️ Update the base URL to the actual domain before launch
  const baseUrl = 'https://mediasolutions.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

