import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/json-ld';
import { BlogCard } from '@/components/blog-card';
import { BLOG_CATEGORIES, getBlogPosts } from '@/lib/blog';
import {
  absoluteUrl,
  breadcrumbJsonLd,
  collectionPageJsonLd,
  ogImageFor,
} from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Peermeld Blog — 100+ Guides, Tips & Strategies',
  description:
    'In-depth Peermeld guides: master the Feed, grow your profile SEO, rank on Launch, earn streaks and rewards, and turn Peermeld into your career engine.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Peermeld Blog — Guides, Tips & Strategies',
    description:
      'In-depth Peermeld guides: master the Feed, grow your profile SEO, rank on Launch, earn streaks and rewards.',
    url: '/blog',
    type: 'website',
    images: [ogImageFor('/og-cover.jpg', 'Peermeld Blog')],
  },
  twitter: { card: 'summary_large_image' },
};

export default function BlogIndex() {
  const posts = getBlogPosts();

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
          ]),
          collectionPageJsonLd({
            name: 'Peermeld Blog — Guides, Tips & Strategies',
            description:
              'Every Peermeld guide: the Feed, profiles, portfolios, projects, launches, networking, streaks, wallet and rewards.',
            url: '/blog',
            items: posts.map((p) => ({ name: p.data.title, url: p.url })),
          }),
        ]}
      />
      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-fd-primary">The Peermeld Blog</p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Learn Peermeld, one guide at a time
        </h1>
        <p className="text-fd-muted-foreground">
          {posts.length} hands-on guides covering everything on{' '}
          <a
            href="https://peermeld.com/feed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-fd-primary underline"
          >
            peermeld.com/feed
          </a>{' '}
          and beyond — posting strategies, profile SEO, launches, streaks, the Peers Wallet and
          growth playbooks for every profession. New to Peermeld? Start with the{' '}
          <Link href="/docs" className="text-fd-primary underline">
            documentation
          </Link>
          .
        </p>
      </header>

      <nav aria-label="Blog categories" className="mb-10 flex flex-wrap gap-2">
        {Object.entries(BLOG_CATEGORIES).map(([slug, cat]) => (
          <Link
            key={slug}
            href={`/blog/category/${slug}`}
            className="rounded-full border border-fd-border px-3 py-1.5 text-xs font-medium text-fd-muted-foreground transition-colors hover:border-fd-primary hover:text-fd-primary"
          >
            {cat.label} ({posts.filter((p) => p.data.category === slug).length})
          </Link>
        ))}
      </nav>

      <section aria-label="All blog posts" className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </section>
    </main>
  );
}
