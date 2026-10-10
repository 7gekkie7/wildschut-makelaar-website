'use client';

import { FormEvent, useState } from 'react';

const tabs = [
  { id: 'Verkopen', cta: 'Gratis waardebepaling' },
  { id: 'Aankopen', cta: 'Plan een kennismaking' },
  { id: 'Taxatie', cta: 'Taxatie aanvragen' },
  { id: 'Erfpacht', cta: 'Vraag erfpachtadvies' },
];

export default function Waardecheck() {
  const [tab, setTab] = useState(tabs[0]);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get('contact') || '').trim();
    const adres = `${data.get('postcode') || ''} ${data.get('huisnummer') || ''}`.trim();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          naam: data.get('naam'),
          email: contact.includes('@') ? contact : '',
          telefoon: contact.includes('@') ? '' : contact,
          onderwerp: tab.id,
          adres,
          bericht: `Aanvraag via de homepage: ${tab.cta}.`,
        }),
      });
      if (!response.ok) throw new Error();
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className="waardecheck" aria-label="Waardecheck" onSubmit={handleSubmit}>
      <div className="waardecheck-tabs" role="group" aria-label="Waarmee kan ik je helpen?">
        {tabs.map((t) => (
          <button key={t.id} type="button" aria-pressed={t.id === tab.id} onClick={() => setTab(t)}>{t.id}</button>
        ))}
      </div>
      <div className="waardecheck-fields">
        <label>Postcode<input type="text" name="postcode" autoComplete="postal-code" placeholder="1121 EA" required /></label>
        <label>Huisnummer<input type="text" name="huisnummer" placeholder="16" required /></label>
        <label>Naam<input type="text" name="naam" autoComplete="name" required /></label>
        <label>Telefoon of e-mail<input type="text" name="contact" autoComplete="email" required /></label>
        <button type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Versturen…' : tab.cta}</button>
      </div>
      {status === 'sent' && <p className="waardecheck-note" role="status">Bedankt! Ik neem binnen één werkdag contact met je op.</p>}
      {status === 'error' && <p className="waardecheck-note waardecheck-error" role="alert">Er ging iets mis. Bel of app gerust: 06 42 01 02 99.</p>}
    </form>
  );
}
