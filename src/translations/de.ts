import type { Translations } from './types';

/** German translations */
export const de: Translations = {
  nav: { services: 'Leistungen', about: 'Über uns', fleet: 'Fuhrpark', coverage: 'Abdeckung', careers: 'Karriere', contact: 'Kontakt', getQuote: 'Mit Uns Versenden' },
  hero: {
    eyebrow: 'Schnell. Sicher. Geliefert.',
    titleLine1: 'Ihre Fracht',
    titleLine2: 'Unsere Mission',
    subtitle: 'Weltweite Frachtlösungen, aufgebaut auf Schnelligkeit und Sicherheit — wir liefern, was zählt, wohin es auch gehen muss.',
    ctaPrimary: 'Mit Uns Versenden', ctaSecondary: 'Leistungen Entdecken', scroll: 'Scrollen',
  },
  stats: { tonnes: 'Tonnen transportiert', onTime: 'Pünktlichkeitsrate', vehicles: 'Fahrzeuge', countries: 'Länder abgedeckt' },
  services: {
    tag: 'Was wir tun', title: 'Logistikleistungen\naus einer Hand',
    desc: 'Von einer einzelnen Palette bis zur vollständigen Lieferkette — SMC Express liefert Präzision auf jeder Etappe.',
    items: [
      { title: 'Gütertransport', desc: 'Voll- und Teilladungslösungen für inländische und grenzüberschreitende Fracht mit Echtzeit-Tracking.' },
      { title: 'Expresslieferung', desc: 'Zeitkritische Sendungen mit Prioritätsrouting und Same-Day oder Next-Day Lieferoptionen.' },
      { title: 'Lagerung', desc: 'Sichere, klimatisierte Lagereinrichtungen mit integriertem Bestandsmanagement.' },
      { title: 'Letzte Meile', desc: 'Städtische und vorstädtische Liefernetzwerke, optimiert für Geschwindigkeit und Präzision.' },
      { title: 'Kühlkette', desc: 'Temperaturüberwachter Transport für verderbliche Waren, Pharmazeutika und sensible Güter.' },
      { title: 'Individuelle Lösungen', desc: 'Maßgeschneiderte Logistikarchitektur rund um Ihr Betriebsmodell — von der Beratung bis zum dedizierten Flottenmanagement.' },
    ],
  },
  about: {
    tag: 'Wer wir sind', title: 'Aufgebaut auf Vertrauen.\nGetrieben von Präzision.',
    body1: 'Gegründet __YEAR__, begann SMC Express als __ORIGIN_STORY__. Jahre kontinuierlicher Verbesserung haben uns zu einem vertrauenswürdigen Logistikpartner gemacht.',
    body2: 'Unsere Philosophie ist einfach: Jede Sendung trägt das Versprechen jemandes an seinen Kunden. Wir nehmen diese Verantwortung ernst.',
    pillars: ['ISO 9001:2015 Zertifiziert', '24/7 Betriebszentrale', 'Dedizierte Account Manager', 'Echtzeit-Frachttracking'],
    badge: 'Jahre Exzellenz',
  },
  fleet: {
    tag: 'Unser Fuhrpark', title: 'Modern. Gewartet.\nEinsatzbereit.',
    footnote: 'Alle Fahrzeuge mit GPS-Tracking, Lastsensoren und Fahrertelemetrie ausgestattet. Durchschnittliches Flottenalter: 3,2 Jahre.',
    items: [
      { type: '__VEHICLE_TYPE_1__', capacity: '__CAPACITY_1__', count: '__COUNT_1__', tag: '__TAG_1__' },
      { type: '__VEHICLE_TYPE_2__', capacity: '__CAPACITY_2__', count: '__COUNT_2__', tag: '__TAG_2__' },
      { type: '__VEHICLE_TYPE_3__', capacity: '__CAPACITY_3__', count: '__COUNT_3__', tag: '__TAG_3__' },
      { type: '__VEHICLE_TYPE_4__', capacity: '__CAPACITY_4__', count: '__COUNT_4__', tag: '__TAG_4__' },
    ],
    capacity: 'Kapazität', fleetSize: 'Fuhrparkgröße',
  },
  coverage: {
    tag: 'Abdeckung', title: '28 Länder.\nEin Netzwerk.',
    body: 'Unser paneuropäisches Netzwerk erstreckt sich von Lissabon bis Bukarest und von Stockholm bis Athen — mit strategischen Hubstandorten in Warschau, Wien, Lyon und München.',
    regions: ['Westeuropa', 'Mittel- & Osteuropa', 'Baltische Staaten', 'Balkanregion', 'Skandinavien'],
    mapLabel: 'Europa-Abdeckungskarte',
  },
  careers: {
    tag: 'Karriere', title: 'Gestalte die Zukunft\nder Logistik',
    subtitle: 'Wir sind ein Team engagierter Fachleute, die gestalten, wie Europa sich bewegt. Wenn Sie für Betrieb, Technologie oder Kundenerfolg begeistert sind — es gibt einen Platz für Sie bei SMC Express.',
    openRoles: 'Offene Stellen', applyNow: 'Jetzt bewerben',
    roles: [
      { title: '__ROLE_1_TITLE__', location: '__ROLE_1_LOCATION__', type: '__ROLE_1_TYPE__' },
      { title: '__ROLE_2_TITLE__', location: '__ROLE_2_LOCATION__', type: '__ROLE_2_TYPE__' },
      { title: '__ROLE_3_TITLE__', location: '__ROLE_3_LOCATION__', type: '__ROLE_3_TYPE__' },
    ],
    perksTitle: 'Warum SMC Express',
    perks: ['Wettbewerbsfähiges Gehalt & Leistungsboni', 'Flexible & remote-freundliche Stellen', 'Paneuropäische Karrieremobilität', 'Moderne Tools & Tech-Stack', 'Krankenversicherung & Wellness-Leistungen', '30 Tage Jahresurlaub'],
    cta: 'Keine passende Stelle gefunden? Senden Sie uns trotzdem Ihren Lebenslauf.',
    ctaBtn: 'Initiativbewerbung',
  },
  testimonials: {
    tag: 'Kundenstimmen', title: 'Vertraut von Branchenführern',
    items: [
      { quote: 'Der Wechsel zu SMC Express senkte unsere Logistikkosten um 22% und eliminierte nahezu Lieferfehler in unserem europäischen Distributionsnetzwerk.', author: '__CLIENT_1_NAME__', role: 'Supply Chain Director, __CLIENT_1_COMPANY__' },
      { quote: 'Ihre Kühlkettenlösung gab uns die Zuversicht, in neue Märkte zu expandieren. Die Transparenz und Zuverlässigkeit sind unübertroffen.', author: '__CLIENT_2_NAME__', role: 'Operations VP, __CLIENT_2_COMPANY__' },
      { quote: 'Vom ersten Anruf bis zum täglichen Betrieb behandelt das SMC Express-Team unsere Fracht wie ihre eigene.', author: '__CLIENT_3_NAME__', role: 'CEO, __CLIENT_3_COMPANY__' },
    ],
  },
  contact: {
    tag: 'Kontakt', title: 'Gemeinsam\nEtwas Bewegen',
    body: 'Teilen Sie uns Ihre Sendungsdetails mit und wir haben innerhalb von 4 Werktunden ein maßgeschneidertes Angebot in Ihrem Posteingang.',
    phone: '__PHONE__', email: '__EMAIL__', address: '__ADDRESS__',
    form: {
      name: 'Vollständiger Name', company: 'Unternehmen', emailLabel: 'E-Mail', origin: 'Herkunft', destination: 'Zielort', cargo: 'Frachtdetails',
      namePh: 'Ihr Name', companyPh: 'Ihr Unternehmen', emailPh: 'sie@unternehmen.de', originPh: 'Stadt / Land', destPh: 'Stadt / Land', cargoPh: 'Gewicht, Abmessungen, besondere Anforderungen...', submit: 'Anfrage senden',
    },
  },
  footer: {
    tagline: 'Präzisionslogistik für eine bewegte Welt.',
    company: 'Unternehmen', companyLinks: ['Über uns', 'Karriere', 'Presse', 'Zertifizierungen'],
    services: 'Leistungen', serviceLinks: ['Fracht', 'Express', 'Lagerung', 'Kühlkette'],
    support: 'Support', supportLinks: ['Sendung verfolgen', 'FAQ', 'Rechtliches', 'Datenschutz'],
    legal: '© 2026 SMC Express __LEGAL_NAME__ — Alle Rechte vorbehalten.',
    vat: 'Eingetragen in Rumänien · USt-ID __VAT_NUMBER__',
  },
};
