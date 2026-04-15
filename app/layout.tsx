import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { AnimationProvider } from '@/components/animation-provider'
import { PerformanceMonitor } from '@/components/performance-monitor'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Abdulbasit Makinde | Frontend Developer',
  description: 'Frontend Developer with 5+ years of experience. Building beautiful, performant web applications using React, TypeScript, and modern technologies.',
  generator: 'v0.app',
  keywords: ['Frontend Developer', 'React', 'TypeScript', 'Web Development', 'Software Engineer'],
  authors: [{ name: 'Abdulbasit Makinde' }],
  openGraph: {
    title: 'Abdulbasit Makinde | Frontend Developer',
    description: 'Frontend Developer with expertise in React, TypeScript, Next.js and modern web technologies.',
    type: 'website',
  },
  // icons: {
  //   icon: [
  //     {
  //       url: '/icon-light-32x32.png',
  //       media: '(prefers-color-scheme: light)',
  //     },
  //     {
  //       url: '/icon-dark-32x32.png',
  //       media: '(prefers-color-scheme: dark)',
  //     },
  //     {
  //       url: '/icon.svg',
  //       type: 'image/svg+xml',
  //     },
  //   ],
  //   apple: '/apple-icon.png',
  // },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased bg-background text-foreground`}>
        <PerformanceMonitor />
        <AnimationProvider>
          {children}
        </AnimationProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
