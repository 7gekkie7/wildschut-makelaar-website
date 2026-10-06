'use client';

import { useEffect, useState } from 'react';

const storageKey = 'wildschut-huiswaarde-popup-gezien';

export default function HouseValuePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem(storageKey)) return;
    const timer = window.setTimeout(() => setIsOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  function closePopup() {
    window.localStorage.setItem(storageKey, 'ja');
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="house-value-popup" role="dialog" aria-modal="true" aria-labelledby="house-value-title">
      <button className="popup-close" type="button" onClick={closePopup} aria-label="Sluit melding">×</button>
      <p className="eyebrow">Amsterdam-Noord &amp; Landsmeer</p>
      <h2 id="house-value-title">Benieuwd wat jouw woning waard is?</h2>
      <p>Vraag vrijblijvend een waardebepaling aan. Ik kijk persoonlijk naar jouw woning en de actuele markt in de buurt.</p>
      <a className="button button-primary" href="/waardebepaling" onClick={closePopup}>Vraag je waardebepaling aan</a>
      <button className="popup-later" type="button" onClick={closePopup}>Misschien later</button>
    </div>
  );
}
