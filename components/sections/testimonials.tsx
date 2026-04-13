'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { PortfolioData } from '@/lib/portfolioData';

interface TestimonialsProps {
  data: PortfolioData;
}

export function Testimonials({ data }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 px-6 bg-background/50">
      <div className="max-w-240 mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Client <span className="text-accent">Testimonials</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {data.testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 100}>
              <div className="relative bg-card border border-secondary/20 rounded-lg p-6 hover:border-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 flex flex-col h-full">
                {/* Quote mark */}
                <div className="text-4xl text-accent/20 font-bold mb-4">"</div>
                
                <p className="text-gray-300 mb-6 leading-relaxed grow">
                  {testimonial.message}
                </p>

                <div className="border-t border-muted pt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-sm text-accent">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
