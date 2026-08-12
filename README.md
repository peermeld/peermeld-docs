# Peermeld Docs

The unofficial-but-exhaustive documentation and blog for **[Peermeld](https://peermeld.com)** — the professional network for developers, designers, founders and creators.

Built with **Next.js 16.3 + Fumadocs (MDX)** and shipped as a **100% static export** (`out/` directory — deployable to any static host: Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3…).

## What's inside

| Area | Location | Content |
| ---- | -------- | ------- |
| Documentation | `content/docs` | 29 MDX pages covering every Peermeld feature |
| Blog | `content/blog` | **100 SEO-optimized guides** (10 categories × 10 posts) |
| Blog generator | `scripts/generate-blog.mjs` | Regenerates the 100 posts from curated content banks |

### Documentation coverage

- **Getting Started** — account (Google sign-in), claiming `yourname.peermeld.com`, profile setup
- **The Feed** (`peermeld.com/feed`) — composer, Newest/Trending/Following tabs, Filters, upvotes & upvoter avatars, comments, Source accounts (freeCodeCamp, Fireship…), growth strategy
- **Profile & Portfolio** — profile anatomy, portfolio blocks & themes, profile SEO
- **Projects & Build Logs** — showcases, tech-stack tags, markdown build logs
- **Launch** — the weekly leaderboard and a full rank-#1 playbook
- **Network & Discovery** — /grow directory, company pages, Peer Match, Meld Spaces, Project Rooms, Global Search
- **Streaks, Wallet & Rewards** — streaks, Top Streaks This Week, Peers Wallet, reward system
- **Reference** — FAQ, changelog, glossary

## SEO stack

Everything ships pre-rendered HTML with:

- `sitemap.xml` (140+ URLs with priorities & lastmod) and `robots.txt` (AI crawlers explicitly welcomed)
- Canonical URLs, Open Graph & Twitter cards on every page
- **Per-page OG images** generated at build time (docs + all 100 blog posts)
- JSON-LD structured data: `Organization`, `WebSite`, `TechArticle` (docs), `BlogPosting` (blog), `BreadcrumbList`, `FAQPage`, `CollectionPage`
- RSS 2.0 feed at `/feed.xml`, `llms.txt` + `llms-full.txt`, PWA `manifest.webmanifest`, `humans.txt`, `security.txt`
- Semantic HTML (single H1, heading hierarchy, breadcrumbs, reading-time metadata)
- Static export = near-perfect Core Web Vitals

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build (static export)

```bash
npm run build      # outputs to out/
npm run start      # serves out/ locally
```

## Deploy to Cloudflare

This site is a **static export** (`out/`). Do **not** use OpenNext / `opennextjs-cloudflare` — there is no Node server and no `.next/standalone`.

`wrangler.jsonc` points Workers static assets at `./out` so `npx wrangler deploy` uploads HTML, not a Next.js Worker.

```bash
npm install
npx wrangler login
npm run deploy          # next build && wrangler deploy
```

Cloudflare dashboard (Workers / Pages):

| Setting | Value |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Output directory | `out` (not `.next`) |
| Node.js | `20` (see `.nvmrc`) |
| `NEXT_PUBLIC_SITE_URL` | `https://docs.peermeld.com` |

If the project is a **Pages** site instead of a Worker:

```bash
npm run pages:deploy
```

Set build output directory to `out` and do not run `wrangler deploy` (that path auto-migrates Next.js to OpenNext and fails).

## Regenerate blog content

```bash
npm run generate:blog
```

Content banks live in `scripts/blog/banks-*.mjs`; post definitions in `scripts/blog/posts-*.mjs`.

## Configuration

Set `NEXT_PUBLIC_SITE_URL` at build time to your production origin (default `https://docs.peermeld.com`) so canonical tags, sitemap and RSS use the right host:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```
