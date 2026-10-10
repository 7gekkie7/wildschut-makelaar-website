import Waardecheck from './waardecheck';

const services = [
  { title: 'Verkoop', text: 'Een realistische vraagprijs, een sterke presentatie en heldere begeleiding tot de overdracht.', href: '/verkopen', label: 'Meer over verkopen', icon: 'M3 11 L12 4 L21 11 M5 10 V20 H19 V10 M10 20 V14 H14 V20' },
  { title: 'Aankoop', text: 'Ik beoordeel de woning, de stukken en de aandachtspunten, zodat je weet wat je koopt.', href: '/aankopen', label: 'Meer over aankopen', icon: 'M11 12 L20 3 M16 7 L19 10 M12 15 A4 4 0 1 1 4 15 A4 4 0 1 1 12 15' },
  { title: 'Taxatie', text: 'Een onafhankelijk, NWWI-gevalideerd rapport. Ik ben NRVT-geregistreerd taxateur.', href: '/taxatie', label: 'Taxatie aanvragen', icon: 'M7 3 H17 A2 2 0 0 1 19 5 V19 A2 2 0 0 1 17 21 H7 A2 2 0 0 1 5 19 V5 A2 2 0 0 1 7 3 M9 8 H15 M9 12 H15 M9 16 H12' },
];

const keurmerken = [
  { src: '/logos/nvm.png', alt: 'Koninklijke NVM', h: 48 },
  { src: '/logos/mva.png', alt: 'MVA, Makelaarsvereniging Amsterdam', h: 48 },
  { src: '/logos/mva-erfpacht-deskundige.png', alt: 'MVA Erfpacht Deskundige', h: 40 },
  { src: '/logos/vastgoedcert.png', alt: 'Vastgoedcert gecertificeerd makelaar', h: 40 },
  { src: '/logos/nrvt.png', alt: 'NRVT Register Taxateur', h: 48 },
  { src: '/logos/nwwi.jpg', alt: 'NWWI, Nederlands Woning Waarde Instituut', h: 40 },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Wildschut Makelaar Taxateur',
  telephone: '+31642010299',
  email: 'mark@wildschutmakelaar.nl',
  address: { '@type': 'PostalAddress', streetAddress: 'Assumburg 16', postalCode: '1121 EA', addressLocality: 'Landsmeer', addressCountry: 'NL' },
  areaServed: ['Amsterdam-Noord', 'Landsmeer'],
  founder: { '@type': 'Person', name: 'Mark Wildschut' },
};

export default function Home() {
  return (
    <main id="top" className="home">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="home-wrap">
        <div className="home-hero">
          <img src="/foto/ij-amsterdam-noord.jpg" alt="Uitzicht over het IJ naar Amsterdam-Noord met de A'DAM-toren" width={2000} height={1335} fetchPriority="high" />
          <span className="home-hero-tag">Amsterdam-Noord · Landsmeer</span>
          <aside className="home-agent" aria-label="Je makelaar">
            <div className="home-agent-person">
              <img src="/mark-wildschut.jpg" alt="Mark Wildschut" width={56} height={56} />
              <div><strong>Mark Wildschut</strong><span>Makelaar &amp; taxateur</span></div>
            </div>
            <div className="home-agent-actions">
              <a href="tel:+31642010299" className="is-dark">Bellen</a>
              <a href="https://wa.me/31642010299">WhatsApp</a>
            </div>
          </aside>
        </div>

        <div className="home-intro">
          <h1>Ik help je verkopen, kopen en taxeren in Noord en Landsmeer.</h1>
          <p>Persoonlijk en lokaal, met De Haas Makelaars achter me. Je hebt één vast aanspreekpunt, van het eerste gesprek tot de sleuteloverdracht.</p>
        </div>

        <Waardecheck />

        <div className="home-keurmerken" aria-label="Aangesloten en geregistreerd bij">
          <span>Aangesloten en geregistreerd bij</span>
          <div>
            {keurmerken.map((k) => <img key={k.src} src={k.src} alt={k.alt} style={{ height: k.h }} />)}
          </div>
        </div>
      </section>

      <section id="diensten" className="home-wrap home-section">
        <div className="home-heading">
          <h2>Diensten</h2>
          <p>Drie dingen, goed gedaan. Met kennis van de buurt en eerlijk advies.</p>
        </div>
        <div className="home-cards">
          {services.map((s) => (
            <article key={s.title} className="home-card">
              <span className="home-icon"><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#7A5C46" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={s.icon} /></svg></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href={s.href}>{s.label} →</a>
            </article>
          ))}
        </div>
      </section>

      <section id="erfpacht" className="home-wrap home-section">
        <div className="home-ek">
          <div className="home-ek-copy">
            <div className="home-ek-badge">
              <img src="/logos/erfpachtkompas.png" alt="Logo Erfpachtkompas" width={56} height={56} />
              <span>Mijn eigen app</span>
            </div>
            <h2>Erfpachtkompas: inzicht in erfpacht, zonder gedoe.</h2>
            <p>Erfpacht speelt bij veel woningen in Amsterdam, en het is lastig te doorgronden. Daarom ontwikkelde ik Erfpachtkompas: een app die je helpt de erfpacht van een woning te begrijpen.</p>
            <div className="home-ek-points">
              <div><strong>Op adres</strong><span>Zoek een woning op</span></div>
              <div><strong>Overzicht</strong><span>Alles op één scherm</span></div>
              <div><strong>Uitleg</strong><span>Wat het voor jou betekent</span></div>
            </div>
            <div className="home-actions">
              <a href="https://www.erfpachtkompas.nl" className="btn btn-dark" target="_blank" rel="noreferrer">Naar www.erfpachtkompas.nl</a>
              <a href="/erfpacht" className="btn btn-line">Meer over erfpacht</a>
            </div>
          </div>
          <div className="home-ek-visual">
            <div className="phone" role="img" aria-label="Voorbeeld van de Erfpachtkompas-app">
              <div className="phone-screen">
                <div className="phone-head"><img src="/logos/erfpachtkompas.png" alt="" width={30} height={30} /><strong>Erfpachtkompas</strong></div>
                <div className="phone-search">Zoek een adres</div>
                <div className="phone-card">
                  <strong>Erfpacht in één oogopslag</strong>
                  {[['Stelsel', 84], ['Canon', 60], ['Einde tijdvak', 72], ['Afgekocht', 40]].map(([label, w]) => (
                    <div key={label} className="phone-row"><span>{label}</span><i style={{ width: w as number }} /></div>
                  ))}
                </div>
                <div className="phone-card phone-card-warm">
                  <strong>Aandachtspunten</strong>
                  <i /><i style={{ width: '75%' }} />
                </div>
                <span className="phone-button">Bekijk rapport</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="werkgebied" className="home-wrap home-section">
        <div className="home-heading"><h2>Mijn werkgebied</h2></div>
        <div className="home-areas">
          <article className="home-area">
            <img src="/foto/ndsm-haven.jpg" alt="Haven bij de NDSM-werf in Amsterdam-Noord" width={1400} height={934} loading="lazy" />
            <div>
              <div className="home-area-title"><h3>Amsterdam-Noord</h3><span>1020–1039</span></div>
              <p>Volop in beweging, van het IJ tot de tuindorpen. Elke buurt heeft een eigen ritme en een eigen markt.</p>
              <a href="/makelaar-amsterdam-noord">Makelaar in Amsterdam-Noord →</a>
            </div>
          </article>
          <article className="home-area">
            <img src="/foto/twiske-molen.jpg" alt="Molen in het Twiske bij Landsmeer" width={1400} height={933} loading="lazy" />
            <div>
              <div className="home-area-title"><h3>Landsmeer</h3><span>1121</span></div>
              <p>Dorpse rust, water en groen, op een steenworp van de stad. Hier woon en werk ik zelf.</p>
              <a href="/makelaar-landsmeer">Makelaar in Landsmeer →</a>
            </div>
          </article>
        </div>
      </section>

      <section id="over" className="home-wrap home-section">
        <div className="home-about">
          <div className="home-about-copy">
            <h2>Zelfstandig, met de kracht van De Haas Makelaars.</h2>
            <p>Ik ben Mark Wildschut, makelaar sinds 2001 en zelfstandig sinds 2014. Als zzp&apos;er werk ik samen met <a href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a> in Amsterdam. Jij krijgt persoonlijk contact met mij, met de ervaring, systemen en het netwerk van een stevig kantoor erachter.</p>
            <div className="home-pills"><span>NVM MVA</span><span>NRVT RT820909298</span><span>Sinds 2001</span></div>
          </div>
          <img src="/mark-wildschut.jpg" alt="Mark Wildschut" loading="lazy" />
        </div>
      </section>

      <section id="contact" className="home-wrap home-section home-last">
        <div className="home-contact">
          <div>
            <h2>Vertel me waar je mee bezig bent.</h2>
            <p>Ik reageer binnen één werkdag. Bellen of appen kan ook.</p>
          </div>
          <div className="home-contact-tiles">
            <a href="tel:+31642010299" className="is-light"><span>Telefoon</span><strong>06 42 01 02 99</strong></a>
            <a href="https://wa.me/31642010299"><span>WhatsApp</span><strong>Stuur een bericht</strong></a>
            <a href="mailto:mark@wildschutmakelaar.nl"><span>E-mail</span><strong>mark@wildschutmakelaar.nl</strong></a>
            <div><span>Kantoor</span><strong>Assumburg 16, Landsmeer</strong></div>
          </div>
        </div>
      </section>
    </main>
  );
}
