import { getPageImageUrl, getPageMarkdownUrl, source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  MarkdownCopyButton,
  ViewOptionsPopover,
} from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';
import { JsonLd } from '@/components/json-ld';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { gitConfig } from '@/lib/shared';
import { breadcrumbJsonLd, techArticleJsonLd } from '@/lib/seo';

const SECTION_LABELS: Record<string, string> = {
  'getting-started': 'Getting Started',
  feed: 'The Feed',
  profile: 'Profile & Portfolio',
  projects: 'Projects & Build Logs',
  launch: 'Launch',
  network: 'Network & Discovery',
  rewards: 'Streaks, Wallet & Rewards',
};

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const markdownUrl = getPageMarkdownUrl(page).url;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Docs', url: '/docs' },
    ...(page.slugs.length > 1
      ? [
          {
            name: SECTION_LABELS[page.slugs[0]] ?? page.slugs[0],
            url: `/docs/${page.slugs[0]}`,
          },
        ]
      : []),
    { name: page.data.title, url: page.url },
  ];

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <JsonLd
        data={[
          techArticleJsonLd({
            title: page.data.title,
            description: page.data.description,
            url: page.url,
            image: getPageImageUrl(page).url,
          }),
          breadcrumbJsonLd(breadcrumbs),
        ]}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <div className="flex flex-row gap-2 items-center border-b pb-6">
        <MarkdownCopyButton markdownUrl={markdownUrl} />
        <ViewOptionsPopover
          markdownUrl={markdownUrl}
          githubUrl={`https://github.com/${gitConfig.user}/${gitConfig.repo}/blob/${gitConfig.branch}/content/docs/${page.path}`}
        />
      </div>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            // this allows you to link to other pages with relative file paths
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: PageProps<'/docs/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    alternates: { canonical: page.url },
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: page.url,
      type: 'article',
      images: getPageImageUrl(page).url,
    },
    twitter: {
      card: 'summary_large_image',
      title: page.data.title,
      description: page.data.description,
      images: [getPageImageUrl(page).url],
    },
  };
}
