import type { Metadata } from 'next';
import ServicePage from '../service-page';

export const metadata: Metadata = {
  title: 'Aankoopmakelaar Amsterdam-Noord en Landsmeer | Wildschut',
  description: 'Koop met vertrouwen in Amsterdam-Noord en Landsmeer. Wildschut Makelaar helpt bij beoordeling, onderhandelingen en de belangrijke keuzes.',
};

export default function AankopenPage() {
  return <ServicePage eyebrow="Woning aankopen" title={<>Koop met kennis<br /><em>van de buurt.</em></>} intro="Bij een aankoop komt veel kijken. Ik help je om scherp te kijken naar de woning, de mogelijkheden en de aandachtspunten." heading="Een aankoopbeslissing neem je niet alleen.">
    <p>Van de eerste bezichtiging tot de onderhandeling en de stukken bij de koop, ik help je om de juiste vragen te stellen. Daarbij kijk ik verder dan alleen de vraagprijs.</p>
    <p>Erfpacht en fundering kunnen bij een woning in Amsterdam-Noord extra aandacht vragen. Die onderwerpen neem ik vroeg mee in de beoordeling.</p>
  </ServicePage>;
}
