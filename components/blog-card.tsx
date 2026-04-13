'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: number;
  tags: string[];
  onClick?: () => void;
}

export function BlogCard({
  id,
  title,
  excerpt,
  date,
  readTime,
  tags,
  onClick,
}: BlogCardProps) {
  const cardContent = (
    <article className="group w-full h-full flex flex-col text-left border border-secondary/20 rounded-3xl p-6 bg-card transition-all duration-300 hover:translate-y-1.5 hover:shadow-lg hover:shadow-green-500/10">
      <div className="space-y-4 flex-1 flex flex-col">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-accent line-clamp-2 grow">
            {title}
          </h3>
          <time className="whitespace-nowrap text-xs text-muted-foreground">
            {formatDate(date)}
          </time>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {excerpt}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-2">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {readTime} min read
          </span>
        </div>
      </div>
    </article>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className="w-full text-left h-full">
        {cardContent}
      </button>
    );
  }

  return (
    <Link href={`/blog/${id}`} className="w-full text-left h-full">
      {cardContent}
    </Link>
  );
}
