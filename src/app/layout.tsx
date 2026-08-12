import type { Metadata, Viewport } from 'next';
import { Provider } from '@/components/provider';
import { JsonLd } from '@/components/json-ld';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
  TWITTER_HANDLE,
  organizationJsonLd,
  websiteJsonLd,
} from '@/lib/seo';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  generator: 'Next.js 16 + Fumadocs',
  authors: [{ name: 'Peermeld', url: 'https://peermeld.com' }],
  creator: 'Peermeld',
  publisher: 'Peermeld',
  referrer: 'strict-origin-when-cross-origin',
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Peermeld Docs — official documentation for the Peermeld professional network',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: ['/og-cover.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [{ url: '/favicon.ico', sizes: 'any' }, { url: '/icon-192.png', type: 'image/png' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
  category: 'technology',
  classification: 'Documentation',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
