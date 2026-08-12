/**
 * Generates the 100 Peermeld blog posts into content/blog/*.mdx.
 *
 * Design goals:
 *  - 100 genuinely distinct articles (unique title, description, intro per post)
 *  - SEO-complete frontmatter (title, description, author, date, category, tags)
 *  - Rich semantic structure (H2 sections, FAQ headings, lists) for search engines
 *  - Internal links to docs + external links to peermeld.com on every post
 *
 * Run: node scripts/generate-blog.mjs
 */
import { mkdirSync, writeFileSync, rmSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { banksA } from './blog/banks-a.mjs';
import { banksB } from './blog/banks-b.mjs';
import { posts1 } from './blog/posts-1.mjs';
import { posts2 } from './blog/posts-2.mjs';

const banks = { ...banksA, ...banksB };
const posts = [...posts1, ...posts2];

const OUT_DIR = join(process.cwd(), 'content', 'blog');

/* First post date: posts ship daily, ending today (2026-08-12). */
const END_DATE = new Date('2026-08-12T00:00:00Z');

function formatDate(d) {
  return d.toISOString().slice(0, 10);
}

/** Deterministic PRNG so re-runs are stable. */
function hashSeed(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffledPick(arr, count, seed) {
  const rnd = mulberry32(seed);
  const idx = arr.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, count).sort((a, b) => a - b);
}

/** MDX-safety: no raw JSX-looking characters in body text. */
function clean(text) {
  return text
    .replace(/</g, 'andlt;')
    .replace(/>/g, 'andgt;')
    .replace(/andlt;/g, 'less than ')
    .replace(/andgt;/g, 'greater than ')
    .replace(/[{}]/g, '');
}

function yaml(str) {
  return JSON.stringify(str);
}

function renderPost(post, index) {
  const bank = banks[post.category];
  if (!bank) throw new Error(`No content bank for category ${post.category}`);
  const seed = hashSeed(post.slug);

  // Spread publish dates: oldest first in array order, ending on END_DATE.
  const date = new Date(END_DATE);
  date.setUTCDate(date.getUTCDate() - (posts.length - 1 - index));
  const dateStr = formatDate(date);

  const introFn = bank.intros[seed % bank.intros.length];
  const outroFn = bank.outros[seed % bank.outros.length];
  const sectionIdx = shuffledPick(bank.sections, 4, seed);
  const faqIdx = shuffledPick(bank.faqs, 3, seed + 7);
  const docLinks = bank.relatedDocs;

  const lines = [];
  lines.push('---');
  lines.push(`title: ${yaml(post.title)}`);
  lines.push(`description: ${yaml(post.desc)}`);
  lines.push(`author: "Peermeld Team"`);
  lines.push(`date: "${dateStr}"`);
  lines.push(`category: "${post.category}"`);
  lines.push(`tags: [${post.tags.map((t) => yaml(t)).join(', ')}]`);
  lines.push('---');
  lines.push('');
  lines.push(clean(post.angle));
  lines.push('');
  lines.push(clean(introFn(post)));
  lines.push('');

  for (const si of sectionIdx) {
    const section = bank.sections[si];
    lines.push(`## ${clean(section.h)}`);
    lines.push('');
    for (const para of section.body) {
      lines.push(clean(para).replace(/\{focus\}/g, post.focus));
      lines.push('');
    }
  }

  lines.push('## Key takeaways');
  lines.push('');
  const takeaways = [
    `${capitalize(post.focus)} is a skill — and on Peermeld it's a documented, learnable one.`,
    `Consistency beats intensity: daily loops power your streak, your streak powers your visibility beyond this topic.`,
    `Every improvement compounds across your profile, feed reach, projects and Launch potential — start this week.`,
  ];
  for (const t of takeaways) lines.push(`- ${clean(t)}`);
  lines.push('');

  lines.push('## Frequently asked questions');
  lines.push('');
  for (const fi of faqIdx) {
    const [q, a] = bank.faqs[fi];
    lines.push(`### ${clean(q)}`);
    lines.push('');
    lines.push(clean(a));
    lines.push('');
  }

  lines.push('## The bottom line');
  lines.push('');
  lines.push(clean(outroFn(post)));
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push('**Go deeper in the docs:**');
  lines.push('');
  for (const [label, href] of docLinks) {
    lines.push(`- [${label}](${href})`);
  }
  lines.push('');
  lines.push(
    `Ready to put this into practice? [Open the Peermeld Feed](https://peermeld.com/feed) and start today — or [claim your profile](https://peermeld.com) if you haven't joined yet.`,
  );
  lines.push('');

  return { slug: post.slug, content: lines.join('\n') };
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ------------------------------ main ------------------------------ */

// Clean previous generated posts
mkdirSync(OUT_DIR, { recursive: true });
for (const f of readdirSync(OUT_DIR)) {
  if (f.endsWith('.mdx')) rmSync(join(OUT_DIR, f));
}

let count = 0;
for (let i = 0; i < posts.length; i++) {
  const { slug, content } = renderPost(posts[i], i);
  writeFileSync(join(OUT_DIR, `${slug}.mdx`), content, 'utf8');
  count++;
}

console.log(`Generated ${count} blog posts in ${OUT_DIR}`);
