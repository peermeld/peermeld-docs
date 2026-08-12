import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';
import { PEERMELD_URL } from './seo';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      // JSX supported
      title: (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Peermeld logo"
            width={26}
            height={26}
            style={{ borderRadius: 6 }}
          />
          <span>{appName}</span>
        </>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { text: 'Documentation', url: '/docs' },
      { text: 'Blog', url: '/blog' },
      {
        text: 'Peermeld.com',
        url: PEERMELD_URL,
        external: true,
      },
    ],
  };
}
