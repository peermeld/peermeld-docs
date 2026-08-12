import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { BLOG_CATEGORIES, getBlogPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = false;

const BUILD_DATE = '2026-08-12';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/docs`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: BUILD_DATE,
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  const docsRoutes: MetadataRoute.Sitemap = source
    .getPages()
    .filter((page) => page.url !== '/docs')
    .map((page) => ({
      url: `${SITE_URL}${page.url}`,
      lastModified: BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.8,
    }));

  const categoryRoutes: MetadataRoute.Sitemap = Object.keys(BLOG_CATEGORIES).map((category) => ({
    url: `${SITE_URL}/blog/category/${category}`,
    lastModified: BUILD_DATE,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${SITE_URL}${post.url}`,
    lastModified: post.data.date,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...docsRoutes, ...categoryRoutes, ...postRoutes];
}
