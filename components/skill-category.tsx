'use client';

import { Badge } from '@/components/ui/badge';

interface SkillCategoryProps {
  category: string;
  skills: string[];
}

export function SkillCategory({ category, skills }: SkillCategoryProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-3">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="font-medium"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
