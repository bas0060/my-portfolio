'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { LazySection } from '@/components/lazy-section';
import portfolioData from '@/lib/portfolioData';

// Lazy load components for better performance
const NavBar = dynamic(() => import('@/components/navbar').then(mod => ({ default: mod.NavBar })), {
  ssr: false // NavBar likely uses browser APIs
});

const Hero = dynamic(() => import('@/components/sections/hero').then(mod => ({ default: mod.Hero })), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>
});

const About = dynamic(() => import('@/components/sections/about').then(mod => ({ default: mod.About })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Experience = dynamic(() => import('@/components/sections/experience').then(mod => ({ default: mod.Experience })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Skills = dynamic(() => import('@/components/sections/skills').then(mod => ({ default: mod.Skills })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Portfolio = dynamic(() => import('@/components/sections/portfolio').then(mod => ({ default: mod.Portfolio })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Testimonials = dynamic(() => import('@/components/sections/testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Blogs = dynamic(() => import('@/components/sections/blogs').then(mod => ({ default: mod.Blogs })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Contact = dynamic(() => import('@/components/sections/contact').then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

const Footer = dynamic(() => import('@/components/sections/footer').then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div></div>
});

export default function Home() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <NavBar scrolling={scrolling} data={portfolioData} />
      <Hero data={portfolioData} />
      <LazySection>
        <About data={portfolioData} />
      </LazySection>
      <LazySection>
        <Experience data={portfolioData} />
      </LazySection>
      <LazySection>
        <Skills data={portfolioData} />
      </LazySection>
      <LazySection>
        <Portfolio data={portfolioData} />
      </LazySection>
      <LazySection>
        <Testimonials data={portfolioData} />
      </LazySection>
      <LazySection>
        <Blogs />
      </LazySection>
      <LazySection>
        <Contact data={portfolioData} />
      </LazySection>
      <Footer data={portfolioData} />
    </main>
  );
}
