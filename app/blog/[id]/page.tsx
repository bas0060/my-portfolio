import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: `${post.title} | Abdulbasit Makinde`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-foreground mb-4">Post not found</h1>
        <Link href="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Blog
      </Link>

      <article className="max-w-2xl space-y-8">
        {/* Header */}
        <div className="space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground text-balance leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <time dateTime={post.date}>
                {formatDate(post.date)}
              </time>
              <span>•</span>
              <span>{post.readTime} min read</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-foreground leading-relaxed">
            {post.content}
          </p>

          <p className="text-muted-foreground leading-relaxed mt-8">
            This is a sample blog post. In a production application, this would be fetched from your CMS or database.
            The content would be rendered as markdown or rich text, with proper formatting and styling.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Thank you for reading! If you have any questions or feedback about this article, feel free to reach out through my contact page.
          </p>
        </div>

        {/* CTA */}
        <div className="rounded-lg border border-border bg-card p-6 mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Enjoyed this article? Share your thoughts or discuss further.
          </p>
          <Link href="/contact">
            <Button>Get In Touch</Button>
          </Link>
        </div>

        {/* More Posts */}
        <div className="mt-16 pt-8 border-t border-border">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            More Articles
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {blogPosts
              .filter((p) => p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group rounded-lg border border-border bg-card p-6 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-2">
                    {formatDate(relatedPost.date)}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </>
  );
}
