import Link from 'next/link';
import { BLOG_CATEGORIES, formatBlogDate, type BlogPage } from '@/lib/blog';

export function BlogCard({ post }: { post: BlogPage }) {
  const category = BLOG_CATEGORIES[post.data.category];
  return (
    <Link
      href={post.url}
      className="group flex flex-col rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:border-fd-primary/50"
    >
      <div className="mb-2 flex items-center gap-2 text-xs text-fd-muted-foreground">
        <span className="rounded-full bg-fd-primary/10 px-2 py-0.5 text-fd-primary">
          {category?.label ?? post.data.category}
        </span>
        <time dateTime={post.data.date}>{formatBlogDate(post.data.date)}</time>
      </div>
      <h2 className="mb-1.5 text-base font-semibold leading-snug text-fd-card-foreground group-hover:text-fd-primary group-hover:underline">
        {post.data.title}
      </h2>
      <p className="line-clamp-3 text-sm text-fd-muted-foreground">{post.data.description}</p>
      <span className="mt-3 text-xs font-medium text-fd-primary">Read guide →</span>
    </Link>
  );
}
