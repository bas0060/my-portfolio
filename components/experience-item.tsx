'use client';

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
}

export function ExperienceItem({
  title,
  company,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-primary/20 pl-6 pb-8 last:pb-0">
      <div className="relative">
        <div className="absolute -left-[13px] top-0 h-2 w-2 rounded-full bg-primary" />

        <div className="space-y-2">
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {title}
            </h3>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-medium text-muted-foreground">
                {company}
              </p>
              <p className="text-xs text-muted-foreground">
                {period}
              </p>
            </div>
          </div>

          <p className="text-sm text-foreground/80 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
