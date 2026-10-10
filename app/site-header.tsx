import Link from 'next/link';

export function WildschutMark({ color = 'currentColor', width = 38 }: { color?: string; width?: number }) {
  return (
    <svg width={width} height={Math.round(width * 236 / 300)} viewBox="0 0 300 236" aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="18" strokeLinejoin="miter">
        <path d="M-2 -12 L108 212 L220 -12" />
        <path d="M78 -12 L188 212 L302 -12" />
      </g>
    </svg>
  );
}

const links = [
  { href: '/verkopen', label: 'Verkoop' },
  { href: '/aankopen', label: 'Aankoop' },
  { href: '/taxatie', label: 'Taxatie' },
  { href: '/erfpacht', label: 'Erfpacht' },
  { href: '/#werkgebied', label: 'Werkgebied' },
  { href: '/#over', label: 'Over Mark' },
];

export default function SiteHeader() {
  return (
    <header className="site-top">
      <div className="site-top-bar">
        <Link href="/" className="site-brand" aria-label="Wildschut Makelaar Taxateur, naar de homepage">
          <WildschutMark />
          <span className="site-brand-text">
            <span className="site-brand-name">WILDSCHUT</span>
            <span className="site-brand-tag">MAKELAAR · TAXATEUR</span>
          </span>
        </Link>
        <nav className="site-nav" aria-label="Hoofdmenu">
          {links.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
        </nav>
        <Link href="/#contact" className="site-top-cta">Contact</Link>
      </div>
    </header>
  );
}
