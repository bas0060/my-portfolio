'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { SkillBar } from '@/components/animations/skill-bar';
import { PortfolioData } from '@/lib/portfolioData';

interface SkillsProps {
  data: PortfolioData;
}

export function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="py-20 px-6 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Skills <span className="text-accent">&amp; Expertise</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {data.skills.map((skillCategory, index) => (
            <ScrollReveal key={skillCategory.category} delay={index * 100}>
              <div className="bg-card border border-secondary/20 rounded-lg p-8 hover:border-green-500/40 hover:shadow-lg hover:shadow-green-500/20 transition-all duration-300 group flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white mb-6 group-hover:text-green-400 transition-colors duration-300">
                  {skillCategory.category}
                </h3>
                <div className="space-y-1">
                  {skillCategory.skills.map((skill, i) => (
                    <SkillBar
                      key={i}
                      name={skill.name}
                      proficiency={skill.proficiency}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
