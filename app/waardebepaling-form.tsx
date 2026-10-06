'use client';

import { FormEvent, useState } from 'react';

export default function WaardebepalingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      naam: formData.get('naam'),
      email: formData.get('email'),
      telefoon: formData.get('telefoon') || '',
      adres: formData.get('adres'),
      postcodePlaats: formData.get('postcode-plaats'),
      bericht: formData.get('bericht') || '',
    };

    try {
      const response = await fetch('/api/waardebepaling', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Bedankt! Ik neem snel contact met je op voor je waardebepaling.' });
        e.currentTarget.reset();
      } else {
        setMessage({ type: 'error', text: 'Er ging iets mis. Probeer het later opnieuw.' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Er ging iets mis. Probeer het later opnieuw.' });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form className="value-form" onSubmit={handleSubmit}>
      <h2>Vraag je waardebepaling aan</h2>
      <label>
        Naam
        <input type="text" name="naam" autoComplete="name" required disabled={isLoading} />
      </label>
      <label>
        E-mailadres
        <input type="email" name="email" autoComplete="email" required disabled={isLoading} />
      </label>
      <label>
        Telefoonnummer
        <input type="tel" name="telefoon" autoComplete="tel" disabled={isLoading} />
      </label>
      <label>
        Adres van de woning
        <input type="text" name="adres" autoComplete="street-address" required disabled={isLoading} />
      </label>
      <label>
        Postcode en plaats
        <input type="text" name="postcode-plaats" autoComplete="postal-code" required disabled={isLoading} />
      </label>
      <label>
        Waar kan ik je mee helpen?
        <textarea name="bericht" rows={4} placeholder="Bijvoorbeeld: ik overweeg te verkopen, of ik ben gewoon nieuwsgierig." disabled={isLoading} />
      </label>
      <button className="button button-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Versturen...' : 'Verstuur mijn aanvraag'}
      </button>
      {message && (
        <p className={`form-message form-message-${message.type}`}>
          {message.text}
        </p>
      )}
      <p>Je gegevens worden alleen gebruikt om contact met je op te nemen over jouw aanvraag. Geen verplichtingen.</p>
    </form>
  );
}
