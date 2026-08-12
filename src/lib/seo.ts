/**
 * Central SEO configuration for Peermeld Docs.
 * Every public page derives its metadata, canonical URLs and JSON-LD from here.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://docs.peermeld.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'Peermeld Docs';
export const SITE_TAGLINE = 'The official guide to Peermeld — feed, portfolio, launches & networking';
export const SITE_DESCRIPTION =
  'Learn how to use Peermeld — the professional network for developers, designers, founders and creators. Step-by-step guides for the Feed, custom subdomains, portfolios, projects, Launch leaderboards, streaks, the Peers Wallet and more.';

export const PEERMELD_URL = 'https://peermeld.com';
export const PEERMELD_FEED_URL = 'https://peermeld.com/feed';
export const PEERMELD_LOGIN_URL = 'https://peermeld.com/login';

export const SITE_KEYWORDS = [
  'Peermeld',
  'Peermeld docs',
  'Peermeld documentation',
  'Peermeld guide',
  'Peermeld feed',
  'peermeld.com/feed',
  'professional network for developers',
  'developer portfolio',
  'build in public',
  'Peermeld launch',
  'Peers Wallet',
  'Peermeld streaks',
  'how to use Peermeld',
  'Peermeld tutorial',
  'Peermeld subdomain',
];

export const TWITTER_HANDLE = '@peermeld';

export function absoluteUrl(path = '/'): string {
  if (path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function ogImageFor(url: string, title: string) {
  return {
    url,
    width: 1200,
    height: 630,
    alt: title,
    type: 'image/webp',
  };
}

/* -------------------------------------------------------------------------- */
/* JSON-LD builders                                                            */
/* -------------------------------------------------------------------------- */

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${PEERMELD_URL}/#organization`,
    name: 'Peermeld',
    url: PEERMELD_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${PEERMELD_URL}/icons/icon-512.png`,
      width: 512,
      height: 512,
    },
    description:
      'Peermeld is the professional network for developers, designers, founders and creators to showcase real work, find collaborators and launch ideas.',
    sameAs: [PEERMELD_URL, `${PEERMELD_URL}/feed`],
  };
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: ['Peermeld Documentation', 'Peermeld Help Center', 'Peermeld Guides'],
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: 'en-US',
    publisher: { '@id': `${PEERMELD_URL}/#organization` },
    about: { '@id': `${PEERMELD_URL}/#organization` },
    isPartOf: { '@type': 'WebSite', name: 'Peermeld', url: PEERMELD_URL },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function techArticleJsonLd(opts: {
  title: string;
  description?: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.url),
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(opts.url) },
    image: opts.image ? absoluteUrl(opts.image) : undefined,
    inLanguage: 'en-US',
    isPartOf: { '@id': `${SITE_URL}/#website` },
    author: { '@id': `${PEERMELD_URL}/#organization` },
    publisher: { '@id': `${PEERMELD_URL}/#organization` },
    about: {
      '@type': 'SoftwareApplication',
      name: 'Peermeld',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'Web',
      url: PEERMELD_URL,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  };
}

export function blogPostingJsonLd(opts: {
  title: string;
  description?: string;
  url: string;
  image?: string;
  datePublished: string;
  author: string;
  keywords?: string[];
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: absoluteUrl(opts.url),
    mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(opts.url) },
    image: opts.image ? absoluteUrl(opts.image) : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.datePublished,
    inLanguage: 'en-US',
    author: {
      '@type': 'Organization',
      name: opts.author,
      url: PEERMELD_URL,
    },
    publisher: { '@id': `${PEERMELD_URL}/#organization` },
    isPartOf: { '@id': `${SITE_URL}/#website` },
    keywords: opts.keywords?.join(', '),
    wordCount: opts.wordCount,
    about: {
      '@type': 'SoftwareApplication',
      name: 'Peermeld',
      applicationCategory: 'SocialNetworkingApplication',
      operatingSystem: 'Web',
      url: PEERMELD_URL,
    },
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function collectionPageJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.url),
    isPartOf: { '@id': `${SITE_URL}/#website` },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: opts.items.length,
      itemListElement: opts.items.slice(0, 100).map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: absoluteUrl(item.url),
      })),
    },
  };
}
