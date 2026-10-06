'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setIsLoading(true);
    setMessage(null);

    const formData = new FormData(form);
    const data = {
      naam: formData.get('naam'),
      email: formData.get('email'),
      telefoon: formData.get('telefoon') || '',
      bericht: formData.get('bericht'),
      onderwerp: formData.get('onderwerp') || 'Algemeen',
      adres: formData.get('adres') || '',
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Bedankt! Ik neem snel contact met je op.' });
        form.reset();
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
    <form className="contact-form" onSubmit={handleSubmit}>
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
        Waar kan ik je mee helpen?
        <textarea name="bericht" rows={4} required disabled={isLoading} />
      </label>
      <button className="button button-primary" type="submit" disabled={isLoading}>
        {isLoading ? 'Versturen...' : 'Verstuur aanvraag'}
      </button>
      {message && (
        <p className={`form-message form-message-${message.type}`}>
          {message.text}
        </p>
      )}
    </form>
  );
}
