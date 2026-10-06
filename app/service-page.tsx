import type { ReactNode } from 'react';
import SiteNav from './site-nav';

type ServicePageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  heading: string;
  children: ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  external?: boolean;
};

export default function ServicePage({ eyebrow, title, intro, heading, children, ctaLabel = 'Plan een kennismaking', ctaHref = '/#contact', external = false }: ServicePageProps) {
  return (
    <main className="service-page">
      <header className="site-header">
        <a className="brand" href="/" aria-label="Wildschut Makelaar Taxateur, naar home"><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /></a>
        <SiteNav />
      </header>
      <section className="service-hero">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{intro}</p>
        <a className="button button-primary" href={ctaHref} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{ctaLabel}</a>
      </section>
      <section className="service-intro">
        <div><p className="eyebrow">Persoonlijk en onderbouwd</p><h2>{heading}</h2></div>
        <div>{children}</div>
      </section>
      <section className="service-contact">
        <p className="eyebrow">Vrijblijvend kennismaken</p><h2>Bespreek jouw situatie.</h2>
        <p>Ik denk graag met je mee over jouw woning in Amsterdam-Noord of Landsmeer.</p>
        <a className="button button-primary" href="/#contact">Neem contact op</a>
      </section>
      <footer><img src="/wildschut-logo.png" alt="Wildschut Makelaar Taxateur" /><p>Zelfstandig makelaar en taxateur, powered by <a className="partner-link" href="https://www.dehaasmakelaars.nl" target="_blank" rel="noreferrer">De Haas Makelaars</a>.</p><p>Amsterdam-Noord &amp; Landsmeer</p></footer>
    </main>
  );
}
