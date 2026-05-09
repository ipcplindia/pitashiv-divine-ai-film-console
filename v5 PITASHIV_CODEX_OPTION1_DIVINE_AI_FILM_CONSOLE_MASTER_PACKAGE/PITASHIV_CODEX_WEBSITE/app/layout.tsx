import './globals.css';
import type { Metadata } from 'next';
import { siteConfig } from '../site.config';

export const metadata: Metadata = {
  title: `${siteConfig.brand} | ${siteConfig.music} | Divine AI Film Console`,
  description: 'Official ultra-premium portal for Bholenath Productions, Shivayonic Music and Shivayonic Studios.',
  openGraph: { title: `${siteConfig.brand} + ${siteConfig.music}`, description: siteConfig.manifesto, url: siteConfig.domain, siteName: siteConfig.brand, images: ['/assets/reference/OPTION_1_FULL_HOMEPAGE_LOCK.png'], type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
