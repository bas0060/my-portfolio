import { Metadata } from 'next';
import { ContactForm } from './contact-form';
import { PageHeader } from '@/components/page-header';
import { Mail, Linkedin, Github } from 'lucide-react';
import { profileData } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Contact | Abdulbasit Makinde',
  description: 'Get in touch with me for projects, collaborations, or inquiries.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get In Touch"
        description="Have a project in mind or want to collaborate? I&apos;d love to hear from you."
      />

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <ContactForm />

        {/* Contact Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. I&apos;ll do my best to respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">Email</div>
                <div className="text-sm text-muted-foreground">{profileData.email}</div>
              </div>
            </a>

            <a
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <Linkedin className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">LinkedIn</div>
                <div className="text-sm text-muted-foreground">Connect with me</div>
              </div>
            </a>

            <a
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/40 hover:bg-primary/5 transition-all"
            >
              <Github className="h-5 w-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">GitHub</div>
                <div className="text-sm text-muted-foreground">Check out my code</div>
              </div>
            </a>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
            <p className="text-sm text-muted-foreground">
              I typically respond to inquiries within 24 hours during business days. For urgent matters, please mention that in your message.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
