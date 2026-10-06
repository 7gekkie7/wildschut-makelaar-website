import SiteNav from '../site-nav';

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main style={{ maxWidth: '900px', margin: '0 auto', padding: '64px 42px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: '600', marginBottom: '32px' }}>Privacyverklaring</h1>
        
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>1. Introductie</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            Wildschut Makelaar Taxateur hecht veel waarde aan de bescherming van uw persoonsgegevens. Deze privacyverklaring beschrijft hoe wij uw gegevens verzamelen, gebruiken en beveiligen.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>2. Wat zijn persoonsgegevens?</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            Persoonsgegevens zijn alle informatie over een geïdentificeerde of identificeerbare persoon. Dit kunnen bijvoorbeeld uw naam, e-mailadres, telefoonnummer, adres en woonplaats zijn.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>3. Welke gegevens verzamelen wij?</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            Wanneer u onze contactformulier invult, verzamelen wij: naam, e-mailadres, telefoonnummer, adres, en uw bericht.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>4. Waarvoor gebruiken wij uw gegevens?</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            Wij gebruiken uw gegevens voor beantwoording van vragen, afspraken maken en het verbeteren van onze diensten.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>5. Beveiliging</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            Uw gegevens worden beveiligd met modern encryptie en opgeslagen op veilige servers.
          </p>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '16px' }}>6. Uw rechten</h2>
          <p style={{ lineHeight: '1.6', color: '#314b68', marginBottom: '16px' }}>
            U heeft het recht op inzage, correctie en verwijdering van uw gegevens. Contacteer ons via <a href="mailto:mark@wildschutmakelaar.nl">mark@wildschutmakelaar.nl</a>.
          </p>
        </section>

        <p style={{ fontSize: '12px', color: '#999', marginTop: '48px' }}>
          Laatst bijgewerkt: oktober 2026
        </p>
      </main>
    </>
  );
}
