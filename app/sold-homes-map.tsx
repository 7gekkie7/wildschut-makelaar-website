'use client';

import { useEffect, useMemo, useState } from 'react';
import { soldHomes } from './sold-homes-data';

type SoldHome = (typeof soldHomes)[number];

const buurtAnkers: Record<string, [number, number]> = {
  '1021': [35, 70], '1022': [45, 67], '1023': [57, 60], '1024': [64, 53],
  '1025': [54, 45], '1026': [68, 27], '1027': [73, 39], '1028': [67, 45],
  '1031': [22, 69], '1032': [31, 57], '1033': [20, 47], '1034': [40, 48],
  '1035': [42, 35], '1036': [58, 25],
};

function hash(value: string) {
  return [...value].reduce((total, character) => ((total << 5) - total + character.charCodeAt(0)) | 0, 0) >>> 0;
}

function positieVoor(home: SoldHome, index: number) {
  const seed = hash(`${home.street}-${home.year}-${index}`);
  const [basisX, basisY] = home.place === 'Landsmeer' ? [16, 12] : buurtAnkers[home.postcode] ?? [48, 48];
  const spreidingX = home.place === 'Landsmeer' ? 15 : 7;
  const spreidingY = home.place === 'Landsmeer' ? 9 : 5;
  return { x: basisX + ((seed % 1000) / 1000 - .5) * spreidingX, y: basisY + (((seed >> 10) % 1000) / 1000 - .5) * spreidingY };
}

export default function SoldHomesMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const punten = useMemo(() => soldHomes.map(positieVoor), []);

  useEffect(() => {
    const timer = window.setInterval(() => setActiveIndex((current) => current >= soldHomes.length - 1 ? 0 : current + 1), 155);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="sold-map-section" id="verkocht">
      <div className="sold-map-heading">
        <p className="eyebrow">Lokaal verkocht</p>
        <h2>Een spoor van verkopen in de buurt.</h2>
        <p>Van Amsterdam-Noord tot Landsmeer. De kaart laat zien hoe mijn werkgebied zich door de jaren heen heeft opgebouwd.</p>
      </div>
      <div className="sold-map-panel">
        <div className="sold-map-canvas">
          <svg viewBox="0 0 100 86" role="img" aria-label="Kaart met buurten en verkochte woningen in Amsterdam-Noord en Landsmeer">
            <path className="map-land landsmeer-land" d="M5 2C15 0 28 4 32 14C35 22 30 32 20 36C8 40 2 34 1 24C0 12 2 6 5 2Z" />
            <path className="map-land noord-land" d="M28 25C38 20 56 22 70 35C78 48 75 65 60 75C42 85 22 82 15 68C10 58 12 42 28 25Z" />
            <path className="map-polder" d="M18 12C24 8 32 10 36 16C32 18 26 18 22 16C20 14 19 13 18 12Z" />
            <path className="map-water" d="M0 78C20 72 40 76 60 82C75 86 90 84 100 80V86H0Z" />
            <path className="map-water-line" d="M0 77C20 71 40 75 60 81C75 85 90 83 100 79" />
            <path className="map-boundary" d="M12 70C20 55 35 45 48 35C58 28 68 20 78 12" />
            <path className="map-boundary map-boundary-light" d="M28 50C40 45 50 38 60 30C70 23 78 20 88 18" />
            <path className="map-boundary map-boundary-light" d="M18 20C28 18 38 20 48 25C58 32 68 38 78 45" />
            <text className="map-title-label" x="35" y="50">Amsterdam-Noord</text>
            <text className="map-title-label" x="8" y="20">Landsmeer</text>
            <text className="map-area-caption" x="12" y="28">dorp en polder</text>
            <text className="map-neighbourhood" x="40" y="30">NDSM</text>
            <text className="map-neighbourhood" x="20" y="60">Van der Pekbuurt</text>
            <text className="map-neighbourhood" x="50" y="65">Buikslotermeer</text>
            <text className="map-neighbourhood" x="60" y="55">Banne</text>
            <text className="map-neighbourhood" x="55" y="42">Kadoelen</text>
            <text className="map-neighbourhood" x="72" y="42">Nieuwendam</text>
            <text className="map-neighbourhood" x="30" y="70">Tuindorp Oostzaan</text>
            <text className="map-neighbourhood" x="15" y="38">Luyendijk</text>
            <text className="map-neighbourhood" x="25" y="12">Dorpskern</text>
            <text className="map-water-label" x="50" y="82">Het IJ</text>
            {punten.slice(0, activeIndex + 1).map((punt, index) => {
              const home = soldHomes[index];
              const actief = index === activeIndex;
              return <g key={`${home.street}-${home.year}-${index}`} className={actief ? 'sold-dot active-dot' : 'sold-dot'}>
                {actief && <circle className="dot-pulse" cx={punt.x} cy={punt.y} r="2.8" />}
                <circle cx={punt.x} cy={punt.y} r={actief ? 1.35 : .86}><title>{home.street}, {home.place}</title></circle>
              </g>;
            })}
          </svg>
        </div>
        <p className="sold-map-note">De stippen zijn bewust globaal geplaatst binnen een buurt of postcodegebied. Huisnummers en exacte locaties worden niet getoond.</p>
      </div>
    </section>
  );
}
