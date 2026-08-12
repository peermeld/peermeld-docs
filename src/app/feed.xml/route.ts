import { BLOG_CATEGORIES, getBlogPosts } from '@/lib/blog';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = false;

function escapeXml(input: string): string {
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * RSS 2.0 feed for the Peermeld Blog — helps discovery in feed readers and
 * content aggregators, and is one more crawlable index of all articles.
 */
export function GET() {
  const posts = getBlogPosts();
  const lastBuildDate = new Date().toUTCString();

  const items = posts
    .map((post) => {
      const link = `${SITE_URL}${post.url}`;
      const pubDate = new Date(`${post.data.date}T08:00:00Z`).toUTCString();
      const category = BLOG_CATEGORIES[post.data.category]?.label ?? post.data.category;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>hello@peermeld.com (${escapeXml(post.data.author)})</author>
      <category>${escapeXml(category)}</category>
      <description>${escapeXml(post.data.description ?? '')}</description>
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${SITE_URL}/blog</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE_URL}/logo.png</url>
      <title>${SITE_NAME} Blog</title>
      <link>${SITE_URL}/blog</link>
    </image>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
