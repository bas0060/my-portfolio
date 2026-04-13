import { Metadata } from 'next';
import { PageHeader } from '@/components/page-header';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Blog | Abdulbasit Makinde',
  description: 'Read my articles about web development, React, TypeScript, and modern web technologies.',
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Blog"
        description="Articles about web development, React, TypeScript, accessibility, and performance optimization."
      />

      <div className="max-w-2xl space-y-8">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            tags={post.tags}
          />
        ))}
      </div>
    </>
  );
}
