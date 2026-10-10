import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Makelaar Landsmeer | Wildschut Makelaar Taxateur',
  description: 'Persoonlijke begeleiding bij verkoop, aankoop en taxaties in Landsmeer. Wildschut Makelaar Taxateur, powered by De Haas Makelaars.',
};

export default function LandsmeerPage() {
  return (
    <main className="local-page">

      <section className="local-hero local-hero-landsmeer">
        <p className="eyebrow">Wildschut Makelaar Taxateur</p>
        <h1>Makelaar in<br /><em>Landsmeer.</em></h1>
        <p>Persoonlijke begeleiding bij verkoop, aankoop en taxaties in Landsmeer. Met aandacht voor jouw woning, jouw plannen en een heldere strategie die bij de situatie past.</p>
        <a className="button button-primary" href="/#contact">Plan een kennismaking</a>
      </section>

      <section className="local-intro">
        <div><p className="eyebrow">Dichtbij en persoonlijk</p><h2>De ruimte van Landsmeer, dichtbij Amsterdam.</h2></div>
        <p>Wie in Landsmeer woont, kent de bijzondere combinatie van dorpse rust, water, groen en de nabijheid van de stad. Bij een verkoop, aankoop of taxatie is die context van waarde. Niet alleen de woning telt, maar ook de plek en de mensen die er wonen.</p>
      </section>

      <section className="local-services" aria-label="Diensten in Landsmeer">
        <article><h2>Verkopen in Landsmeer</h2><p>Een goede verkoop begint met een helder beeld van jouw woning en de doelgroep. Ik begeleid de voorbereiding, presentatie, onderhandelingen en afronding met één duidelijk plan.</p><a className="text-link" href="/waardebepaling">Vraag een waardebepaling aan <span aria-hidden="true">→</span></a></article>
        <article><h2>Aankopen in Landsmeer</h2><p>Een woning kopen doe je niet elke dag. Ik help je beoordelen wat je koopt, wat de kansen zijn en welke stappen nodig zijn om met vertrouwen een bod uit te brengen.</p><a className="text-link" href="/#contact">Bespreek jouw zoekopdracht <span aria-hidden="true">→</span></a></article>
        <article><h2>Taxatie in Landsmeer</h2><p>Voor financiering, aankoop, verbouwing of herfinanciering verzorg ik een heldere en onafhankelijke taxatie met aandacht voor de specifieke woning en locatie.</p><a className="text-link" href="https://formulier.taxatieaanvraagformulier.nl/opdracht/fc7317ee-9b8c-4c2d-8877-5266f6cc917a/aanvragen" target="_blank" rel="noreferrer">Taxatie aanvragen <span aria-hidden="true">→</span></a></article>
      </section>

      <section className="local-callout">
        <p className="eyebrow">Eén aanspreekpunt</p>
        <h2>Zelfstandig makelaar, met <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a> achter mij.</h2>
        <p>Je werkt direct met mij. Tegelijkertijd profiteer je van de ervaring, systemen en het netwerk van <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>. Zo combineer je persoonlijk contact met een stevige basis.</p>
        <a className="text-link" href="/#contact">Maak kennis <span aria-hidden="true">→</span></a>
      </section>

      <section className="local-contact">
        <p className="eyebrow">Kennismaken</p>
        <h2>Op zoek naar een makelaar in Landsmeer?</h2>
        <p>Vertel kort wat er speelt. Ik neem persoonlijk contact met je op.</p>
        <a className="button button-primary" href="/#contact">Neem contact op</a>
      </section>
    </main>
  );
}
