'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { soldHomes } from './sold-homes-data';
import 'leaflet/dist/leaflet.css';

const AMSTERDAM_NOORD_CENTER = [52.39, 4.94];
const LANDSMEER_CENTER = [52.47, 4.88];
const MAP_CENTER = [52.42, 4.91];

const POSTCODE_COORDINATES: Record<string, [number, number]> = {
  '1021': [52.378, 4.953], // NDSM-plein/Westen
  '1022': [52.384, 4.937], // Banne/Centraal
  '1023': [52.378, 4.920], // Wester/West-zuid
  '1024': [52.370, 4.905], // Indische buurt/Zuiden
  '1025': [52.385, 4.910], // Buikslotermeer/Centraal-zuid
  '1026': [52.368, 4.950], // Waterland/Oost
  '1027': [52.360, 4.968], // Nieuwendam/Oost-nord
  '1028': [52.375, 4.875], // Ransdorp/Oost-zuid
  '1031': [52.408, 4.872], // Wittenburg/West
  '1032': [52.395, 4.895], // Zeeburgereiland/Centraal
  '1033': [52.410, 4.910], // Van der Pekbuurt/Noord
  '1034': [52.388, 4.928], // Kadoelen/Centraal
  '1035': [52.398, 4.948], // Landsmeerplein/Oost-centraal
  '1036': [52.383, 4.963], // Buikslotermeer/Oost
  '1121': [52.468, 4.883], // Landsmeer
};

export default function SoldHomesMapInteractive() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    if (map.current) {
      map.current.remove();
    }

    map.current = L.map(mapContainer.current).setView([MAP_CENTER[0], MAP_CENTER[1]], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 18,
    }).addTo(map.current);

    const soldHomesAmsterdaamNoord = soldHomes.filter((h) => h.place === 'Amsterdam-Noord');
    const soldHomesLandsmeer = soldHomes.filter((h) => h.place === 'Landsmeer');

    const markerColor = '#c66b4b';
    const redIcon = L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color: ${markerColor}; width: 12px; height: 12px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>`,
      iconSize: [16, 16],
      iconAnchor: [8, 8],
    });

    soldHomesAmsterdaamNoord.forEach((home) => {
      const baseCoords = POSTCODE_COORDINATES[home.postcode] || [52.39, 4.91];
      const lat = baseCoords[0] + (Math.random() - 0.5) * 0.01;
      const lng = baseCoords[1] + (Math.random() - 0.5) * 0.01;
      L.marker([lat, lng], { icon: redIcon })
        .bindPopup(`<strong>${home.street}</strong><br/>Amsterdam-Noord (${home.postcode})<br/>${home.year}`)
        .addTo(map.current!);
    });

    soldHomesLandsmeer.forEach((home) => {
      const baseCoords = POSTCODE_COORDINATES['1121'] || [52.47, 4.88];
      const lat = baseCoords[0] + (Math.random() - 0.5) * 0.005;
      const lng = baseCoords[1] + (Math.random() - 0.5) * 0.005;
      L.marker([lat, lng], { icon: redIcon })
        .bindPopup(`<strong>${home.street}</strong><br/>Landsmeer<br/>${home.year}`)
        .addTo(map.current!);
    });

    const amsterdaamGroup = new L.FeatureGroup();
    L.circle([AMSTERDAM_NOORD_CENTER[0], AMSTERDAM_NOORD_CENTER[1]], {
      color: '#eaf3f8',
      fill: true,
      fillColor: '#eaf3f8',
      fillOpacity: 0.2,
      weight: 2,
      radius: 6000,
    }).addTo(amsterdaamGroup);
    amsterdaamGroup.addTo(map.current);

    const landsmeorGroup = new L.FeatureGroup();
    L.circle([LANDSMEER_CENTER[0], LANDSMEER_CENTER[1]], {
      color: '#eaf3f8',
      fill: true,
      fillColor: '#eaf3f8',
      fillOpacity: 0.2,
      weight: 2,
      radius: 3000,
    }).addTo(landsmeorGroup);
    landsmeorGroup.addTo(map.current);

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, []);

  return (
    <section className="sold-map-section" id="verkocht">
      <div className="sold-map-heading">
        <p className="eyebrow">Lokaal verkocht</p>
        <h2>Een spoor van verkopen in de buurt.</h2>
        <p>Van Amsterdam-Noord tot Landsmeer. Klik op de markers om meer info te zien. Je kan ook zoomen en pannen op de kaart.</p>
      </div>
      <div className="sold-map-panel">
        <div
          ref={mapContainer}
          style={{
            width: '100%',
            height: '500px',
            borderRadius: '4px',
            border: '1px solid #dae8ee',
          }}
        />
        <p className="sold-map-note">De markers zijn bewust globaal geplaatst binnen Amsterdam-Noord en Landsmeer. Huisnummers en exacte locaties worden niet getoond.</p>
      </div>
    </section>
  );
}
