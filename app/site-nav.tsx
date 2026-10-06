export default function SiteNav() {
  return (
    <nav aria-label="Hoofdnavigatie">
      <details className="services-nav">
        <summary>Diensten</summary>
        <div className="services-menu">
          <a href="/verkopen">Verkopen</a>
          <a href="/aankopen">Aankopen</a>
          <a href="/taxatie">Taxatie</a>
          <a href="/erfpacht">Erfpacht</a>
          <a href="/fundering">Fundering</a>
        </div>
      </details>
      <a href="/#over-mij">Over Mark</a>
      <a href="/#werkgebied">Werkgebied</a>
      <a className="nav-cta" href="/#contact">Plan een kennismaking</a>
    </nav>
  );
}
