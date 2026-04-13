'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { PortfolioData } from '@/lib/portfolioData';

interface AboutProps {
  data: PortfolioData;
}

export function About({ data }: AboutProps) {
  return (
    <section id="about" className="py-20 px-6 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal delay={100}>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-accent/20 rounded-lg blur-xl" />
              <div className="relative bg-card border border-primary/20 rounded-lg p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {data.about}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-muted">
                  <div>
                    <p className="text-3xl font-bold text-accent">3+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent">10+</p>
                    <p className="text-sm text-muted-foreground">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="space-y-6">
              <div className="bg-card border border-secondary/20 rounded-lg p-6 hover:border-secondary/40 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
                <ul className="space-y-3">
                  {data.education.map((edu) => (
                    <li key={edu.id} className="text-gray-400">
                      <p className="font-medium text-white">{edu.degree}</p>
                      <p className="text-sm">{edu.school}</p>
                      <p className="text-sm">{edu.field}</p>
                      <p className="text-xs text-muted-foreground">{edu.year}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
