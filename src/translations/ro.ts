import type { Translations } from './types';

/** Romanian translations */
export const ro: Translations = {
  nav: {
    services: 'Servicii', about: 'Despre', fleet: 'Flotă',
    coverage: 'Acoperire', careers: 'Cariere', contact: 'Contact', getQuote: 'Expediază Cu Noi',
  },
  hero: {
    eyebrow: 'Viteză. Siguranță. Livrat.',
    titleLine1: 'Marfa ta',
    titleLine2: 'Misiunea Noastra',
    subtitle: 'Soluții de transport internațional construite pe viteză și siguranță — livrăm ce contează, oriunde trebuie să ajungă.',
    ctaPrimary: 'Expediază Cu Noi',
    ctaSecondary: 'Explorează Serviciile',
    scroll: 'Derulează',
  },
  stats: { clients: 'Clienți Mulțumiți', onTime: 'Livrări la Timp', vehicles: 'Vehicule în Flotă', countries: 'Țări Acoperite' },
  services: {
    tag: 'Ce Facem',
    title: 'Servicii Logistice\nComplete',
    desc: 'De la un singur palet la un lanț de aprovizionare complet — SMC Express oferă precizie la fiecare etapă a călătoriei.',
    items: [
      { title: 'Transport Marfă', desc: 'Soluții de transport complet și parțial pentru mărfuri interne și transfrontaliere, cu urmărire în timp real și termene garantate.' },
      { title: 'Livrare Rapidă', desc: 'Expedieri urgente gestionate cu rutare prioritară, șoferi dedicați și opțiuni de livrare în aceeași zi sau a doua zi.' },
      { title: 'Securitatea Mărfii', desc: 'Marfa dumneavoastră este securizată și protejată în vehiculele noastre pe întreaga durată a transportului. Sisteme profesionale de fixare și monitorizare continuă.' },
      { title: 'Transport Internațional', desc: 'Transport transfrontalier european cu gestionare completă a formalităților vamale și documentație în țările UE.' },
      { title: 'Consultanță Logistică', desc: 'Optimizarea rutelor, analiza costurilor și consultanță pentru lanțul de aprovizionare — vă ajutăm să planificați o logistică mai inteligentă și mai eficientă.' },
      { title: 'Logistică Dedicată', desc: 'Flotă și șofer dedicați exclusiv afacerii dumneavoastră — rute personalizate, program flexibil și vehicule adaptate nevoilor.' },
    ],
  },
  about: {
    tag: 'Cine Suntem',
    title: 'Marfa Dumneavoastră.\nPromisiunea Noastră.',
    body1: 'Fondată în __YEAR__, SMC Express a început ca __ORIGIN_STORY__. Ceea ce a început modest a crescut prin dedicare, muncă asiduă și o convingere simplă: marfa dumneavoastră merită aceeași grijă pe care am acorda-o propriei noastre mărfi.',
    body2: 'Fiecare transport pe care îl gestionăm poartă promisiunea cuiva către clientul său. Înțelegem această responsabilitate. De aceea investim în oamenii noștri, întreținem flota la cele mai înalte standarde și suntem mereu disponibili. Cu SMC Express, nu sunteți doar un client — sunteți un partener.',
    pillars: ['Siguranța Mărfii', 'Flotă Modernă', 'Acoperire Europeană', 'Experiență & Încredere'],
    badge: 'Ani de Excelență',
  },
  fleet: {
    tag: 'Flota Noastră', title: 'Modernă. Întreținută.\nGata de Misiune.',
    footnote: 'Toate vehiculele sunt echipate cu GPS, senzori de sarcină și sisteme de telemetrie. Vârsta medie a flotei: 3,2 ani.',
    items: [
      { type: '__VEHICLE_TYPE_1__', capacity: '__CAPACITY_1__', count: '__COUNT_1__', tag: '__TAG_1__' },
      { type: '__VEHICLE_TYPE_2__', capacity: '__CAPACITY_2__', count: '__COUNT_2__', tag: '__TAG_2__' },
      { type: '__VEHICLE_TYPE_3__', capacity: '__CAPACITY_3__', count: '__COUNT_3__', tag: '__TAG_3__' },
      { type: '__VEHICLE_TYPE_4__', capacity: '__CAPACITY_4__', count: '__COUNT_4__', tag: '__TAG_4__' },
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
    subtitle: 'Suntem o echipă de profesioniști pasionați care modelează modul în care se mișcă Europa. Dacă ești pasionat de operațiuni, tehnologie sau succesul clienților — există un loc pentru tine la SMC Express.',
    openRoles: 'Posturi Disponibile',
    applyNow: 'Aplică Acum',
    roles: [
      { title: '__ROLE_1_TITLE__', location: '__ROLE_1_LOCATION__', type: '__ROLE_1_TYPE__' },
      { title: '__ROLE_2_TITLE__', location: '__ROLE_2_LOCATION__', type: '__ROLE_2_TYPE__' },
      { title: '__ROLE_3_TITLE__', location: '__ROLE_3_LOCATION__', type: '__ROLE_3_TYPE__' },
    ],
    perksTitle: 'De Ce SMC Express',
    perks: ['Salariu competitiv și bonusuri de performanță', 'Roluri flexibile și remote-friendly', 'Mobilitate de carieră pan-europeană', 'Instrumente și stack tehnologic modern', 'Asigurare de sănătate și beneficii wellness', '30 de zile concediu anual'],
    cta: 'Nu găsești rolul potrivit? Trimite-ne oricum CV-ul.',
    ctaBtn: 'Candidatură Deschisă',
  },
  testimonials: {
    tag: 'Povești de Clienți', title: 'De Încredere pentru Liderii Industriei',
    items: [
      { quote: 'Trecerea la SMC Express ne-a redus costurile logistice cu 22% și a eliminat practic eșecurile de livrare în rețeaua noastră europeană.', author: '__CLIENT_1_NAME__', role: 'Director Lanț Aprovizionare, __CLIENT_1_COMPANY__' },
      { quote: 'Soluția lor de lanț de frig ne-a dat încrederea să ne extindem pe piețe noi. Vizibilitatea și fiabilitatea sunt incomparabile în industrie.', author: '__CLIENT_2_NAME__', role: 'VP Operațiuni, __CLIENT_2_COMPANY__' },
      { quote: 'De la primul apel până la operațiunile zilnice, echipa SMC Express tratează marfa noastră ca pe a lor. Acest tip de parteneriat este rar.', author: '__CLIENT_3_NAME__', role: 'CEO, __CLIENT_3_COMPANY__' },
    ],
  },
  contact: {
    tag: 'Contactează-ne', title: 'Să Transportăm\nÎmpreună',
    body: 'Spune-ne despre expedierea ta și vom avea o propunere personalizată în căsuța ta în 4 ore lucrătoare.',
    phone: '__PHONE__', email: '__EMAIL__', address: '__ADDRESS__',
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
    legal: '© 2026 SMC Express __LEGAL_NAME__ — Toate drepturile rezervate.',
    vat: 'Înregistrat în România · TVA __VAT_NUMBER__',
  },
};
