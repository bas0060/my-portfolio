'use client';

import { Quote } from 'lucide-react';

interface TestimonialProps {
  author: string;
  role: string;
  content: string;
}

export function Testimonial({ author, role, content }: TestimonialProps) {
  return (
    <div className="relative rounded-lg border border-border bg-card p-6">
      <div className="absolute -top-3 -left-3 text-primary/20">
        <Quote className="h-6 w-6" />
      </div>

      <blockquote className="relative pt-2">
        <p className="text-foreground leading-relaxed">
          {content}
        </p>
        <footer className="mt-4">
          <div className="text-sm font-medium text-foreground">
            {author}
          </div>
          <div className="text-xs text-muted-foreground">
            {role}
          </div>
        </footer>
      </blockquote>
    </div>
  );
}
