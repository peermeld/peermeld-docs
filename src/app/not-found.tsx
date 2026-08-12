import Link from 'next/link';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function NotFound() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
        <p className="mb-2 text-6xl font-bold text-fd-muted-foreground/50">404</p>
        <h1 className="mb-3 text-2xl font-bold">Page not found</h1>
        <p className="mb-8 max-w-md text-fd-muted-foreground">
          The page you are looking for does not exist or was moved. Try the documentation, the blog,
          or search from the navbar.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/docs"
            className="rounded-lg bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground"
          >
            Go to Documentation
          </Link>
          <Link
            href="/blog"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium hover:bg-fd-accent"
          >
            Browse the Blog
          </Link>
          <Link
            href="/"
            className="rounded-lg border border-fd-border px-5 py-2.5 text-sm font-medium hover:bg-fd-accent"
          >
            Back Home
          </Link>
        </div>
      </main>
    </HomeLayout>
  );
}
