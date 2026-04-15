'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { PortfolioData } from '@/lib/portfolioData';

interface ExperienceProps {
  data: PortfolioData;
}

export function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="py-20 px-6 bg-linear-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience <span className="text-accent">&amp; Journey</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {data.experience.map((job, index) => (
            <ScrollReveal key={job.id} delay={index * 100}>
              <div className="relative pl-8 border-l-2 border-gradient-to-b from-primary to-accent">
                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                
                <div className="bg-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{job.position}</h3>
                      <p className="text-lg text-accent">{job.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">
                      {job.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">{job.description}</p>
                  
                  {job.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-slate-800 text-white border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
