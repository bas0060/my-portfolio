'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { profileData } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {profileData.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={profileData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href={profileData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href={`mailto:${profileData.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
