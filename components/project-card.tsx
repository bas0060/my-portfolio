'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  description,
  tags,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <div
        className={`group relative rounded-lg border transition-all duration-300 hover:shadow-lg ${
          featured
            ? 'border-primary/20 bg-linear-to-br from-primary/5 to-transparent p-6'
            : 'border-border bg-card p-6 hover:border-primary/40'
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
              {title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>
          <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </Link>
  );
}
