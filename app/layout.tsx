import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import SiteHeader from './site-header';
import SiteFooter from './site-footer';
import './globals.css';
import './service-pages.css';
import './site-refinement.css';
import './local-imagery.css';
import './portrait.css';
import './sold-homes-map.css';
import './site.css';

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });

export const metadata: Metadata = {
  title: 'Wildschut Makelaar Taxateur | Amsterdam-Noord & Landsmeer',
  description: 'Persoonlijke begeleiding bij verkoop, aankoop en taxaties in Amsterdam-Noord en Landsmeer.',
  robots: {
    index: process.env.ALLOW_INDEXING !== 'false',
    follow: process.env.ALLOW_INDEXING !== 'false',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={figtree.variable}>
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
