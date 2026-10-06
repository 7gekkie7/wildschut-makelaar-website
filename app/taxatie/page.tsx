import type { Metadata } from 'next';
import ServicePage from '../service-page';

const taxatieAanvraag = 'https://formulier.taxatieaanvraagformulier.nl/opdracht/fc7317ee-9b8c-4c2d-8877-5266f6cc917a/aanvragen';

export const metadata: Metadata = {
  title: 'Officiële woningtaxatie Amsterdam-Noord en Landsmeer | Wildschut',
  description: 'Een erkende, onafhankelijke woningtaxatie. Voor aankoop, erfpacht, financiering. Zorgvuldig onderbouwd en begrijpelijk.',
};

export default function TaxatiePage() {
  return <ServicePage
    eyebrow="Taxaties"
    title={<>Een taxatie die<br /><em>standhoudt.</em></>}
    intro="Een erkende, onafhankelijke taxatie. Zorgvuldig onderbouwd en voorzien van alle informatie die je nodig hebt. Voor de bank, notaris of je eigen zekerheid."
    heading="Grondig, onafhankelijk, betrouwbaar."
    ctaLabel="Taxatie aanvragen"
    ctaHref={taxatieAanvraag}
    external
  >
    <p>Een taxatie is nodig wanneer je geld wilt lenen voor een aankoop, erfpacht wilt afkopen, of je gewoon zekerheid wilt hebben over wat een woning waard is. Een goede taxatie moet standhouden: bij de bank, bij de notaris, bij de verzekering.</p>
    <p>Ik beoordeel de woning zorgvuldig. De staat, de indeling, de ligging, de verkoophistorie. Voor woningen in Amsterdam-Noord let ik extra op erfpacht en funderingsrisico – zaken die belangrijk zijn voor jouw financiële veiligheid.</p>
    <p>De taxatie is helder opgesteld, voorzien van foto's en aandachtspunten. Je kunt ermee naar iedereen toe: bank, notaris, verzekering of wie je maar nodig hebt.</p>
  </ServicePage>;
}
