import type { Metadata } from 'next';
import './globals.css';
import './service-pages.css';
import './site-refinement.css';
import './local-imagery.css';
import './portrait.css';
import './sold-homes-map.css';

export const metadata: Metadata = {
  title: 'Wildschut Makelaar Taxateur | Amsterdam-Noord & Landsmeer',
  description: 'Persoonlijke begeleiding bij verkoop, aankoop en taxaties in Amsterdam-Noord en Landsmeer.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
