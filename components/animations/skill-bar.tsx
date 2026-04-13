'use client';

import { useEffect, useRef, useState } from 'react';

interface SkillBarProps {
  name: string;
  proficiency: number;
}

export function SkillBar({ name, proficiency }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-xs font-semibold text-accent">{proficiency}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className="bg-linear-to-r from-primary via-accent to-green-500 h-full rounded-full shadow-lg shadow-accent/50"
          style={{
            width: isVisible ? `${proficiency}%` : '0%',
            transition: 'width 2s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        />
      </div>
    </div>
  );
}
