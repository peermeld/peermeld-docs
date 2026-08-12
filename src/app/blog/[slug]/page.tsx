import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { getMDXComponents } from '@/components/mdx';
import { JsonLd } from '@/components/json-ld';
import { BlogCard } from '@/components/blog-card';
import {
  BLOG_CATEGORIES,
  formatBlogDate,
  getBlogOgSegments,
  getBlogPost,
  getBlogPosts,
  getRelatedPosts,
} from '@/lib/blog';
import {
  PEERMELD_FEED_URL,
  blogPostingJsonLd,
  breadcrumbJsonLd,
  ogImageFor,
} from '@/lib/seo';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const page = getBlogPost(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const category = BLOG_CATEGORIES[page.data.category];
  const related = getRelatedPosts(page);
  const og = getBlogOgSegments(page);

  const processed = await page.data.getText('processed');
  const wordCount = processed.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(2, Math.round(wordCount / 200));

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12">
      <JsonLd
        data={[
          blogPostingJsonLd({
            title: page.data.title,
            description: page.data.description,
            url: page.url,
            image: og.url,
            datePublished: page.data.date,
            author: page.data.author,
            keywords: page.data.tags,
            wordCount,
          }),
          breadcrumbJsonLd([
            { name: 'Home', url: '/' },
            { name: 'Blog', url: '/blog' },
            { name: category?.label ?? page.data.category, url: `/blog/category/${page.data.category}` },
            { name: page.data.title, url: page.url },
          ]),
        ]}
      />

      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-fd-muted-foreground">
        <Link href="/" className="hover:text-fd-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-fd-primary">Blog</Link>
        <span className="mx-2">/</span>
        <Link href={`/blog/category/${page.data.category}`} className="hover:text-fd-primary">
          {category?.label ?? page.data.category}
        </Link>
      </nav>

      <article itemScope itemType="https://schema.org/BlogPosting">
        <header className="mb-8">
          <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl" itemProp="headline">
            {page.data.title}
          </h1>
          <p className="mb-4 text-lg text-fd-muted-foreground" itemProp="description">
            {page.data.description}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-fd-muted-foreground">
            <span itemProp="author">{page.data.author}</span>
            <time dateTime={page.data.date} itemProp="datePublished">
              {formatBlogDate(page.data.date)}
            </time>
            <span>{readingTime} min read</span>
          </div>
          {page.data.tags.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tags">
              {page.data.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-fd-muted px-2.5 py-0.5 text-xs text-fd-muted-foreground"
                >
                  #{tag}
                </li>
              ))}
            </ul>
          )}
        </header>

        {page.data.toc.length > 1 && (
          <InlineTOC items={page.data.toc} className="mb-8">
            Table of contents
          </InlineTOC>
        )}

        <div className="prose flex-1" itemProp="articleBody">
          <MDX components={getMDXComponents()} />
        </div>

        <footer className="mt-12 rounded-xl border border-fd-border bg-fd-card p-6">
          <h2 className="mb-2 text-lg font-semibold">Put this guide into practice</h2>
          <p className="mb-4 text-sm text-fd-muted-foreground">
            Open the Peermeld Feed and apply what you learned — it takes less than five minutes.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={PEERMELD_FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-fd-primary px-4 py-2 text-sm font-medium text-fd-primary-foreground"
            >
              Open Peermeld Feed
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center rounded-lg border border-fd-border px-4 py-2 text-sm font-medium hover:bg-fd-accent"
            >
              Read the docs
            </Link>
          </div>
        </footer>
      </article>

      {related.length > 0 && (
        <section aria-label="Related guides" className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">Keep reading</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {related.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slugs[0] }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getBlogPost(slug);
  if (!page) notFound();

  const og = getBlogOgSegments(page);

  return {
    title: page.data.title,
    description: page.data.description,
    keywords: page.data.tags,
    authors: [{ name: page.data.author }],
    alternates: { canonical: page.url },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      type: 'article',
      publishedTime: page.data.date,
      modifiedTime: page.data.date,
      authors: [page.data.author],
      section: BLOG_CATEGORIES[page.data.category]?.label,
      tags: page.data.tags,
      images: [ogImageFor(og.url, page.data.title)],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      images: [og.url],
    },
  };
}
