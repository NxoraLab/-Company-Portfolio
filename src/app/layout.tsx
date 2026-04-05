import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { SmoothScroll } from '@/components/ui/SmoothScroll';
import { CustomCursor } from '@/components/ui/CustomCursor';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://nxoralab.com'),
  title: 'NxoraLab — Engineering Intelligent Digital Experiences',
  description: 'NxoraLab builds AI-powered systems, modern software, cloud solutions, and business automation for forward-thinking organizations worldwide.',
  keywords: ['AI Solutions', 'Software Development', 'Cloud DevOps', 'Business Automation', 'NxoraLab'],
  authors: [{ name: 'NxoraLab' }],
  creator: 'NxoraLab',
  publisher: 'NxoraLab',
  openGraph: {
    title: 'NxoraLab — Intelligent Digital Experiences',
    description: 'We build AI-powered systems and modern software for forward-thinking organizations.',
    url: 'https://nxoralab.com',
    siteName: 'NxoraLab',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NxoraLab — Engineering Intelligent Digital Experiences',
    description: 'AI-powered systems, modern software, and cloud solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`font-sans antialiased text-frost`}>
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
