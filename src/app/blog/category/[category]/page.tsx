import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { JsonLd } from '@/components/json-ld';
import { BlogCard } from '@/components/blog-card';
import { BLOG_CATEGORIES, getPostsByCategory } from '@/lib/blog';
import { breadcrumbJsonLd, collectionPageJsonLd, ogImageFor } from '@/lib/seo';

interface Props {
  params: Promise<{ category: string }>;
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const info = BLOG_CATEGORIES[category];
  if (!info) notFound();

  const posts = getPostsByCategory(category);

  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12">
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: info.label, url: `/blog/category/${category}` },
          ]),
          collectionPageJsonLd({
            name: `${info.label} — Peermeld Blog`,
            description: info.description,
            url: `/blog/category/${category}`,
            items: posts.map((p) => ({ name: p.data.title, url: p.url })),
          }),
        ]}
      />

      <header className="mb-10 max-w-2xl">
        <p className="mb-2 text-sm font-medium text-fd-primary">
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>{' '}
          / {info.label}
        </p>
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">{info.label}</h1>
        <p className="text-fd-muted-foreground">{info.description}</p>
        <p className="mt-2 text-sm text-fd-muted-foreground">{posts.length} guides</p>
      </header>

      <section
        aria-label={`${info.label} guides`}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {posts.map((post) => (
          <BlogCard key={post.url} post={post} />
        ))}
      </section>
    </main>
  );
}

export function generateStaticParams() {
  return Object.keys(BLOG_CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const info = BLOG_CATEGORIES[category];
  if (!info) notFound();

  return {
    title: `${info.label} — Peermeld Guides`,
    description: info.description,
    alternates: { canonical: `/blog/category/${category}` },
    openGraph: {
      title: `${info.label} — Peermeld Guides`,
      description: info.description,
      url: `/blog/category/${category}`,
      type: 'website',
      images: [ogImageFor('/og-cover.jpg', `${info.label} — Peermeld Guides`)],
    },
    twitter: { card: 'summary_large_image' },
  };
}
