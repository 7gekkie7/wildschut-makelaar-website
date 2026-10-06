import type { Metadata } from 'next';
import WaardebepalingForm from '../waardebepaling-form';
import SiteNav from '../site-nav';

export const metadata: Metadata = {
  title: 'Gratis waardebepaling | Wildschut Makelaar Taxateur',
  description: 'Vraag een vrijblijvende waardebepaling aan voor jouw woning in Amsterdam-Noord of Landsmeer. Geen verplichtingen.',
};

export default function WaardebepalingPage() {
  return (
    <main className="value-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Wildschut Makelaar Taxateur, naar home"><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /></a>
        <SiteNav />
      </header>

      <section className="value-hero">
        <div>
          <p className="eyebrow">Wat is jouw woning waard?</p>
          <h1>Duidelijkheid over<br /><em>de waarde van jouw huis.</em></h1>
          <p>Je woning heeft een waarde op de markt van vandaag. Een waardebepaling geeft je die duidelijkheid. Gratis en zonder verplichtingen.</p>
          <p className="value-note">Voor woningen in Amsterdam-Noord en Landsmeer.</p>
        </div>
        <WaardebepalingForm />
      </section>

      <section className="value-benefits">
        <div><p className="eyebrow">Waarom een waardebepaling?</p><h2>Duidelijkheid geeft rust.</h2></div>
        <div className="benefits-grid">
          <article>
            <h3>Je weet waar je staat</h3>
            <p>Een realistische inschatting van de waarde van jouw woning. Gebaseerd op de markt in jouw buurt.</p>
          </article>
          <article>
            <h3>Voor je volgende stap</h3>
            <p>Of je geld wilt lenen, wilt verkopen of gewoon beter wilt slapen: duidelijkheid helpt.</p>
          </article>
          <article>
            <h3>Vrijblijvend</h3>
            <p>Geen verplichtingen. Ik kom langs, kijk naar jouw woning en vertel je wat ik ervan denk.</p>
          </article>
          <article>
            <h3>Persoonlijk contact</h3>
            <p>Je spreekt Mark Wildschut. Niet een callcenter, niet een algoritme. Gewoon een makelaar die luistert.</p>
          </article>
        </div>
      </section>

      <section className="value-process">
        <div><p className="eyebrow">Hoe werkt het?</p><h2>Een waardebepaling in drie stappen.</h2></div>
        <div className="process-steps">
          <article>
            <p className="step-number">1</p>
            <h3>Je vraag wordt opgenomen</h3>
            <p>Vul het formulier in met basisgegevens en wat je van de waardebepaling verwacht.</p>
          </article>
          <article>
            <p className="step-number">2</p>
            <h3>Mark neemt contact op</h3>
            <p>Mark neemt je op en spreekt een moment af om je woning te bezichtigen.</p>
          </article>
          <article>
            <p className="step-number">3</p>
            <h3>Je ontvangt een duidelijk antwoord</h3>
            <p>Na bezichtiging krijg je een heldere uitleg van de geschatte waarde en waarop die is gebaseerd.</p>
          </article>
        </div>
      </section>

      <footer><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /><p>Zelfstandig makelaar en taxateur, powered by <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p><p>Amsterdam-Noord &amp; Landsmeer</p></footer>
    </main>
  );
}
