import { loader } from 'fumadocs-core/source';
import { defineDocs } from 'fumadocs-mdx/macro';
import { metaSchema, pageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const blogSchema = pageSchema.extend({
  author: z.string().default('Peermeld Team'),
  date: z.string(),
  category: z.string(),
  tags: z.array(z.string()).default([]),
});

const blogCollection = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: blogSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blogSource = loader({
  baseUrl: '/blog',
  source: blogCollection.toFumadocsSource(),
  plugins: [],
});

export type BlogPage = (typeof blogSource)['$inferPage'] & {
  data: (typeof blogSource)['$inferPage']['data'] & {
    author: string;
    date: string;
    category: string;
    tags: string[];
  };
};

export const BLOG_CATEGORIES: Record<string, { label: string; description: string }> = {
  'getting-started': {
    label: 'Getting Started',
    description:
      'Beginner guides for joining Peermeld, setting up your account, claiming a subdomain and making your first post on the Feed.',
  },
  'feed-mastery': {
    label: 'Feed Mastery',
    description:
      'Deep dives into the Peermeld Feed at peermeld.com/feed — posting, ranking, engagement loops and content strategy.',
  },
  'personal-branding': {
    label: 'Profile & Personal Branding',
    description:
      'Build a magnetic Peermeld profile, optimise it for Google with your username.peermeld.com subdomain and grow a memorable personal brand.',
  },
  'portfolio-projects': {
    label: 'Portfolio & Projects',
    description:
      'Project showcases, portfolio blocks, tech stack tags, build logs and everything about presenting real work on Peermeld.',
  },
  'launch-strategy': {
    label: 'Launch Strategy',
    description:
      'How to rank on the Peermeld Launch weekly leaderboard, collect upvotes and turn a product launch into lasting traction.',
  },
  'networking-growth': {
    label: 'Networking & Growth',
    description:
      'Use the Peermeld directory, Peer Match, Meld Spaces, Project Rooms and company pages to find collaborators and grow.',
  },
  'rewards-streaks': {
    label: 'Streaks, Wallet & Rewards',
    description:
      'Understand Peermeld streaks, Top Streaks This Week, the Peers Wallet and the reward system — and turn consistency into reputation.',
  },
  comparisons: {
    label: 'Comparisons & Alternatives',
    description:
      'Honest, detailed comparisons of Peermeld with LinkedIn, X, Product Hunt, dev.to and other professional networks.',
  },
  professions: {
    label: 'Peermeld for Every Profession',
    description:
      'How developers, designers, founders, students, freelancers and creators each get value from Peermeld.',
  },
  'advanced-strategy': {
    label: 'Advanced Strategy',
    description:
      'Power-user playbooks: analytics, content calendars, cross-posting, SEO for your subdomain and compounding growth on Peermeld.',
  },
};

export function getBlogPosts(): BlogPage[] {
  return (blogSource.getPages() as BlogPage[])
    .slice()
    .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}

export function getBlogPost(slug: string): BlogPage | undefined {
  return blogSource.getPage([slug]) as BlogPage | undefined;
}

export function getPostsByCategory(category: string): BlogPage[] {
  return getBlogPosts().filter((p) => p.data.category === category);
}

export function getRelatedPosts(page: BlogPage, count = 3): BlogPage[] {
  const sameCategory = getBlogPosts().filter(
    (p) => p.slugs[0] !== page.slugs[0] && p.data.category === page.data.category,
  );
  const others = getBlogPosts().filter(
    (p) => p.slugs[0] !== page.slugs[0] && p.data.category !== page.data.category,
  );
  return [...sameCategory, ...others].slice(0, count);
}

export function getBlogOgSegments(page: BlogPage) {
  const segments = [...page.slugs, 'image.webp'];
  return { segments, url: `/og/blog/${segments.join('/')}` };
}

export function formatBlogDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
