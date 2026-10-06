import type { Metadata } from 'next';
import ServicePage from '../service-page';

export const metadata: Metadata = {
  title: 'Woning verkopen in Amsterdam-Noord en Landsmeer | Wildschut',
  description: 'Persoonlijke verkoopbegeleiding voor jouw woning in Amsterdam-Noord en Landsmeer, met een heldere strategie en één vast aanspreekpunt.',
};

export default function VerkopenPage() {
  return <ServicePage eyebrow="Woning verkopen" title={<>Verkoop met een<br /><em>helder plan.</em></>} intro="Een goede verkoop begint met luisteren, een realistische strategie en een presentatie die past bij jouw woning en buurt." heading="Van eerste gesprek tot sleuteloverdracht.">
    <p>We bespreken eerst jouw woning, jouw planning en wat je wilt bereiken. Daarna maak ik een verkoopplan dat past bij de woning en de markt in Amsterdam-Noord of Landsmeer.</p>
    <p>Je werkt direct met mij. Tegelijkertijd maak ik gebruik van de ervaring, systemen en het netwerk van De Haas Makelaars.</p>
  </ServicePage>;
}
