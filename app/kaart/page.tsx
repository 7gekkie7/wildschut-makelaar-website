import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import SiteNav from '../site-nav';

const SoldHomesMapInteractive = dynamic(() => import('../sold-homes-map-interactive'), { ssr: false });

export const metadata: Metadata = {
  title: 'Kaart met verkopen | Wildschut Makelaar',
  description: 'Interactieve kaart met al onze verkochte woningen in Amsterdam-Noord en Landsmeer.',
};

export default function KaartPage() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="/" aria-label="Wildschut Makelaar Taxateur, naar home"><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /></a>
        <SiteNav />
      </header>

      <section style={{ maxWidth: '1196px', margin: '0 auto', padding: '60px 42px' }}>
        <p style={{ color: '#c66b4b', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, fontSize: '11px', margin: '0 0 18px' }}>Kaart</p>
        <h1 style={{ fontSize: 'clamp(56px, 7vw, 94px)', lineHeight: 0.96, marginBottom: '28px', fontWeight: 600, letterSpacing: '-0.045em', maxWidth: '900px' }}>Interactieve kaart<br /><em style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>met al onze verkopen.</em></h1>
        <p style={{ maxWidth: '560px', color: '#314b68', fontSize: '19px', lineHeight: 1.55, marginBottom: '34px' }}>Verken de kaart, zoom in op een wijk, en klik op de rode punten om meer informatie te zien over de woningen die we hebben verkocht in Amsterdam-Noord en Landsmeer.</p>
      </section>

      <SoldHomesMapInteractive />

      <section style={{ maxWidth: '1196px', margin: '0 auto', padding: '100px 42px', borderTop: '1px solid #cfdce3' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr .8fr', gap: '80px' }}>
          <div>
            <p style={{ color: '#c66b4b', textTransform: 'uppercase', letterSpacing: '0.13em', fontWeight: 'bold', fontSize: '10px', margin: '0 0 18px' }}>Hoe werkt de kaart</p>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', maxWidth: '670px', lineHeight: 1.04, marginBottom: 0, fontWeight: 600, letterSpacing: '-0.045em' }}>Een overzicht van ons werkgebied.</h2>
          </div>
          <div style={{ fontSize: '18px', lineHeight: 1.65, color: '#314b68', alignSelf: 'end' }}>
            <p>Elk rood punt op de kaart stelt een woning voor die wij hebben verkocht. Je kan op elk punt klikken voor meer informatie. Met het zoem- en pangereedschap kan je de kaart verkennen.</p>
          </div>
        </div>
      </section>

      <footer style={{ width: '100%', margin: 0, padding: '36px max(42px, calc((100vw - 1196px)/2)) 46px', background: '#eaf3f8', display: 'grid', gridTemplateColumns: '1fr 1fr auto', alignItems: 'center', gap: '35px', color: '#314b68', fontSize: '12px' }}>
        <img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" style={{ width: '185px' }} />
        <p style={{ margin: 0 }}>Zelfstandig makelaar en taxateur, powered by <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline', textDecorationColor: '#c66b4b', textDecorationThickness: '1px', textUnderlineOffset: '4px' }}>De Haas Makelaars</a>.</p>
        <p style={{ margin: 0 }}>Amsterdam-Noord &amp; Landsmeer</p>
      </footer>
    </main>
  );
}
