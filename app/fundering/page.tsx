import type { Metadata } from 'next';

const faqs = [
  { question: 'Wat betekent funderingsrisico voor mijn taxatie?', answer: 'Sinds april 2026 weegt funderingsrisico volgens de KCAF risicoklassen mee in iedere taxatie. Die risicoklassen zijn een belangrijk signaal, maar geen volledig oordeel over de woning of fundering. De beschikbare stukken, de woning zelf en eventueel aanvullend onderzoek blijven essentieel.' },
  { question: 'Wanneer is extra aandacht voor de fundering verstandig?', answer: 'Bij vooroorlogse woningen en bij woningen in Amsterdam-Noord is een zorgvuldige beoordeling vaak extra belangrijk. De woning, de beschikbare gegevens en de omgeving bepalen samen welke informatie nodig is.' },
];

export const metadata: Metadata = {
  title: 'Funderingsrisico bij taxatie | Wildschut Makelaar Taxateur',
  description: 'Funderingsrisico en KCAF risicoklassen bij verkoop, aankoop en taxatie van woningen in Amsterdam-Noord en Landsmeer.',
};

export default function FunderingPage() {
  const structuredData = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return <main className="service-page fundering-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="service-hero"><p className="eyebrow">Fundering en taxatie</p><h1>Wat onder een woning zit,<br /><em>telt mee.</em></h1><p>Sinds april 2026 weegt funderingsrisico volgens de KCAF risicoklassen mee in iedere taxatie. Daarom kijk ik hier vooraf zorgvuldig naar.</p><a className="button button-primary" href="/#contact">Bespreek jouw woning</a></section>
    <section className="service-intro"><div><p className="eyebrow">Vooraf beoordelen</p><h2>Een aandachtspunt dat je niet wilt missen.</h2></div><div><p>Bij verkoop, aankoop en taxatie beoordeel ik vooraf welke informatie over de fundering beschikbaar is en welke vragen nog openstaan.</p><p>Vooroorlogse woningen vragen vaak om extra aandacht. Dat geldt ook voor delen van Amsterdam-Noord, waar de ondergrond en het type woning van invloed kunnen zijn.</p><p>De KCAF risicoklassen kunnen richting geven aan het gesprek. Tegelijk zijn ze geen volledig oordeel over de woning of de fundering. De gebruikte gegevens zijn niet altijd volledig, actueel of goed herleidbaar. Daarom gebruik ik deze informatie als belangrijk signaal, maar altijd in combinatie met de woning zelf, beschikbare stukken en aanvullend onderzoek waar dat nodig is.</p><p>In het Bouwarchief van Amsterdam en het Waterland Archief zijn in veel gevallen documenten beschikbaar die een goed beeld geven van de bouwkundige en historische situatie. Denk aan tekeningen, funderingsgegevens en informatie over eerdere werkzaamheden. Die bronnen kunnen helpen om de beschikbare informatie beter te duiden.</p></div></section>
    <section className="erfpacht-faq"><p className="eyebrow">Veelgestelde vragen</p>{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</section>
    <section className="service-contact"><p className="eyebrow">Vrijblijvend kennismaken</p><h2>Laat de basis goed beoordelen.</h2><p>Ik denk graag met je mee over jouw woning in Amsterdam-Noord of Landsmeer.</p><a className="button button-primary" href="/#contact">Neem contact op</a></section>
  </main>;
}
