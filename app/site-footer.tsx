import { WildschutMark } from './site-header';

export default function SiteFooter() {
  return (
    <footer className="site-bottom">
      <div className="site-bottom-grid">
        <div className="site-bottom-brand">
          <WildschutMark width={32} />
          <p><strong>Wildschut Makelaar Taxateur</strong><br />Assumburg 16, 1121 EA Landsmeer</p>
        </div>
        <div>
          <p className="site-bottom-title">Werkgebied</p>
          <a href="/makelaar-amsterdam-noord">Makelaar Amsterdam-Noord</a>
          <a href="/makelaar-landsmeer">Makelaar Landsmeer</a>
        </div>
        <div>
          <p className="site-bottom-title">Gegevens</p>
          <span>KvK 60126906</span>
          <span>NRVT RT820909298</span>
          <span>In samenwerking met <a href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a></span>
        </div>
        <div>
          <p className="site-bottom-title">Contact</p>
          <a href="tel:+31642010299">06 42 01 02 99</a>
          <a href="mailto:mark@wildschutmakelaar.nl">mark@wildschutmakelaar.nl</a>
        </div>
      </div>
      <div className="site-bottom-legal">
        <span>Fotografie: <a href="https://www.woningvisueel.nl" target="_blank" rel="noreferrer">Woningvisueel</a></span>
        <span className="site-bottom-links"><a href="/privacy">Privacyverklaring</a><a href="/terms">Algemene voorwaarden</a></span>
      </div>
    </footer>
  );
}
