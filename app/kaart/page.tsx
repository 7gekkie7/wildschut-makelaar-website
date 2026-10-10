'use client';


export default function KaartPage() {
  return (
    <main>

      <section style={{ maxWidth: '1196px', margin: '0 auto', padding: '60px 42px' }}>
        <p style={{ color: '#c66b4b', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, fontSize: '11px', margin: '0 0 18px' }}>Kaart</p>
        <h1 style={{ fontSize: 'clamp(56px, 7vw, 94px)', lineHeight: 0.96, marginBottom: '28px', fontWeight: 600, letterSpacing: '-0.045em', maxWidth: '900px' }}>Interactieve kaart<br /><em style={{ fontFamily: 'Georgia, serif', fontWeight: 400 }}>met al onze verkopen.</em></h1>
        <p style={{ maxWidth: '560px', color: '#314b68', fontSize: '19px', lineHeight: 1.55, marginBottom: '34px' }}>De interactieve kaart is in voorbereiding. Neem contact op voor meer informatie over onze verkochte woningen in Amsterdam-Noord en Landsmeer.</p>
      </section>

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

    </main>
  );
}
