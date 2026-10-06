import ContactForm from './contact-form';
import HouseValuePopup from './house-value-popup';
import SiteNav from './site-nav';
import SoldHomesMap from './sold-homes-map';

const services = [
  { title: 'Verkopen', text: 'Een doordachte verkoopstrategie, sterke presentatie en persoonlijke begeleiding van begin tot eind.', href: '/verkopen', label: 'Meer weten' },
  { title: 'Aankopen', text: 'Met lokale kennis en een scherp oog voor kansen help ik je met vertrouwen een woning aankopen.', href: '/aankopen', label: 'Meer weten' },
  { title: 'Taxaties', text: 'Een heldere, onafhankelijke taxatie die je verder helpt bij je volgende financiële stap.', href: '/taxatie', label: 'Meer weten' },
];

export default function Home() {
  return (
    <main>
      <HouseValuePopup />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Wildschut Makelaar Taxateur, naar boven"><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /></a>
        <SiteNav />
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Amsterdam-Noord &amp; Landsmeer</p>
          <h1>Jouw buurt.<br /><em>Mijn vak.</em></h1>
          <p className="intro">Persoonlijke begeleiding bij verkoop, aankoop en taxaties. Met lokale kennis van Amsterdam-Noord en Landsmeer.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Plan een kennismaking</a><a className="text-link" href="#diensten">Bekijk diensten <span aria-hidden="true">→</span></a></div>
        </div>
        <div className="hero-visual" aria-label="Amsterdam-Noord en Landsmeer">
          <div className="map-copy"><span>Thuis in</span><strong>Amsterdam-Noord<br />&amp; Landsmeer</strong></div>
          <div className="map-line map-line-one" /><div className="map-line map-line-two" /><div className="map-line map-line-three" />
          <div className="map-dot map-dot-one" /><div className="map-dot map-dot-two" /><div className="water-label">Het IJ</div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Waar Wildschut Makelaar voor staat">
        <p><strong>25 jaar ervaring</strong>Makelaardij en taxaties</p>
        <p><strong>Amsterdam-Noord &amp; Landsmeer</strong>Daar ligt mijn focus</p>
        <p><strong>Één vast aanspreekpunt</strong>Direct contact met Mark</p>
      </section>

      <section className="intro-section" id="diensten">
        <div><p className="eyebrow">Wildschut Makelaar Taxateur</p><h2>Een makelaar die de buurt kent en jou leert kennen.</h2></div>
        <p className="body-copy">Of je nu een woning verkoopt, op zoek bent naar een nieuw thuis of een taxatie nodig hebt: je hebt één vast aanspreekpunt. Ik combineer persoonlijke aandacht met de expertise en slagkracht van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p>
      </section>

      <section className="services" aria-label="Diensten">
        {services.map((service) => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.text}</p><a href={service.href} target={service.external ? '_blank' : undefined} rel={service.external ? 'noreferrer' : undefined} aria-label={service.external ? 'Taxatie aanvragen' : `Meer over ${service.title.toLowerCase()}`}>{service.label} <b aria-hidden="true">→</b></a></article>)}
      </section>

      <section className="about" id="over-mij">
        <div className="about-visual"><img src="/mark-wildschut.jpg" alt="Mark Wildschut, makelaar en taxateur" /><div className="about-visual-copy"><p>Mark<br />Wildschut</p><span>Persoonlijk, helder en betrokken.</span></div></div>
        <div className="about-copy"><p className="eyebrow">Over mij</p><h2>Je werkt direct met Mark.</h2><p>Ik ben geboren in Hoorn en opgegroeid in West-Friesland. In 2001 begon mijn loopbaan in de makelaardij via een stage in Purmerend. Daarna kwam ik in Amsterdam-Noord terecht, waar ik werkte aan het Buikslotermeerplein en ook zelf naar Amsterdam verhuisde.</p><p>De combinatie van West-Friese nuchterheid en Amsterdamse branie voelde voor mij direct goed. In Noord voelde ik mij meteen op mijn gemak.</p><p>In 2007 verhuisde ik van Amsterdam naar Landsmeer. Een jaar later ging ik werken bij een Landsmeers makelaarskantoor met vestigingen in Amsterdam. Sinds 2014 werk ik als zelfstandig makelaar en taxateur. Met inmiddels 25 jaar ervaring help ik je bij verkoop, aankoop en taxaties in Amsterdam-Noord en Landsmeer.</p><p>Ik werk vanuit huis in Landsmeer en vanuit kantoor in Amsterdam-Noord. Zo ben ik dichtbij voor klanten in beide gebieden en combineer ik lokale betrokkenheid met een professioneel netwerk.</p><p>Ik werk zelfstandig, met de ervaring, systemen en het netwerk van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a> achter mij.</p><p>Buiten mijn werk ben ik vader van twee zoons. In mijn vrije tijd racefiets ik, kickboks ik, golf ik en schaats ik graag.</p><a className="text-link" href="#contact">Maak kennis <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="areas" id="werkgebied">
        <div className="area-heading"><p className="eyebrow">Lokaal geworteld</p><h2>Amsterdam-Noord en Landsmeer. Daar ligt mijn focus.</h2></div>
        <div className="area-grid"><article className="area-noord"><div><p className="area-kicker">Amsterdam-Noord</p><h3>De stad, met ruimte om je heen.</h3><p>Van de levendige buurten rond het IJ tot de rust richting het noorden: ik ken de dynamiek van Noord.</p><a href="/makelaar-amsterdam-noord">Makelaar in Amsterdam-Noord <b aria-hidden="true">→</b></a></div></article><article className="area-landsmeer"><div><p className="area-kicker">Landsmeer</p><h3>Dorps en groen, dichtbij de stad.</h3><p>Voor wie hier woont of wil wonen, maakt lokale kennis het verschil.</p><a href="/makelaar-landsmeer">Makelaar in Landsmeer <b aria-hidden="true">→</b></a></div></article></div>
      </section>

      <SoldHomesMap />

      <section className="offer-preview" id="woningaanbod"><p className="eyebrow">Woningaanbod</p><h2>Binnenkort vind je hier mijn actuele aanbod.</h2><p>Op zoek naar een woning in Amsterdam-Noord of Landsmeer? Neem gerust alvast contact op.</p><a className="text-link" href="#contact">Laat weten wat je zoekt <span aria-hidden="true">→</span></a></section>

      <section className="partners" id="samenwerking">
        <p className="eyebrow">Sterk netwerk, persoonlijk contact</p>
        <div className="partners-grid">
          <article><p className="partner-kicker">Makelaarsondersteuning</p><h2>Powered by<br /><em><a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</em></h2><p>Wildschut Makelaar werkt zelfstandig, met de ervaring, systemen en het netwerk van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a> achter zich.</p></article>
          <article><p className="partner-kicker">Erfpacht</p><h2>Erfpacht<br /><em>begrijpelijk gemaakt.</em></h2><p>Erfpacht is voor consumenten niet altijd eenvoudig te doorgronden. Met <a className="partner-link" href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer">Erfpachtkompas</a>, dat ik zelf ontwikkelde, krijg je een eerste helder inzicht in de aandachtspunten rond een woning.</p><a href="/erfpacht" className="text-link">Bekijk erfpacht <span aria-hidden="true">→</span></a></article>
          <article><p className="partner-kicker">Financieel advies</p><h2>Een huis en<br /><em>een helder plan.</em></h2><p>Voor hypotheek- en financiële vraagstukken werk ik samen met Hypotheekvisie Buikslotermeerplein.</p></article>
        </div>
      </section>

      <section className="foundation-section" aria-labelledby="fundering-titel">
        <div><p className="eyebrow">Fundering</p><h2 id="fundering-titel">Goed kijken naar wat er onder de woning speelt.</h2></div>
        <div className="foundation-copy"><p>Sinds april 2026 weegt funderingsrisico volgens de KCAF risicoklassen mee in iedere taxatie. Die risicoklassen zijn een belangrijk signaal, maar geen volledig oordeel over de woning of fundering.</p><p>Ik beoordeel vooraf welke informatie beschikbaar is en welke vragen nog openstaan. Bij vooroorlogse woningen en woningen in Amsterdam-Noord is die extra aandacht vaak belangrijk.</p><a className="text-link" href="/fundering">Meer over funderingsrisico <span aria-hidden="true">→</span></a></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-copy"><p className="eyebrow">Vrijblijvend kennismaken</p><h2>Vertel me waar je mee bezig bent.</h2><p>Ik denk graag met je mee over verkoop, aankoop, taxatie of erfpacht in Amsterdam-Noord en Landsmeer.</p></div>
        <ContactForm />
      </section>

      <footer><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /><p>Zelfstandig makelaar en taxateur, powered by <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p><p>Amsterdam-Noord &amp; Landsmeer</p></footer>
    </main>
  );
}
