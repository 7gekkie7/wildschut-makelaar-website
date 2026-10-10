import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makelaar Amsterdam-Noord | Wildschut Makelaar Taxateur',
  description: 'Persoonlijke begeleiding bij verkoop, aankoop en taxaties in Amsterdam-Noord. Wildschut Makelaar Taxateur, powered by De Haas Makelaars.',
};

export default function AmsterdamNoordPage() {
  return (
    <main className="local-page">

      <section className="local-hero local-hero-noord">
        <p className="eyebrow">Wildschut Makelaar Taxateur</p>
        <h1>Makelaar in<br /><em>Amsterdam-Noord.</em></h1>
        <p>Voor verkoop, aankoop en taxaties in Amsterdam-Noord heb je één vast aanspreekpunt. Persoonlijk, goed voorbereid en met de slagkracht van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p>
        <a className="button button-primary" href="/#contact">Plan een kennismaking</a>
      </section>

      <section className="local-intro">
        <div><p className="eyebrow">Thuis in Noord</p><h2>Elke buurt heeft een eigen ritme.</h2></div>
        <p>Amsterdam-Noord is volop in beweging. Van woningen dicht bij het IJ tot rustige straten verder naar het noorden: de woning, de straat en het moment in de markt bepalen samen de juiste aanpak. Daarom begint ieder traject met goed luisteren en zorgvuldig kijken.</p>
      </section>

      <section className="local-services" aria-label="Diensten in Amsterdam-Noord">
        <article><h2>Verkopen in Amsterdam-Noord</h2><p>Een sterke presentatie, een realistische strategie en heldere begeleiding van voorbereiding tot overdracht. Zo weet je waar je aan toe bent bij de verkoop van jouw woning.</p><a className="text-link" href="/waardebepaling">Vraag een waardebepaling aan <span aria-hidden="true">→</span></a></article>
        <article><h2>Aankopen in Amsterdam-Noord</h2><p>Bij een aankoop kijk ik verder dan de vraagprijs. Ik help je de woning, de stukken, de positie in de markt en de mogelijke aandachtspunten goed te beoordelen.</p><a className="text-link" href="/#contact">Bespreek jouw zoekopdracht <span aria-hidden="true">→</span></a></article>
        <article><h2>Taxatie in Amsterdam-Noord</h2><p>Een onafhankelijke taxatie geeft helderheid bij aankoop, financiering, verbouwing of herfinanciering. Ik kijk zorgvuldig naar de woning en de situatie waarvoor je de taxatie nodig hebt.</p><a className="text-link" href="https://formulier.taxatieaanvraagformulier.nl/opdracht/fc7317ee-9b8c-4c2d-8877-5266f6cc917a/aanvragen" target="_blank" rel="noreferrer">Taxatie aanvragen <span aria-hidden="true">→</span></a></article>
      </section>

      <section className="local-callout">
        <p className="eyebrow">Erfpacht in Amsterdam</p>
        <h2>Bij een woning in Noord is erfpacht vaak een belangrijk onderdeel van het gesprek.</h2>
        <p>De voorwaarden, de looptijd en de gekozen regeling kunnen invloed hebben op aankoop, verkoop en financiering. Via <a className="partner-link" href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer">Erfpachtkompas</a> krijg je een eerste indicatie van de aandachtspunten.</p>
        <a className="text-link" href="/erfpacht">Meer over erfpacht <span aria-hidden="true">→</span></a>
      </section>

      <section className="local-contact">
        <p className="eyebrow">Kennismaken</p>
        <h2>Op zoek naar een makelaar in Amsterdam-Noord?</h2>
        <p>Vertel kort wat er speelt. Ik neem persoonlijk contact met je op.</p>
        <a className="button button-primary" href="/#contact">Neem contact op</a>
      </section>
    </main>
  );
}
