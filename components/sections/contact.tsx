'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { PortfolioData } from '@/lib/portfolioData';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  data: PortfolioData;
}

export function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:adelekemakinde64@gmail.com?subject=${subject}&body=${body}`;

      const link = document.createElement('a');
      link.href = mailtoLink;
      link.click();

      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitStatus('success');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-linear-to-b from-background/50 to-background">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal delay={100}>
            <div className="space-y-8">
              <p className="text-gray-400 text-lg">{data.contact.message}</p>

              <div className="space-y-6">
                <a
                  href={`mailto:${data.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-lg border border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all"
                >
                  <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-gray-400">{data.contact.email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${data.contact.phone}`}
                  className="flex items-start gap-4 p-4 rounded-lg border border-secondary/20 hover:border-secondary/40 hover:bg-secondary/5 transition-all"
                >
                  <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Phone</p>
                    <p className="text-gray-400">{data.contact.phone}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg border border-accent/20">
                  <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Location</p>
                    <p className="text-gray-400">{data.personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-card border-primary/20 focus:border-primary"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-linear-to-r from-primary to-accent hover:opacity-90"
              >
                {isSubmitting ? 'Opening email client...' : 'Send Message'}
              </Button>

              {submitStatus === 'success' && (
                <div className="p-4 rounded-lg bg-green-500/20 border border-green-500/40 text-green-400 text-sm">
                  Your email client should have opened — just hit Send to reach me!
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 rounded-lg bg-red-500/20 border border-red-500/40 text-red-400 text-sm">
                  Something went wrong. Please email me directly at adelekemakinde64@gmail.com
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
