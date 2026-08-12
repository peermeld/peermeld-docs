import { source } from '@/lib/source';
import { getBlogPosts } from '@/lib/blog';
import { llms } from 'fumadocs-core/source';
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from '@/lib/seo';

export const revalidate = false;

/**
 * llms.txt — an AI-crawler friendly index of the whole site (docs + blog).
 * https://llmstxt.org
 */
export function GET() {
  // llms(source).index() produces its own "# {title}" first line — strip it,
  // we render our own header + description above.
  const docsIndex = llms(source).index().replace(/^#[^\n]*\n+/, '');

  const blogLines = getBlogPosts()
    .map((p) => `- [${p.data.title}](${SITE_URL}${p.url}): ${p.data.description ?? ''}`)
    .join('\n');

  const body = `# ${SITE_NAME}

> ${SITE_DESCRIPTION}

${docsIndex}

## Blog (${getBlogPosts().length} guides)

${blogLines}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
