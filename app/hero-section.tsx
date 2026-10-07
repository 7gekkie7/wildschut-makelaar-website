'use client';

import dynamic from 'next/dynamic';

const SoldHomesMapInteractive = dynamic(
  () => import('./sold-homes-map-interactive'),
  { ssr: false, loading: () => <div style={{ minHeight: '480px', background: '#eaf3f8' }} /> }
);

export function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Makelaar en taxateur in Amsterdam-Noord &amp; Landsmeer</p>
        <h1>Jouw buurt.<br /><em>Mijn vak.</em></h1>
        <p className="intro">Persoonlijke begeleiding bij verkoop, aankoop en taxaties. Met 25 jaar lokale kennis van Amsterdam-Noord en Landsmeer.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#waardebepaling">Gratis waardebepaling</a>
          <a className="button button-secondary" href="#contact">Plan een kennismaking</a>
        </div>
        <p style={{ margin: '22px 0 0', fontSize: '14px', color: '#314b68' }}>
          Liever direct bellen? <a href="tel:+31642010299" style={{ fontWeight: '700', color: '#162d4a', textDecoration: 'underline', textDecorationColor: '#c66b4b', textUnderlineOffset: '4px' }}>06 – 42 01 02 99</a>
        </p>
      </div>
      <div className="hero-visual" aria-label="Werkgebied kaart">
        <SoldHomesMapInteractive />
        <div className="map-label">
          <span>Werkgebied</span>
          <strong>Amsterdam-Noord, Landelijk Noord,<br />Landsmeer &amp; Oostzaan</strong>
        </div>
      </div>
    </section>
  );
}
