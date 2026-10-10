import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Erfpacht in Amsterdam | Wildschut Makelaar Taxateur',
  description: 'Heldere uitleg over erfpacht bij aankoop, verkoop en taxatie van een woning in Amsterdam.',
};

export default function ErfpachtPage() {
  return (
    <main className="erfpacht-page">

      <section className="erfpacht-hero">
        <p className="eyebrow">Erfpacht in Amsterdam</p>
        <h1>Weet waar je aan toe bent<br /><em>vóór je beslist.</em></h1>
        <p>Erfpacht kan invloed hebben op de waarde, verkoopbaarheid en financiering van een woning. Ik help je de relevante gegevens goed te begrijpen.</p>
        <a className="button button-primary" href="/#contact">Bespreek jouw situatie</a>
      </section>

      <section className="erfpacht-intro">
        <div><p className="eyebrow">Wat betekent het?</p><h2>Erfpacht is meer dan een regel in de koopakte.</h2></div>
        <p>Bij erfpacht is de grond onder de woning niet van de eigenaar van de woning. In Amsterdam komt dit veel voor. De hoogte van de canon, een overstap naar eeuwigdurende erfpacht en de resterende looptijd kunnen een rol spelen bij aankoop, verkoop en financiering.</p>
      </section>

      <section className="erfpacht-steps">
        <article><h2>Adres en dossier</h2><p>We beginnen met de gegevens die bij de woning horen, zoals de erfpachtvoorwaarden, lopende canon en beschikbare documenten.</p></article>
        <article><h2>Helder inzicht</h2><p>Ik leg uit welke gegevens van belang zijn en wat zij praktisch kunnen betekenen voor jouw aankoop- of verkoopbeslissing.</p></article>
        <article><h2>Volgende stap</h2><p>Als een berekening of nader advies nodig is, bekijken we samen welke vervolgstap passend is.</p></article>
      </section>

      <section className="erfpacht-callout">
        <p className="eyebrow"><a href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer">Erfpachtkompas</a></p>
        <h2>Ontwikkeld vanuit de praktijk.</h2>
        <p>Ik ontwikkelde <a className="partner-link" href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer">Erfpachtkompas</a> als website en app voor iOS en Android. Het is in de eerste plaats bedoeld voor collega-makelaars, notarissen en andere professionals die met erfpacht werken.</p>
        <p>Voor consumenten is erfpacht vaak lastig te begrijpen. Daarom helpt Erfpachtkompas om de juiste vragen te stellen en een eerste indicatie van de aandachtspunten te krijgen. Een uitkomst blijft altijd indicatief en wordt beoordeeld binnen de specifieke situatie van de woning en het erfpachtdossier.</p>
        <a className="text-link" href="https://erfpachtkompas.nl" target="_blank" rel="noreferrer">Meer over Erfpachtkompas <span aria-hidden="true">→</span></a>
      </section>

      <section className="erfpacht-faq">
        <p className="eyebrow">Veelgestelde vragen</p>
        <details><summary>Heeft erfpacht invloed op de waarde van een woning?</summary><p>Dat kan. De gevolgen hangen onder meer af van de voorwaarden, de canon en de resterende looptijd. Iedere situatie vraagt om een beoordeling in context.</p></details>
        <details><summary>Kan ik een woning met erfpacht kopen?</summary><p>Ja. Het is wel verstandig om de erfpachtgegevens vooraf goed te laten controleren, zeker wanneer financiering een rol speelt.</p></details>
        <details><summary>Is een berekening altijd definitief?</summary><p>Nee. Een indicatieve berekening is een hulpmiddel. De actuele erfpachtgegevens en het dossier van de woning blijven leidend.</p></details>
      </section>

    </main>
  );
}
