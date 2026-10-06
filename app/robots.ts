import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const isProduction = process.env.ALLOW_INDEXING !== 'false';
  
  return {
    rules: {
      userAgent: '*',
      allow: isProduction ? '/' : '/',
      disallow: isProduction ? '' : '/',
    },
    sitemap: 'https://wildschutmakelaar-site.vercel.app/sitemap.xml',
  };
}
