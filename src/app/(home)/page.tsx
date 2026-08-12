import Link from 'next/link';
import type { Metadata } from 'next';
import { JsonLd } from '@/components/json-ld';
import { BlogCard } from '@/components/blog-card';
import { getBlogPosts } from '@/lib/blog';
import { PEERMELD_FEED_URL, PEERMELD_URL, faqJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: {
    absolute: 'Peermeld Docs — Official Guide to the Peermeld Feed, Portfolio & Launch',
  },
  description:
    'The complete guide to Peermeld: master the Feed at peermeld.com/feed, claim your username.peermeld.com subdomain, build a standout portfolio, rank on Launch and grow your professional network.',
  alternates: { canonical: '/' },
};

const SECTIONS: { title: string; href: string; description: string; icon: string }[] = [
  {
    title: 'Getting Started',
    href: '/docs/getting-started',
    description: 'Create your account with Google, claim yourname.peermeld.com and set up a profile that ranks on Google.',
    icon: '🚀',
  },
  {
    title: 'The Feed',
    href: '/docs/feed',
    description: 'Everything about peermeld.com/feed — posts, the Newest/Trending/Following tabs, upvotes, comments and Sources.',
    icon: '📡',
  },
  {
    title: 'Profile & Portfolio',
    href: '/docs/profile',
    description: 'Portfolio blocks, themes, banners and profile SEO that turns your Peermeld page into a personal website.',
    icon: '🧑‍💼',
  },
  {
    title: 'Projects & Build Logs',
    href: '/docs/projects',
    description: 'Showcase real work with project pages, tech stack tags, screenshots and markdown build logs.',
    icon: '🛠️',
  },
  {
    title: 'Launch',
    href: '/docs/launch',
    description: 'Ship your product on the weekly Launch leaderboard, collect upvotes and win the #1 spot.',
    icon: '🏁',
  },
  {
    title: 'Network & Discovery',
    href: '/docs/network',
    description: 'The /grow directory, Peer Match, Meld Spaces, company pages and global talent search.',
    icon: '🤝',
  },
  {
    title: 'Streaks, Wallet & Rewards',
    href: '/docs/rewards',
    description: 'Build daily streaks, climb Top Streaks This Week and understand the Peers Wallet and reward system.',
    icon: '🔥',
  },
  {
    title: 'FAQ & Reference',
    href: '/docs/faq',
    description: 'Quick answers about accounts, subdomains, posting, following, streaks, rewards and more.',
    icon: '💬',
  },
];

const FAQS = [
  {
    question: 'What is Peermeld?',
    answer:
      'Peermeld is a professional network for developers, designers, founders and creators to showcase real work, find collaborators and launch ideas. It combines a public Feed, SEO-friendly profiles on your own subdomain (yourname.peermeld.com), project showcases, a weekly product Launch leaderboard, and a reputation system with streaks, a Peers Wallet and rewards.',
  },
  {
    question: 'How do I use the Peermeld Feed?',
    answer:
      'Open peermeld.com/feed and sign in with Google. Type in the "What\'s happening?" composer and press Post to publish. Browse three tabs — Newest (chronological), Trending (ranked by recent engagement) and Following (people you follow). Upvote posts you like, reply to join discussions, and follow people or Sources like freeCodeCamp and Fireship to shape your feed.',
  },
  {
    question: 'Is Peermeld free to use?',
    answer:
      'Yes. Creating an account, posting on the Feed, claiming a yourname.peermeld.com subdomain, building a portfolio, publishing projects and launching products are all free. Consistent activity earns streaks and rewards through the Peers Wallet.',
  },
  {
    question: 'How do I claim my yourname.peermeld.com subdomain?',
    answer:
      'Go to peermeld.com and use the subdomain checker, or open Peermeld Docs → Claim your Subdomain. Type a name with at least 4 characters (it cannot be only numbers), check availability, then sign in with Google — the subdomain is attached to your profile automatically if it is still free.',
  },
  {
    question: 'How does Peermeld help my career?',
    answer:
      'Your Peermeld profile is built to rank on Google: a dedicated subdomain, your real name, headline, bio, posts, portfolio and projects in one crawlable page. Posting build logs and launching products on the Feed and Launch board creates public proof of work that recruiters and collaborators can discover organically.',
  },
];

export default function HomePage() {
  const latestPosts = getBlogPosts().slice(0, 6);

  return (
    <main className="flex flex-1 flex-col">
      <JsonLd data={faqJsonLd(FAQS)} />

      {/* Hero */}
      <section className="border-b border-fd-border px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 inline-block rounded-full border border-fd-border px-3 py-1 text-xs font-medium text-fd-muted-foreground">
            Official documentation for{' '}
            <a
              href={PEERMELD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fd-primary"
            >
              peermeld.com
            </a>
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Learn Peermeld.
            <br />
            <span className="text-fd-primary">Show your work. Find your people.</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base text-fd-muted-foreground sm:text-lg">
            Peermeld Docs is the step-by-step guide to the professional network for developers,
            designers, founders and creators — from your first post on the{' '}
            <a
              href={PEERMELD_FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-fd-primary underline"
            >
              Feed
            </a>{' '}
            to ranking #1 on Launch.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/docs"
              className="rounded-lg bg-fd-primary px-6 py-3 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
            >
              Read the Documentation
            </Link>
            <Link
              href="/blog"
              className="rounded-lg border border-fd-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-fd-accent"
            >
              Explore 100+ Blog Guides
            </Link>
            <a
              href={PEERMELD_FEED_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-fd-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-fd-accent"
            >
              Open peermeld.com/feed ↗
            </a>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 py-16" aria-labelledby="browse-docs">
        <div className="mx-auto max-w-6xl">
          <h2 id="browse-docs" className="mb-2 text-center text-2xl font-bold sm:text-3xl">
            Everything in Peermeld, documented
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-fd-muted-foreground">
            Every feature of the platform explained with steps, screenshots-in-words, tips and best
            practices.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/50"
              >
                <span className="mb-3 block text-2xl" aria-hidden>
                  {section.icon}
                </span>
                <h3 className="mb-1.5 font-semibold group-hover:text-fd-primary">
                  {section.title}
                </h3>
                <p className="text-sm text-fd-muted-foreground">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-y border-fd-border bg-fd-muted/30 px-4 py-16" aria-labelledby="why">
        <div className="mx-auto max-w-4xl">
          <h2 id="why" className="mb-6 text-center text-2xl font-bold sm:text-3xl">
            Why professionals are moving to Peermeld
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <h3 className="mb-1 font-semibold">A Feed for real work</h3>
              <p className="text-sm text-fd-muted-foreground">
                Share progress, ideas and launches with people who build — not just job titles. The
                Trending tab surfaces what the community actually values.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">A profile that ranks</h3>
              <p className="text-sm text-fd-muted-foreground">
                yourname.peermeld.com is a fast, crawlable, SEO-ready personal site with your
                portfolio, projects and posts in one place.
              </p>
            </div>
            <div>
              <h3 className="mb-1 font-semibold">Reputation that pays</h3>
              <p className="text-sm text-fd-muted-foreground">
                Daily streaks, Top Streaks This Week, the Peers Wallet and rewards turn consistent
                building into visible, compounding reputation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest blog */}
      <section className="px-4 py-16" aria-labelledby="latest">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 id="latest" className="text-2xl font-bold sm:text-3xl">
                Latest from the blog
              </h2>
              <p className="text-fd-muted-foreground">
                Fresh guides and strategies — updated every week.
              </p>
            </div>
            <Link href="/blog" className="shrink-0 text-sm font-medium text-fd-primary hover:underline">
              View all {getBlogPosts().length} guides →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post) => (
              <BlogCard key={post.url} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-fd-border px-4 py-16" aria-labelledby="faq">
        <div className="mx-auto max-w-3xl">
          <h2 id="faq" className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="flex flex-col divide-y divide-fd-border">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-4">
                <summary className="cursor-pointer list-none font-medium group-open:text-fd-primary">
                  {faq.question}
                  <span className="float-right text-fd-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm text-fd-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-fd-muted-foreground">
            More answers in the{' '}
            <Link href="/docs/faq" className="text-fd-primary underline">
              full FAQ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-fd-border bg-fd-muted/30 px-4 py-16 text-center">
        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">Ready to show your work?</h2>
        <p className="mx-auto mb-6 max-w-xl text-fd-muted-foreground">
          Claim your subdomain, publish your first post and join the builders on Peermeld today.
        </p>
        <a
          href={`${PEERMELD_URL}/login`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg bg-fd-primary px-8 py-3 text-sm font-semibold text-fd-primary-foreground transition-opacity hover:opacity-90"
        >
          Join Peermeld free ↗
        </a>
      </section>
    </main>
  );
}
