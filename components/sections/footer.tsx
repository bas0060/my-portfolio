'use client';

import { PortfolioData } from '@/lib/portfolioData';

interface FooterProps {
  data: PortfolioData;
}

export function Footer({ data }: FooterProps) {
  return (
    <footer className="bg-background/80 border-t border-muted py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-white font-bold text-lg mb-1">
              {data.personalInfo.name}
            </p>
            <p className="text-muted-foreground text-sm">
              {data.personalInfo.role}
            </p>
          </div>

          <div className="flex gap-6">
            {data.personalInfo.socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
                title={link.name}
              >
                <span className="sr-only">{link.name}</span>
                <link.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-muted mt-8 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            {new Date().getFullYear()} {data.personalInfo.name}. All rights reserved.
          </p>
          <p className="text-center text-muted-foreground text-xs mt-2">
            Built with React, Next.js, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
