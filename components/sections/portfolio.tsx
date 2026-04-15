'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Button } from '@/components/ui/button';
import { PortfolioData } from '@/lib/portfolioData';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface PortfolioProps {
  data: PortfolioData;
}  

export function Portfolio({ data }: PortfolioProps) {
  return (
    <section id="portfolio" className="py-20 px-6 bg-linear-to-b from-background/50 to-background">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-accent">Projects</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          {data.portfolio.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 150}>
              <div className="group relative bg-card border border-primary/20 rounded-lg overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 flex flex-col h-full">
                {/* Project Image Background */}
                <div className="relative h-52 overflow-hidden">
                  {/* <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-accent/40 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.name.charAt(0)}
                    </div>
                  </div> */}
                  <Image 
                    src={project.image} 
                    alt={project.name} 
                    fill 
                    className="object-cover absolute inset-0 w-full h-full" 
                    priority={index === 0}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-accent/10 text-white border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-muted">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
