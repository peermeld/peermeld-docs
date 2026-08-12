import { notFound } from 'next/navigation';
import { ImageResponse } from 'takumi-js/response';
import { generate as DefaultImage } from 'fumadocs-ui/og/takumi';
import { getBlogOgSegments, getBlogPosts } from '@/lib/blog';
import { appName } from '@/lib/shared';

export const revalidate = false;

export async function GET(_req: Request, { params }: RouteContext<'/og/blog/[...slug]'>) {
  const { slug } = await params;
  const page = getBlogPosts().find((p) => p.slugs.join('/') === slug.slice(0, -1).join('/'));
  if (!page) notFound();

  return new ImageResponse(
    <DefaultImage
      title={page.data.title}
      description={page.data.description ?? 'Peermeld Blog'}
      site={appName}
    />,
    {
      width: 1200,
      height: 630,
      format: 'webp',
    },
  );
}

export function generateStaticParams() {
  return getBlogPosts().map((page) => ({
    slug: getBlogOgSegments(page).segments,
  }));
}
