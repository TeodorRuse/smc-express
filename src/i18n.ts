export type Lang = 'en' | 'ro' | 'de' | 'fr' | 'es';

export const LANGUAGES: { code: Lang; label: string; flag: string }[] = [
  { code: 'en', label: 'English',  flag: '🇬🇧' },
  { code: 'ro', label: 'Română',   flag: '🇷🇴' },
  { code: 'de', label: 'Deutsch',  flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'es', label: 'Español',  flag: '🇪🇸' },
];

export interface Translations {
  nav: {
    services: string;
    about: string;
    fleet: string;
    coverage: string;
    careers: string;
    contact: string;
    getQuote: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  stats: {
    tonnes: string;
    onTime: string;
    vehicles: string;
    countries: string;
  };
  services: {
    tag: string;
    title: string;
    desc: string;
    items: { title: string; desc: string }[];
  };
  about: {
    tag: string;
    title: string;
    body1: string;
    body2: string;
    pillars: string[];
    badge: string;
  };
  fleet: {
    tag: string;
    title: string;
    footnote: string;
    items: { type: string; capacity: string; count: string; tag: string }[];
    capacity: string;
    fleetSize: string;
  };
  coverage: {
    tag: string;
    title: string;
    body: string;
    regions: string[];
    mapLabel: string;
  };
  careers: {
    tag: string;
    title: string;
    subtitle: string;
    openRoles: string;
    applyNow: string;
    roles: { title: string; location: string; type: string }[];
    perksTitle: string;
    perks: string[];
    cta: string;
    ctaBtn: string;
  };
  testimonials: {
    tag: string;
    title: string;
    items: { quote: string; author: string; role: string }[];
  };
  contact: {
    tag: string;
    title: string;
    body: string;
    phone: string;
    email: string;
    address: string;
    form: {
      name: string;
      company: string;
      emailLabel: string;
      origin: string;
      destination: string;
      cargo: string;
      namePh: string;
      companyPh: string;
      emailPh: string;
      originPh: string;
      destPh: string;
      cargoPh: string;
      submit: string;
    };
  };
  footer: {
    tagline: string;
    company: string;
    companyLinks: string[];
    services: string;
    serviceLinks: string[];
    support: string;
    supportLinks: string[];
    legal: string;
    vat: string;
  };
}

const en: Translations = {
  nav: {
    services: 'Services', about: 'About', fleet: 'Fleet',
    coverage: 'Coverage', careers: 'Careers', contact: 'Contact', getQuote: 'Get a Quote',
  },
  hero: {
    eyebrow: 'Pan-European Logistics',
    titleLine1: 'Moving What',
    titleLine2: 'Matters Most',
    subtitle: 'Reliable freight, express delivery, and end-to-end logistics solutions engineered for businesses that can\'t afford delays.',
    ctaPrimary: 'Request a Quote',
    ctaSecondary: 'Our Services',
    scroll: 'Scroll',
  },
  stats: { tonnes: 'Tonnes Shipped', onTime: 'On-Time Rate', vehicles: 'Fleet Vehicles', countries: 'Countries Covered' },
  services: {
    tag: 'What We Do',
    title: 'Full-Spectrum\nLogistics Services',
    desc: 'From a single pallet to a full supply chain overhaul — Vectran delivers precision at every stage of the journey.',
    items: [
      { title: 'Freight Transport', desc: 'Full and partial truckload solutions for domestic and cross-border cargo, with real-time tracking and guaranteed delivery windows.' },
      { title: 'Express Delivery', desc: 'Time-critical shipments handled with priority routing, dedicated drivers, and same-day or next-day delivery options.' },
      { title: 'Warehousing', desc: 'Secure, climate-controlled storage facilities with integrated inventory management and automated dispatch.' },
      { title: 'Last-Mile Logistics', desc: 'Urban and suburban delivery networks optimized for speed and precision, with live proof-of-delivery confirmation.' },
      { title: 'Cold Chain', desc: 'Temperature-monitored transport for perishables, pharmaceuticals, and sensitive goods, compliant with all regulations.' },
      { title: 'Custom Solutions', desc: 'Bespoke logistics architecture built around your operational model — from supply chain consulting to dedicated fleet management.' },
    ],
  },
  about: {
    tag: 'Who We Are',
    title: 'Built on Trust.\nDriven by Precision.',
    body1: 'Founded in 2001, Vectran began as a regional carrier serving Central Europe. Two decades of relentless operational improvement have grown us into a trusted logistics partner for Fortune 500 companies and ambitious SMEs alike.',
    body2: 'Our philosophy is simple: every shipment carries someone\'s promise to their customer. We take that responsibility seriously — investing in modern fleet technology, expert drivers, and robust route infrastructure so your cargo arrives exactly when and where it\'s needed.',
    pillars: ['ISO 9001:2015 Certified', '24/7 Operations Centre', 'Dedicated Account Managers', 'Real-Time Cargo Tracking'],
    badge: 'Years of Excellence',
  },
  fleet: {
    tag: 'Our Fleet', title: 'Modern. Maintained.\nMission-Ready.',
    footnote: 'All vehicles equipped with GPS tracking, load sensors, and driver telemetry systems. Average fleet age: 3.2 years.',
    items: [
      { type: 'Heavy Haulers', capacity: 'Up to 40T', count: '120 units', tag: 'Long-Haul' },
      { type: 'Refrigerated', capacity: 'Up to 20T', count: '68 units', tag: 'Cold Chain' },
      { type: 'Sprinter Vans', capacity: 'Up to 1.5T', count: '95 units', tag: 'Last-Mile' },
      { type: 'Flatbed', capacity: 'Up to 35T', count: '57 units', tag: 'Oversized' },
    ],
    capacity: 'Capacity', fleetSize: 'Fleet Size',
  },
  coverage: {
    tag: 'Coverage', title: '28 Countries.\nOne Network.',
    body: 'Our pan-European network spans from Lisbon to Bucharest, and from Stockholm to Athens — with strategic hub locations in Warsaw, Vienna, Lyon, and Munich ensuring 48-hour reach to any destination on the continent.',
    regions: ['Western Europe', 'Central & Eastern Europe', 'Baltic States', 'Balkan Region', 'Scandinavia'],
    mapLabel: 'Europe Coverage Map',
  },
  careers: {
    tag: 'Join Us', title: 'Build the Future\nof Logistics',
    subtitle: 'We\'re a team of driven professionals shaping how Europe moves. If you\'re passionate about operations, technology, or client success — there\'s a place for you at Vectran.',
    openRoles: 'Open Roles',
    applyNow: 'Apply Now',
    roles: [
      { title: 'Senior Fleet Manager', location: 'Bucharest, RO', type: 'Full-Time' },
      { title: 'Logistics Coordinator', location: 'Warsaw, PL', type: 'Full-Time' },
      { title: 'Route Optimization Engineer', location: 'Remote (EU)', type: 'Full-Time' },
      { title: 'Key Account Manager', location: 'Vienna, AT', type: 'Full-Time' },
      { title: 'Warehouse Supervisor', location: 'Lyon, FR', type: 'Full-Time' },
      { title: 'Data Analyst – Supply Chain', location: 'Remote (EU)', type: 'Full-Time' },
    ],
    perksTitle: 'Why Vectran',
    perks: ['Competitive salary & performance bonuses', 'Flexible & remote-friendly roles', 'Pan-European career mobility', 'Modern tools & tech stack', 'Health coverage & wellness benefits', '30 days annual leave'],
    cta: 'Don\'t see the right role? Send us your CV anyway.',
    ctaBtn: 'Open Application',
  },
  testimonials: {
    tag: 'Client Stories', title: 'Trusted by Industry Leaders',
    items: [
      { quote: 'Switching to Vectran cut our logistics costs by 22% and virtually eliminated delivery failures across our European distribution network.', author: 'Mirela Ionescu', role: 'Supply Chain Director, Nordex Group' },
      { quote: 'Their cold chain solution gave us the confidence to expand into new markets. The visibility and reliability are unmatched in this industry.', author: 'Stefan Andrei', role: 'Operations VP, PharmaSouth' },
      { quote: 'From the first call to daily operations, the Vectran team treats our cargo like their own. That kind of partnership is rare.', author: 'Clara Dănilă', role: 'CEO, FreshRoute' },
    ],
  },
  contact: {
    tag: 'Get In Touch', title: 'Let\'s Move\nSomething Together',
    body: 'Tell us about your shipment and we\'ll have a tailored proposal in your inbox within 4 business hours.',
    phone: '+40 (0) 000 000 000', email: 'hello@vectran.com', address: 'Calea Victoriei 80, Bucharest, Romania',
    form: {
      name: 'Full Name', company: 'Company', emailLabel: 'Email', origin: 'Origin', destination: 'Destination', cargo: 'Cargo Details',
      namePh: 'Your name', companyPh: 'Your company', emailPh: 'you@company.com', originPh: 'City / Country', destPh: 'City / Country', cargoPh: 'Weight, dimensions, special requirements...', submit: 'Send Request',
    },
  },
  footer: {
    tagline: 'Precision logistics for a moving world.',
    company: 'Company', companyLinks: ['About Us', 'Careers', 'Press', 'Certifications'],
    services: 'Services', serviceLinks: ['Freight', 'Express', 'Warehousing', 'Cold Chain'],
    support: 'Support', supportLinks: ['Track Shipment', 'FAQ', 'Legal', 'Privacy'],
    legal: '© 2025 Vectran Logistics S.A. — All rights reserved.',
    vat: 'Registered in Romania · VAT RO00000001',
  },
};

const ro: Translations = {
  nav: {
    services: 'Servicii', about: 'Despre', fleet: 'Flotă',
    coverage: 'Acoperire', careers: 'Cariere', contact: 'Contact', getQuote: 'Solicită Ofertă',
  },
  hero: {
    eyebrow: 'Logistică Pan-Europeană',
    titleLine1: 'Transportăm Ce',
    titleLine2: 'Contează Cel Mai Mult',
    subtitle: 'Soluții fiabile de marfă, livrare expresă și logistică end-to-end, concepute pentru afaceri care nu pot tolera întârzieri.',
    ctaPrimary: 'Solicită o Ofertă',
    ctaSecondary: 'Serviciile Noastre',
    scroll: 'Derulează',
  },
  stats: { tonnes: 'Tone Transportate', onTime: 'Livrări la Timp', vehicles: 'Vehicule în Flotă', countries: 'Țări Acoperite' },
  services: {
    tag: 'Ce Facem',
    title: 'Servicii Logistice\nComplete',
    desc: 'De la un singur palet la un lanț de aprovizionare complet — Vectran oferă precizie la fiecare etapă a călătoriei.',
    items: [
      { title: 'Transport Marfă', desc: 'Soluții de transport complet și parțial pentru mărfuri interne și transfrontaliere, cu urmărire în timp real și termene garantate.' },
      { title: 'Livrare Expresă', desc: 'Expedieri urgente gestionate cu rutare prioritară, șoferi dedicați și opțiuni de livrare în aceeași zi sau a doua zi.' },
      { title: 'Depozitare', desc: 'Facilități de depozitare securizate, controlate climatic, cu management integrat al stocurilor și expediere automatizată.' },
      { title: 'Ultimul Kilometru', desc: 'Rețele de livrare urbane și suburbane optimizate pentru viteză și precizie, cu confirmare live a livrării.' },
      { title: 'Lanț de Frig', desc: 'Transport cu monitorizare a temperaturii pentru produse perisabile, farmaceutice și bunuri sensibile, conform tuturor reglementărilor.' },
      { title: 'Soluții Personalizate', desc: 'Arhitectură logistică bespoke construită în jurul modelului tău operațional — de la consultanță la management dedicat de flotă.' },
    ],
  },
  about: {
    tag: 'Cine Suntem',
    title: 'Construiți pe Încredere.\nConduși de Precizie.',
    body1: 'Fondată în 2001, Vectran a început ca un transportator regional care deservea Europa Centrală. Două decenii de îmbunătățire operațională ne-au transformat într-un partener logistic de încredere pentru companii Fortune 500 și IMM-uri ambițioase.',
    body2: 'Filosofia noastră este simplă: fiecare expediere poartă promisiunea cuiva față de clientul său. Luăm această responsabilitate în serios — investind în tehnologie modernă, șoferi experți și infrastructură robustă de rute.',
    pillars: ['Certificat ISO 9001:2015', 'Centru Operațional 24/7', 'Manageri de Cont Dedicați', 'Urmărire Marfă în Timp Real'],
    badge: 'Ani de Excelență',
  },
  fleet: {
    tag: 'Flota Noastră', title: 'Modernă. Întreținută.\nGata de Misiune.',
    footnote: 'Toate vehiculele sunt echipate cu GPS, senzori de sarcină și sisteme de telemetrie. Vârsta medie a flotei: 3,2 ani.',
    items: [
      { type: 'Camioane Grele', capacity: 'Până la 40T', count: '120 unități', tag: 'Curse Lungi' },
      { type: 'Frigorifice', capacity: 'Până la 20T', count: '68 unități', tag: 'Lanț de Frig' },
      { type: 'Dube', capacity: 'Până la 1,5T', count: '95 unități', tag: 'Ultimul Km' },
      { type: 'Platfomă', capacity: 'Până la 35T', count: '57 unități', tag: 'Supradimensionat' },
    ],
    capacity: 'Capacitate', fleetSize: 'Flotă',
  },
  coverage: {
    tag: 'Acoperire', title: '28 de Țări.\nO Rețea.',
    body: 'Rețeaua noastră pan-europeană se întinde de la Lisabona la București și de la Stockholm la Atena — cu huburi strategice în Varșovia, Viena, Lyon și Munchen, asigurând acoperire în 48 de ore pe tot continentul.',
    regions: ['Europa de Vest', 'Europa Centrală și de Est', 'Statele Baltice', 'Regiunea Balcanică', 'Scandinavia'],
    mapLabel: 'Harta Acoperirii Europene',
  },
  careers: {
    tag: 'Alătură-te', title: 'Construiește Viitorul\nLogisticii',
    subtitle: 'Suntem o echipă de profesioniști pasionați care modelează modul în care se mișcă Europa. Dacă ești pasionat de operațiuni, tehnologie sau succesul clienților — există un loc pentru tine la Vectran.',
    openRoles: 'Posturi Disponibile',
    applyNow: 'Aplică Acum',
    roles: [
      { title: 'Manager Senior Flotă', location: 'București, RO', type: 'Full-Time' },
      { title: 'Coordonator Logistică', location: 'Varșovia, PL', type: 'Full-Time' },
      { title: 'Inginer Optimizare Rute', location: 'Remote (UE)', type: 'Full-Time' },
      { title: 'Manager Cont Cheie', location: 'Viena, AT', type: 'Full-Time' },
      { title: 'Supervisor Depozit', location: 'Lyon, FR', type: 'Full-Time' },
      { title: 'Analist Date – Lanț Aprovizionare', location: 'Remote (UE)', type: 'Full-Time' },
    ],
    perksTitle: 'De Ce Vectran',
    perks: ['Salariu competitiv și bonusuri de performanță', 'Roluri flexibile și remote-friendly', 'Mobilitate de carieră pan-europeană', 'Instrumente și stack tehnologic modern', 'Asigurare de sănătate și beneficii wellness', '30 de zile concediu anual'],
    cta: 'Nu găsești rolul potrivit? Trimite-ne oricum CV-ul.',
    ctaBtn: 'Candidatură Deschisă',
  },
  testimonials: {
    tag: 'Povești de Clienți', title: 'De Încredere pentru Liderii Industriei',
    items: [
      { quote: 'Trecerea la Vectran ne-a redus costurile logistice cu 22% și a eliminat practic eșecurile de livrare în rețeaua noastră europeană.', author: 'Mirela Ionescu', role: 'Director Lanț Aprovizionare, Nordex Group' },
      { quote: 'Soluția lor de lanț de frig ne-a dat încrederea să ne extindem pe piețe noi. Vizibilitatea și fiabilitatea sunt incomparabile în industrie.', author: 'Stefan Andrei', role: 'VP Operațiuni, PharmaSouth' },
      { quote: 'De la primul apel până la operațiunile zilnice, echipa Vectran tratează marfa noastră ca pe a lor. Acest tip de parteneriat este rar.', author: 'Clara Dănilă', role: 'CEO, FreshRoute' },
    ],
  },
  contact: {
    tag: 'Contactează-ne', title: 'Să Transportăm\nÎmpreună',
    body: 'Spune-ne despre expedierea ta și vom avea o propunere personalizată în căsuța ta în 4 ore lucrătoare.',
    phone: '+40 (0) 000 000 000', email: 'hello@vectran.com', address: 'Calea Victoriei 80, București, România',
    form: {
      name: 'Nume Complet', company: 'Companie', emailLabel: 'Email', origin: 'Origine', destination: 'Destinație', cargo: 'Detalii Marfă',
      namePh: 'Numele tău', companyPh: 'Compania ta', emailPh: 'tu@companie.com', originPh: 'Oraș / Țară', destPh: 'Oraș / Țară', cargoPh: 'Greutate, dimensiuni, cerințe speciale...', submit: 'Trimite Cererea',
    },
  },
  footer: {
    tagline: 'Logistică de precizie pentru o lume în mișcare.',
    company: 'Companie', companyLinks: ['Despre Noi', 'Cariere', 'Presă', 'Certificări'],
    services: 'Servicii', serviceLinks: ['Marfă', 'Expresă', 'Depozitare', 'Lanț de Frig'],
    support: 'Suport', supportLinks: ['Urmărire Expediere', 'FAQ', 'Legal', 'Confidențialitate'],
    legal: '© 2025 Vectran Logistics S.A. — Toate drepturile rezervate.',
    vat: 'Înregistrat în România · TVA RO00000001',
  },
};

const de: Translations = {
  nav: { services: 'Leistungen', about: 'Über uns', fleet: 'Fuhrpark', coverage: 'Abdeckung', careers: 'Karriere', contact: 'Kontakt', getQuote: 'Angebot anfordern' },
  hero: {
    eyebrow: 'Paneuropäische Logistik',
    titleLine1: 'Wir Bewegen',
    titleLine2: 'Was Zählt',
    subtitle: 'Zuverlässige Fracht, Expresslieferung und End-to-End-Logistiklösungen für Unternehmen, die sich keine Verzögerungen leisten können.',
    ctaPrimary: 'Angebot anfordern', ctaSecondary: 'Unsere Leistungen', scroll: 'Scrollen',
  },
  stats: { tonnes: 'Tonnen transportiert', onTime: 'Pünktlichkeitsrate', vehicles: 'Fahrzeuge', countries: 'Länder abgedeckt' },
  services: {
    tag: 'Was wir tun', title: 'Logistikleistungen\naus einer Hand',
    desc: 'Von einer einzelnen Palette bis zur vollständigen Lieferkette — Vectran liefert Präzision auf jeder Etappe.',
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
    body1: 'Gegründet 2001, begann Vectran als regionaler Carrier in Mitteleuropa. Zwei Jahrzehnte kontinuierlicher Verbesserung haben uns zu einem vertrauenswürdigen Logistikpartner gemacht.',
    body2: 'Unsere Philosophie ist einfach: Jede Sendung trägt das Versprechen jemandes an seinen Kunden. Wir nehmen diese Verantwortung ernst.',
    pillars: ['ISO 9001:2015 Zertifiziert', '24/7 Betriebszentrale', 'Dedizierte Account Manager', 'Echtzeit-Frachttracking'],
    badge: 'Jahre Exzellenz',
  },
  fleet: {
    tag: 'Unser Fuhrpark', title: 'Modern. Gewartet.\nEinsatzbereit.',
    footnote: 'Alle Fahrzeuge mit GPS-Tracking, Lastsensoren und Fahrertelemetrie ausgestattet. Durchschnittliches Flottenalter: 3,2 Jahre.',
    items: [
      { type: 'Schwerlast', capacity: 'Bis zu 40T', count: '120 Einheiten', tag: 'Fernverkehr' },
      { type: 'Kühlfahrzeuge', capacity: 'Bis zu 20T', count: '68 Einheiten', tag: 'Kühlkette' },
      { type: 'Transporter', capacity: 'Bis zu 1,5T', count: '95 Einheiten', tag: 'Letzte Meile' },
      { type: 'Tieflader', capacity: 'Bis zu 35T', count: '57 Einheiten', tag: 'Übermaß' },
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
    subtitle: 'Wir sind ein Team engagierter Fachleute, die gestalten, wie Europa sich bewegt. Wenn Sie für Betrieb, Technologie oder Kundenerfolg begeistert sind — es gibt einen Platz für Sie bei Vectran.',
    openRoles: 'Offene Stellen', applyNow: 'Jetzt bewerben',
    roles: [
      { title: 'Senior Flottenmanager', location: 'Bukarest, RO', type: 'Vollzeit' },
      { title: 'Logistikkoordinator', location: 'Warschau, PL', type: 'Vollzeit' },
      { title: 'Routenoptimierungsingenieur', location: 'Remote (EU)', type: 'Vollzeit' },
      { title: 'Key Account Manager', location: 'Wien, AT', type: 'Vollzeit' },
      { title: 'Lagerleiter', location: 'Lyon, FR', type: 'Vollzeit' },
      { title: 'Datenanalyst – Lieferkette', location: 'Remote (EU)', type: 'Vollzeit' },
    ],
    perksTitle: 'Warum Vectran',
    perks: ['Wettbewerbsfähiges Gehalt & Leistungsboni', 'Flexible & remote-freundliche Stellen', 'Paneuropäische Karrieremobilität', 'Moderne Tools & Tech-Stack', 'Krankenversicherung & Wellness-Leistungen', '30 Tage Jahresurlaub'],
    cta: 'Keine passende Stelle gefunden? Senden Sie uns trotzdem Ihren Lebenslauf.',
    ctaBtn: 'Initiativbewerbung',
  },
  testimonials: {
    tag: 'Kundenstimmen', title: 'Vertraut von Branchenführern',
    items: [
      { quote: 'Der Wechsel zu Vectran senkte unsere Logistikkosten um 22% und eliminierte nahezu Lieferfehler in unserem europäischen Distributionsnetzwerk.', author: 'Mirela Ionescu', role: 'Supply Chain Director, Nordex Group' },
      { quote: 'Ihre Kühlkettenlösung gab uns die Zuversicht, in neue Märkte zu expandieren. Die Transparenz und Zuverlässigkeit sind unübertroffen.', author: 'Stefan Andrei', role: 'Operations VP, PharmaSouth' },
      { quote: 'Vom ersten Anruf bis zum täglichen Betrieb behandelt das Vectran-Team unsere Fracht wie ihre eigene.', author: 'Clara Dănilă', role: 'CEO, FreshRoute' },
    ],
  },
  contact: {
    tag: 'Kontakt', title: 'Gemeinsam\nEtwas Bewegen',
    body: 'Teilen Sie uns Ihre Sendungsdetails mit und wir haben innerhalb von 4 Werktunden ein maßgeschneidertes Angebot in Ihrem Posteingang.',
    phone: '+40 (0) 000 000 000', email: 'hello@vectran.com', address: 'Calea Victoriei 80, Bukarest, Rumänien',
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
    legal: '© 2025 Vectran Logistics S.A. — Alle Rechte vorbehalten.',
    vat: 'Eingetragen in Rumänien · USt-ID RO00000001',
  },
};

const fr: Translations = {
  nav: { services: 'Services', about: 'À propos', fleet: 'Flotte', coverage: 'Couverture', careers: 'Carrières', contact: 'Contact', getQuote: 'Demander un Devis' },
  hero: {
    eyebrow: 'Logistique Pan-Européenne',
    titleLine1: 'Transportons Ce',
    titleLine2: 'Qui Compte le Plus',
    subtitle: 'Solutions fiables de fret, livraison express et logistique de bout en bout conçues pour les entreprises qui ne peuvent pas se permettre des retards.',
    ctaPrimary: 'Demander un Devis', ctaSecondary: 'Nos Services', scroll: 'Défiler',
  },
  stats: { tonnes: 'Tonnes Transportées', onTime: 'Taux de Ponctualité', vehicles: 'Véhicules', countries: 'Pays Couverts' },
  services: {
    tag: 'Ce Que Nous Faisons', title: 'Services Logistiques\nComplets',
    desc: 'D\'une seule palette à une refonte complète de la chaîne d\'approvisionnement — Vectran livre la précision à chaque étape.',
    items: [
      { title: 'Transport de Fret', desc: 'Solutions de chargement complet et partiel pour les marchandises nationales et transfrontalières avec suivi en temps réel.' },
      { title: 'Livraison Express', desc: 'Expéditions urgentes gérées avec routage prioritaire et options de livraison le jour même ou le lendemain.' },
      { title: 'Entreposage', desc: 'Installations de stockage sécurisées et climatisées avec gestion intégrée des stocks.' },
      { title: 'Dernier Kilomètre', desc: 'Réseaux de livraison urbains et suburbains optimisés pour la vitesse et la précision.' },
      { title: 'Chaîne du Froid', desc: 'Transport avec surveillance de la température pour les denrées périssables et les produits pharmaceutiques.' },
      { title: 'Solutions Sur Mesure', desc: 'Architecture logistique bespoke construite autour de votre modèle opérationnel.' },
    ],
  },
  about: {
    tag: 'Qui Nous Sommes', title: 'Fondés sur la Confiance.\nPortés par la Précision.',
    body1: 'Fondée en 2001, Vectran a commencé comme un transporteur régional desservant l\'Europe centrale. Deux décennies d\'amélioration opérationnelle nous ont transformés en un partenaire logistique de confiance.',
    body2: 'Notre philosophie est simple : chaque expédition porte la promesse de quelqu\'un envers son client. Nous prenons cette responsabilité au sérieux.',
    pillars: ['Certifié ISO 9001:2015', 'Centre Opérationnel 24h/7j', 'Responsables de Compte Dédiés', 'Suivi de Fret en Temps Réel'],
    badge: 'Années d\'Excellence',
  },
  fleet: {
    tag: 'Notre Flotte', title: 'Moderne. Entretenue.\nPrête à la Mission.',
    footnote: 'Tous les véhicules équipés de GPS, capteurs de charge et systèmes de télémétrie. Âge moyen de la flotte: 3,2 ans.',
    items: [
      { type: 'Poids Lourds', capacity: 'Jusqu\'à 40T', count: '120 unités', tag: 'Longue Distance' },
      { type: 'Frigorifiques', capacity: 'Jusqu\'à 20T', count: '68 unités', tag: 'Chaîne du Froid' },
      { type: 'Fourgons', capacity: 'Jusqu\'à 1,5T', count: '95 unités', tag: 'Dernier Km' },
      { type: 'Plateau', capacity: 'Jusqu\'à 35T', count: '57 unités', tag: 'Surdimensionné' },
    ],
    capacity: 'Capacité', fleetSize: 'Taille de Flotte',
  },
  coverage: {
    tag: 'Couverture', title: '28 Pays.\nUn Réseau.',
    body: 'Notre réseau paneuropéen s\'étend de Lisbonne à Bucarest et de Stockholm à Athènes — avec des hubs stratégiques à Varsovie, Vienne, Lyon et Munich.',
    regions: ['Europe de l\'Ouest', 'Europe Centrale & de l\'Est', 'États Baltes', 'Région Balkanique', 'Scandinavie'],
    mapLabel: 'Carte de Couverture Européenne',
  },
  careers: {
    tag: 'Rejoignez-nous', title: 'Construisez l\'Avenir\nde la Logistique',
    subtitle: 'Nous sommes une équipe de professionnels passionnés qui façonnent la façon dont l\'Europe bouge. Si vous êtes passionné par les opérations, la technologie ou le succès client — il y a une place pour vous chez Vectran.',
    openRoles: 'Postes Ouverts', applyNow: 'Postuler Maintenant',
    roles: [
      { title: 'Responsable Flotte Senior', location: 'Bucarest, RO', type: 'Temps Plein' },
      { title: 'Coordinateur Logistique', location: 'Varsovie, PL', type: 'Temps Plein' },
      { title: 'Ingénieur Optimisation Routes', location: 'Remote (UE)', type: 'Temps Plein' },
      { title: 'Responsable Grands Comptes', location: 'Vienne, AT', type: 'Temps Plein' },
      { title: 'Superviseur Entrepôt', location: 'Lyon, FR', type: 'Temps Plein' },
      { title: 'Analyste Données – Chaîne Logistique', location: 'Remote (UE)', type: 'Temps Plein' },
    ],
    perksTitle: 'Pourquoi Vectran',
    perks: ['Salaire compétitif et primes de performance', 'Postes flexibles et remote-friendly', 'Mobilité de carrière paneuropéenne', 'Outils modernes et stack technologique', 'Couverture santé et avantages bien-être', '30 jours de congés annuels'],
    cta: 'Vous ne trouvez pas le bon poste ? Envoyez-nous votre CV quand même.',
    ctaBtn: 'Candidature Spontanée',
  },
  testimonials: {
    tag: 'Témoignages Clients', title: 'Approuvé par les Leaders du Secteur',
    items: [
      { quote: 'Passer à Vectran a réduit nos coûts logistiques de 22% et pratiquement éliminé les échecs de livraison dans notre réseau de distribution européen.', author: 'Mirela Ionescu', role: 'Directrice Chaîne d\'Approvisionnement, Nordex Group' },
      { quote: 'Leur solution de chaîne du froid nous a donné la confiance d\'expansion vers de nouveaux marchés. La visibilité et la fiabilité sont incomparables.', author: 'Stefan Andrei', role: 'VP Opérations, PharmaSouth' },
      { quote: 'Du premier appel aux opérations quotidiennes, l\'équipe Vectran traite notre fret comme le leur. Ce type de partenariat est rare.', author: 'Clara Dănilă', role: 'PDG, FreshRoute' },
    ],
  },
  contact: {
    tag: 'Nous Contacter', title: 'Bougeons\nEnsemble',
    body: 'Parlez-nous de votre expédition et nous aurons une proposition sur mesure dans votre boîte de réception dans les 4 heures ouvrables.',
    phone: '+40 (0) 000 000 000', email: 'hello@vectran.com', address: 'Calea Victoriei 80, Bucarest, Roumanie',
    form: {
      name: 'Nom Complet', company: 'Entreprise', emailLabel: 'E-mail', origin: 'Origine', destination: 'Destination', cargo: 'Détails de la Marchandise',
      namePh: 'Votre nom', companyPh: 'Votre entreprise', emailPh: 'vous@entreprise.fr', originPh: 'Ville / Pays', destPh: 'Ville / Pays', cargoPh: 'Poids, dimensions, exigences spéciales...', submit: 'Envoyer la Demande',
    },
  },
  footer: {
    tagline: 'Logistique de précision pour un monde en mouvement.',
    company: 'Entreprise', companyLinks: ['À propos', 'Carrières', 'Presse', 'Certifications'],
    services: 'Services', serviceLinks: ['Fret', 'Express', 'Entreposage', 'Chaîne du Froid'],
    support: 'Support', supportLinks: ['Suivre Expédition', 'FAQ', 'Mentions Légales', 'Confidentialité'],
    legal: '© 2025 Vectran Logistics S.A. — Tous droits réservés.',
    vat: 'Enregistré en Roumanie · TVA RO00000001',
  },
};

const es: Translations = {
  nav: { services: 'Servicios', about: 'Nosotros', fleet: 'Flota', coverage: 'Cobertura', careers: 'Empleo', contact: 'Contacto', getQuote: 'Pedir Presupuesto' },
  hero: {
    eyebrow: 'Logística Paneuropea',
    titleLine1: 'Transportamos Lo',
    titleLine2: 'Que Más Importa',
    subtitle: 'Soluciones fiables de carga, entrega express y logística de extremo a extremo diseñadas para empresas que no pueden permitirse demoras.',
    ctaPrimary: 'Pedir Presupuesto', ctaSecondary: 'Nuestros Servicios', scroll: 'Desplazar',
  },
  stats: { tonnes: 'Toneladas Transportadas', onTime: 'Tasa de Puntualidad', vehicles: 'Vehículos', countries: 'Países Cubiertos' },
  services: {
    tag: 'Lo Que Hacemos', title: 'Servicios Logísticos\nCompletos',
    desc: 'Desde un solo palet hasta una cadena de suministro completa — Vectran entrega precisión en cada etapa.',
    items: [
      { title: 'Transporte de Carga', desc: 'Soluciones de carga completa y parcial para mercancías nacionales y transfronterizas con seguimiento en tiempo real.' },
      { title: 'Entrega Express', desc: 'Envíos urgentes gestionados con enrutamiento prioritario y opciones de entrega en el mismo día o al día siguiente.' },
      { title: 'Almacenamiento', desc: 'Instalaciones de almacenamiento seguras y climatizadas con gestión integrada de inventario.' },
      { title: 'Última Milla', desc: 'Redes de entrega urbanas y suburbanas optimizadas para velocidad y precisión.' },
      { title: 'Cadena de Frío', desc: 'Transporte con monitoreo de temperatura para productos perecederos y farmacéuticos.' },
      { title: 'Soluciones Personalizadas', desc: 'Arquitectura logística a medida construida alrededor de su modelo operativo.' },
    ],
  },
  about: {
    tag: 'Quiénes Somos', title: 'Construidos sobre Confianza.\nImpulsados por Precisión.',
    body1: 'Fundada en 2001, Vectran comenzó como transportista regional en Europa Central. Dos décadas de mejora operativa nos han convertido en socio logístico de confianza.',
    body2: 'Nuestra filosofía es simple: cada envío lleva la promesa de alguien a su cliente. Tomamos esa responsabilidad en serio.',
    pillars: ['Certificado ISO 9001:2015', 'Centro Operativo 24/7', 'Gestores de Cuenta Dedicados', 'Seguimiento de Carga en Tiempo Real'],
    badge: 'Años de Excelencia',
  },
  fleet: {
    tag: 'Nuestra Flota', title: 'Moderna. Mantenida.\nLista para la Misión.',
    footnote: 'Todos los vehículos equipados con GPS, sensores de carga y sistemas de telemetría. Antigüedad media de la flota: 3,2 años.',
    items: [
      { type: 'Camiones Pesados', capacity: 'Hasta 40T', count: '120 unidades', tag: 'Larga Distancia' },
      { type: 'Frigoríficos', capacity: 'Hasta 20T', count: '68 unidades', tag: 'Cadena de Frío' },
      { type: 'Furgonetas', capacity: 'Hasta 1,5T', count: '95 unidades', tag: 'Última Milla' },
      { type: 'Plataformas', capacity: 'Hasta 35T', count: '57 unidades', tag: 'Sobredimensionado' },
    ],
    capacity: 'Capacidad', fleetSize: 'Tamaño de Flota',
  },
  coverage: {
    tag: 'Cobertura', title: '28 Países.\nUna Red.',
    body: 'Nuestra red paneuropea se extiende de Lisboa a Bucarest y de Estocolmo a Atenas — con ubicaciones de centros estratégicos en Varsovia, Viena, Lyon y Múnich.',
    regions: ['Europa Occidental', 'Europa Central & Oriental', 'Estados Bálticos', 'Región Balcánica', 'Escandinavia'],
    mapLabel: 'Mapa de Cobertura Europea',
  },
  careers: {
    tag: 'Únete', title: 'Construye el Futuro\nde la Logística',
    subtitle: 'Somos un equipo de profesionales apasionados que están dando forma a cómo se mueve Europa. Si te apasionan las operaciones, la tecnología o el éxito del cliente — hay un lugar para ti en Vectran.',
    openRoles: 'Puestos Abiertos', applyNow: 'Aplicar Ahora',
    roles: [
      { title: 'Gerente Senior de Flota', location: 'Bucarest, RO', type: 'Tiempo Completo' },
      { title: 'Coordinador Logístico', location: 'Varsovia, PL', type: 'Tiempo Completo' },
      { title: 'Ingeniero de Optimización de Rutas', location: 'Remoto (UE)', type: 'Tiempo Completo' },
      { title: 'Gestor de Cuentas Clave', location: 'Viena, AT', type: 'Tiempo Completo' },
      { title: 'Supervisor de Almacén', location: 'Lyon, FR', type: 'Tiempo Completo' },
      { title: 'Analista de Datos – Cadena de Suministro', location: 'Remoto (UE)', type: 'Tiempo Completo' },
    ],
    perksTitle: 'Por Qué Vectran',
    perks: ['Salario competitivo y bonificaciones de rendimiento', 'Puestos flexibles y remote-friendly', 'Movilidad profesional paneuropea', 'Herramientas modernas y stack tecnológico', 'Cobertura de salud y beneficios de bienestar', '30 días de vacaciones anuales'],
    cta: '¿No encuentras el puesto adecuado? Envíanos tu CV de todas formas.',
    ctaBtn: 'Solicitud Abierta',
  },
  testimonials: {
    tag: 'Historias de Clientes', title: 'Confiado por Líderes del Sector',
    items: [
      { quote: 'Cambiar a Vectran redujo nuestros costes logísticos un 22% y prácticamente eliminó los fallos de entrega en toda nuestra red de distribución europea.', author: 'Mirela Ionescu', role: 'Directora de Cadena de Suministro, Nordex Group' },
      { quote: 'Su solución de cadena de frío nos dio la confianza para expandirnos a nuevos mercados. La visibilidad y fiabilidad son incomparables.', author: 'Stefan Andrei', role: 'VP de Operaciones, PharmaSouth' },
      { quote: 'Desde la primera llamada hasta las operaciones diarias, el equipo de Vectran trata nuestra carga como propia.', author: 'Clara Dănilă', role: 'CEO, FreshRoute' },
    ],
  },
  contact: {
    tag: 'Contáctanos', title: 'Movamos Algo\nJuntos',
    body: 'Cuéntanos sobre tu envío y tendremos una propuesta personalizada en tu bandeja de entrada en 4 horas hábiles.',
    phone: '+40 (0) 000 000 000', email: 'hello@vectran.com', address: 'Calea Victoriei 80, Bucarest, Rumanía',
    form: {
      name: 'Nombre Completo', company: 'Empresa', emailLabel: 'Correo', origin: 'Origen', destination: 'Destino', cargo: 'Detalles de Carga',
      namePh: 'Tu nombre', companyPh: 'Tu empresa', emailPh: 'tu@empresa.es', originPh: 'Ciudad / País', destPh: 'Ciudad / País', cargoPh: 'Peso, dimensiones, requisitos especiales...', submit: 'Enviar Solicitud',
    },
  },
  footer: {
    tagline: 'Logística de precisión para un mundo en movimiento.',
    company: 'Empresa', companyLinks: ['Sobre Nosotros', 'Empleo', 'Prensa', 'Certificaciones'],
    services: 'Servicios', serviceLinks: ['Carga', 'Express', 'Almacenamiento', 'Cadena de Frío'],
    support: 'Soporte', supportLinks: ['Rastrear Envío', 'FAQ', 'Legal', 'Privacidad'],
    legal: '© 2025 Vectran Logistics S.A. — Todos los derechos reservados.',
    vat: 'Registrado en Rumanía · IVA RO00000001',
  },
};

export const translations: Record<Lang, Translations> = { en, ro, de, fr, es };
