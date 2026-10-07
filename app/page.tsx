import dynamic from 'next/dynamic';
import ContactForm from './contact-form';
import HouseValuePopup from './house-value-popup';
import SiteNav from './site-nav';

const SoldHomesMapInteractive = dynamic(
  () => import('./sold-homes-map-interactive'),
  { ssr: false }
);

const services = [
  { title: 'Verkopen', text: 'Een doordachte verkoopstrategie, sterke presentatie en persoonlijke begeleiding van begin tot eind.', href: '/verkopen', label: 'Meer weten' },
  { title: 'Aankopen', text: 'Met lokale kennis en een scherp oog voor kansen help ik je met vertrouwen een woning aankopen.', href: '/aankopen', label: 'Meer weten' },
  { title: 'Taxaties', text: 'Een heldere, onafhankelijke taxatie die je verder helpt bij je volgende financiële stap.', href: '/taxatie', label: 'Taxatie aanvragen' },
  { title: 'Waardebepaling', text: 'Gratis en vrijblijvend weten wat je woning in de huidige markt waard is.', href: '#waardebepaling', label: 'Aanvragen' },
];

const valueSteps = [
  { n: '1', title: 'Je vult je gegevens in', text: 'Adres van de woning en wat je van de waardebepaling verwacht.' },
  { n: '2', title: 'Mark neemt contact met je op', text: 'We spreken een moment af om je woning te bekijken.' },
  { n: '3', title: 'Je krijgt een duidelijk antwoord', text: 'Een heldere uitleg van de geschatte waarde en waarop die is gebaseerd.' },
];

const areas = [
  {
    name: 'Amsterdam-Noord',
    title: 'De stad, met ruimte om je heen.',
    text: 'Van de levendige buurten rond het IJ tot de rust richting het noorden: ik ken de dynamiek van Noord.',
    img: '/amsterdam-noord-overzicht.jpg',
    href: '/makelaar-amsterdam-noord',
  },
  {
    name: 'Landsmeer',
    title: 'Dorps en groen, dichtbij de stad.',
    text: 'Voor wie hier woont of wil wonen, maakt lokale kennis het verschil.',
    img: '/landsmeer-twiske.jpg',
    href: '/makelaar-landsmeer',
  },
];

export default function Home() {
  return (
    <>
      <SiteNav />

      {/* Hero Section */}
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

      {/* Trust Strip */}
      <section className="trust-strip" aria-label="Waar Wildschut Makelaar voor staat">
        <p><strong>25 jaar ervaring</strong>Makelaardij en taxaties</p>
        <p><strong>Eén vast aanspreekpunt</strong>Direct contact met Mark</p>
        <p><strong>NVM MVA</strong>Aangesloten makelaar</p>
        <p><strong>NRVT-geregistreerd</strong>Taxaties gevalideerd via NWWI</p>
      </section>

      {/* Services Intro */}
      <section className="intro-section" id="diensten">
        <div><p className="eyebrow">Diensten</p><h2>Een makelaar die de buurt kent en jou leert kennen.</h2></div>
        <p className="body-copy">Of je nu een woning verkoopt, op zoek bent naar een nieuw thuis of een taxatie nodig hebt: je hebt één vast aanspreekpunt. Ik combineer persoonlijke aandacht met de expertise en slagkracht van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p>
      </section>

      {/* Services Cards */}
      <section className="services" aria-label="Diensten">
        {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.text}</p><a href={service.href} aria-label={`Meer over ${service.title.toLowerCase()}`}>{service.label} <b aria-hidden="true">→</b></a></article>)}
      </section>

      {/* About Me Section */}
      <section className="about" id="over-mij">
        <div className="about-copy"><p className="eyebrow">Over mij</p><h2>Je werkt direct met Mark.</h2><p>Ik ben geboren in Hoorn en begon in 2001 in de makelaardij. Via het Buikslotermeerplein kwam ik in Amsterdam-Noord terecht, sinds 2007 woon ik in Landsmeer. Sinds 2014 werk ik als zelfstandig makelaar en taxateur.</p><p>Ik werk vanuit huis in Landsmeer en vanuit kantoor in Amsterdam-Noord. Zo ben ik dichtbij voor klanten in beide gebieden.</p><a className="text-link" href="/over-mark">Lees mijn verhaal <span aria-hidden="true">→</span></a></div>
      </section>

      {/* Areas Section */}
      <section className="areas" id="werkgebied">
        <div className="area-heading"><p className="eyebrow">Lokaal geworteld</p><h2>Amsterdam-Noord en Landsmeer. Daar ligt mijn focus.</h2></div>
        <div className="area-grid">
          {areas.map((area) => (
            <article key={area.name} style={{ overflow: 'hidden' }}>
              <img src={area.img} alt={area.name} style={{ width: '100%', aspectRatio: '3/2', objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: '24px' }}>
                <p className="area-kicker">{area.name}</p>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
                <a href={area.href}>Makelaar in {area.name} <b aria-hidden="true">→</b></a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Value Section */}
      <section id="waardebepaling" style={{ paddingTop: '96px', paddingBottom: '96px' }}>
        <div style={{ maxWidth: '1196px', margin: '0 auto', padding: '0 42px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '70px', alignItems: 'center' }}>
          <div>
            <p className="eyebrow">Gratis waardebepaling</p>
            <h2>Benieuwd wat jouw woning waard is?</h2>
            <p style={{ color: '#314b68', fontSize: '18px', lineHeight: '1.6', margin: '0' }}>Ik kom langs, kijk naar je woning en de recente verkopen in je buurt, en vertel je wat ik ervan denk. Vrijblijvend.</p>
          </div>
          <div style={{ display: 'grid', gap: '22px', borderTop: '1px solid #cfdce3', paddingTop: '28px' }}>
            {valueSteps.map((step) => (
              <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '12px' }}>
                <span style={{ fontSize: '36px', fontWeight: '600', color: '#c66b4b', lineHeight: '1' }}>{step.n}</span>
                <div><h3 style={{ fontSize: '19px', fontWeight: '600', margin: '0 0 6px' }}>{step.title}</h3><p style={{ margin: '0', color: '#314b68', lineHeight: '1.55' }}>{step.text}</p></div>
              </div>
            ))}
            <a href="#contact" className="button button-primary" style={{ justifySelf: 'start', marginTop: '6px' }}>Vraag je waardebepaling aan</a>
          </div>
        </div>
      </section>

      {/* Erfpacht & Fundering */}
      <section style={{ borderTop: '1px solid #cfdce3', paddingTop: '84px', paddingBottom: '84px' }}>
        <div style={{ maxWidth: '1196px', margin: '0 auto', padding: '0 42px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '60px' }}>
          <div>
            <p className="eyebrow">Erfpacht en fundering</p>
            <h2>Goed kijken naar wat er onder en rond de woning speelt.</h2>
          </div>
          <div style={{ display: 'grid', gap: '26px' }}>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 8px' }}>Fundering</h3>
              <p style={{ color: '#314b68', lineHeight: '1.6', margin: '0 0 8px' }}>Sinds april 2026 weegt funderingsrisico volgens de KCAF-risicoklassen mee in iedere taxatie. Bij vooroorlogse woningen en woningen in Amsterdam-Noord is extra aandacht vaak belangrijk.</p>
              <a href="/fundering" className="text-link">Meer over funderingsrisico <span aria-hidden="true">→</span></a>
            </div>
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 8px' }}>Erfpacht</h3>
              <p style={{ color: '#314b68', lineHeight: '1.6', margin: '0 0 8px' }}>Met <a href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer" className="partner-link">Erfpachtkompas</a>, dat ik zelf ontwikkelde, krijg je een eerste helder inzicht in de aandachtspunten rond een woning.</p>
              <a href="/erfpacht" className="text-link">Bekijk erfpacht <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div style={{ maxWidth: '1196px', margin: '0 auto', padding: '0 42px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '80px' }}>
          <div>
            <p className="eyebrow">Vrijblijvend kennismaken</p>
            <h2>Vertel me waar je mee bezig bent.</h2>
            <p style={{ color: '#314b68', maxWidth: '440px', fontSize: '17px', lineHeight: '1.6', margin: '0 0 34px' }}>Ik reageer binnen één werkdag. Bellen of appen kan ook.</p>
            <div style={{ display: 'grid', gap: '14px', fontSize: '15px' }}>
              <a href="tel:+31642010299" style={{ display: 'grid', gridTemplateColumns: '90px 1fr', color: 'inherit', textDecoration: 'none' }}><span style={{ color: '#314b68' }}>Telefoon</span><strong>06 – 42 01 02 99</strong></a>
              <a href="https://wa.me/31642010299" style={{ display: 'grid', gridTemplateColumns: '90px 1fr', color: 'inherit', textDecoration: 'none' }}><span style={{ color: '#314b68' }}>WhatsApp</span><strong>Stuur een bericht</strong></a>
              <a href="mailto:mark@wildschutmakelaar.nl" style={{ display: 'grid', gridTemplateColumns: '90px 1fr', color: 'inherit', textDecoration: 'none' }}><span style={{ color: '#314b68' }}>E-mail</span><strong>mark@wildschutmakelaar.nl</strong></a>
              <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr' }}><span style={{ color: '#314b68' }}>Kantoor</span><span>Assumburg 16, 1121 EA Landsmeer</span></div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <HouseValuePopup />
      <footer style={{ background: '#162d4a', color: '#c2d1db', fontSize: '13px', padding: '56px 42px 40px', textAlign: 'center' }}>
        <p style={{ color: '#fff', fontWeight: '700', fontSize: '15px', margin: '0 0 10px' }}>Wildschut Makelaar Taxateur</p>
        <p style={{ lineHeight: '1.6', margin: '0' }}>Zelfstandig makelaar en taxateur, powered by <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p>
        <p style={{ margin: '16px 0 0', fontSize: '13px' }}>Assumburg 16, 1121 EA Landsmeer | KvK 60126906 | NRVT RT820909298</p>
        <p style={{ margin: '16px 0 0', fontSize: '13px' }}><a href="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacyverklaring</a> · <a href="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>Algemene voorwaarden</a></p>
      </footer>
    </>
  );
}
