'use client';

import { useState, useEffect } from 'react';
import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Portfolio } from '@/components/sections/portfolio';
import { Testimonials } from '@/components/sections/testimonials';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';
import { NavBar } from '@/components/navbar';
import portfolioData from '@/lib/portfolioData';
import { Blogs } from '@/components/sections/blogs';

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
      <About data={portfolioData} />
      <Experience data={portfolioData} />
      <Skills data={portfolioData} />
      <Portfolio data={portfolioData} />
      <Testimonials data={portfolioData} />
      <Blogs />
      <Contact data={portfolioData} />
      <Footer data={portfolioData} />
    </main>
  );
}
