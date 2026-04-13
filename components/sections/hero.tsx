'use client';

import { HeroText } from '@/components/animations/hero-text';
import { Button } from '@/components/ui/button';
import { PortfolioData } from '@/lib/portfolioData';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

interface HeroProps {
  data: PortfolioData;
}

export function Hero({ data }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Path to resume file in public folder
    link.download = `${data.personalInfo.name.replace(' ', '_')}_Resume.pdf`; // Download filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{
        background: `linear-gradient(135deg, rgba(10, 63, 66, 0.95) 0%, rgba(13, 38, 54, 0.95) 50%, rgba(26, 77, 62, 0.95) 100%), url('/images/hero-bg.jpg') no-repeat center`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <p className="text-accent text-lg font-semibold mb-4 animate-fade-in">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Hi, I&apos;m{' '}
            <span className="bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              <HeroText text={data.personalInfo.name} speed={60} />
            </span>
          </h1>
        </div>

        <div className="mb-8">
          <h2 className="text-xl md:text-3xl text-gray-300 font-light mb-6">
            <HeroText text={data.personalInfo.role} speed={50} />
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            {data.personalInfo.bio}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={() => scrollToSection('portfolio')}
            size="lg"
            className="bg-primary hover:bg-primary/80 text-white"
          >
            View My Work
          </Button>
          <Link href="/resume.pdf" target="_blank" className="w-full sm:w-auto">
            <Button
              onClick={downloadResume}
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10"
            >
              Download My Resume
            </Button>
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
          {data.personalInfo.socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors duration-300 p-3 border border-muted rounded-full hover:border-accent"
            >
              <span className="sr-only">{link.name}</span>
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-accent hover:text-primary transition-colors animate-bounce"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
