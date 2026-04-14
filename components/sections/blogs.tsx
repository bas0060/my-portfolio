'use client';

import { useState, useEffect } from 'react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { BlogCard } from '@/components/blog-card';
import { blogPosts } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';
import { X } from 'lucide-react';

export function Blogs() {
  const [selectedBlog, setSelectedBlog] = useState<typeof blogPosts[0] | null>(null);

  // lock body scroll when modal is open
  useEffect(() => {
    if (selectedBlog) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [selectedBlog]);

  // close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedBlog(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <section id="blog" className="py-20 px-6 bg-linear-to-b from-background/50 to-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Latest <span className="text-accent">Blogs</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((blog, index) => (
            <ScrollReveal key={blog.id} delay={index * 150}>
              <BlogCard
                id={blog.id}
                title={blog.title}
                excerpt={blog.excerpt}
                date={blog.date}
                readTime={blog.readTime}
                tags={blog.tags}
                onClick={() => setSelectedBlog(blog)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Custom modal */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="blog-modal-title"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedBlog(null)}
          />

          {/* Modal panel — full width control here */}
          <div className="relative z-10 w-full max-w-308 max-h-[90vh] overflow-y-auto hide-scrollbar rounded-xl border border-white/10 bg-background p-6 md:p-8 shadow-2xl">

            {/* Close button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            {/* Title */}
            <h2
              id="blog-modal-title"
              className="text-2xl font-bold text-white pr-8 leading-snug"
            >
              {selectedBlog.title}
            </h2>

            {/* Meta */}
            <div className="mt-3 flex items-center gap-4">
              <time className="text-sm text-muted-foreground">
                {formatDate(selectedBlog.date)}
              </time>
              <span className="text-sm text-muted-foreground">
                {selectedBlog.readTime} min read
              </span>
            </div>

            {/* Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {selectedBlog.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-white/10" />

            {/* Content */}
            <div className="whitespace-pre-wrap text-muted-foreground leading-relaxed text-sm md:text-base">
              {selectedBlog.content}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}