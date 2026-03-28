import type { Translations } from './types';

/** English translations */
export const en: Translations = {
  nav: {
    services: 'Services', about: 'About', fleet: 'Fleet',
    coverage: 'Coverage', careers: 'Careers', contact: 'Contact', getQuote: 'Ship With Us',
  },
  hero: {
    eyebrow: 'Speed. Safety. Delivered.',
    titleLine1: 'Your Cargo',
    titleLine2: 'Our Mission',
    subtitle: 'Worldwide freight solutions built on speed and safety — delivering what matters, wherever it needs to go.',
    ctaPrimary: 'Ship With Us',
    ctaSecondary: 'Explore Services',
    scroll: 'Scroll',
  },
  stats: { clients: 'Happy Clients', onTime: 'On-Time Rate', vehicles: 'Fleet Vehicles', countries: 'Countries Covered' },
  services: {
    tag: 'What We Do',
    title: 'Full-Spectrum\nLogistics Services',
    desc: 'From a single pallet to a full supply chain overhaul — SMC Express delivers precision at every stage of the journey.',
    items: [
      { title: 'Freight Transport', desc: 'Full and partial truckload solutions for domestic and cross-border cargo, with real-time tracking and guaranteed delivery windows.' },
      { title: 'Fast Delivery', desc: 'Time-critical shipments handled with priority routing, dedicated drivers, and same-day or next-day delivery options.' },
      { title: 'Cargo Security', desc: 'Your cargo is safely secured and protected inside our vehicles throughout the entire journey. Professional fastening systems and continuous monitoring.' },
      { title: 'International Transport', desc: 'Cross-border European transport with full customs handling and documentation across EU countries.' },
      { title: 'Logistics Consulting', desc: 'Route optimization, cost analysis, and supply chain consulting — we help you plan smarter, more efficient logistics.' },
      { title: 'Dedicated Logistics', desc: 'A dedicated fleet and driver assigned exclusively to your business — custom routes, schedules, and vehicles tailored to your needs.' },
    ],
  },
  about: {
    tag: 'Who We Are',
    title: 'Your Cargo.\nOur Promise.',
    body1: 'Founded in __YEAR__, SMC Express began as __ORIGIN_STORY__. What started small has grown through dedication, hard work, and a simple belief: your cargo deserves the same care we\'d give our own.',
    body2: 'Every shipment we handle carries someone\'s promise to their customer. We understand that responsibility. That\'s why we invest in our people, maintain our fleet to the highest standards, and stay available whenever you need us. With SMC Express, you\'re not just a client — you\'re a partner.',
    pillars: ['Cargo Security', 'Modern Fleet', 'European Coverage', 'Experience & Trust'],
    badge: 'Years of Excellence',
  },
  fleet: {
    tag: 'Our Fleet', title: 'Modern. Maintained.\nMission-Ready.',
    footnote: 'All vehicles equipped with GPS tracking, load sensors, and driver telemetry systems. Average fleet age: 3.2 years.',
    items: [
      { type: '__VEHICLE_TYPE_1__', capacity: '__CAPACITY_1__', count: '__COUNT_1__', tag: '__TAG_1__' },
      { type: '__VEHICLE_TYPE_2__', capacity: '__CAPACITY_2__', count: '__COUNT_2__', tag: '__TAG_2__' },
      { type: '__VEHICLE_TYPE_3__', capacity: '__CAPACITY_3__', count: '__COUNT_3__', tag: '__TAG_3__' },
      { type: '__VEHICLE_TYPE_4__', capacity: '__CAPACITY_4__', count: '__COUNT_4__', tag: '__TAG_4__' },
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
    subtitle: 'We\'re a team of driven professionals shaping how Europe moves. If you\'re passionate about operations, technology, or client success — there\'s a place for you at SMC Express.',
    openRoles: 'Open Roles',
    applyNow: 'Apply Now',
    roles: [
      { title: '__ROLE_1_TITLE__', location: '__ROLE_1_LOCATION__', type: '__ROLE_1_TYPE__' },
      { title: '__ROLE_2_TITLE__', location: '__ROLE_2_LOCATION__', type: '__ROLE_2_TYPE__' },
      { title: '__ROLE_3_TITLE__', location: '__ROLE_3_LOCATION__', type: '__ROLE_3_TYPE__' },
    ],
    perksTitle: 'Why SMC Express',
    perks: ['Competitive salary & performance bonuses', 'Flexible & remote-friendly roles', 'Pan-European career mobility', 'Modern tools & tech stack', 'Health coverage & wellness benefits', '30 days annual leave'],
    cta: 'Don\'t see the right role? Send us your CV anyway.',
    ctaBtn: 'Open Application',
  },
  testimonials: {
    tag: 'Client Stories', title: 'Trusted by Industry Leaders',
    items: [
      { quote: 'Switching to SMC Express cut our logistics costs by 22% and virtually eliminated delivery failures across our European distribution network.', author: '__CLIENT_1_NAME__', role: 'Supply Chain Director, __CLIENT_1_COMPANY__' },
      { quote: 'Their cold chain solution gave us the confidence to expand into new markets. The visibility and reliability are unmatched in this industry.', author: '__CLIENT_2_NAME__', role: 'Operations VP, __CLIENT_2_COMPANY__' },
      { quote: 'From the first call to daily operations, the SMC Express team treats our cargo like their own. That kind of partnership is rare.', author: '__CLIENT_3_NAME__', role: 'CEO, __CLIENT_3_COMPANY__' },
    ],
  },
  contact: {
    tag: 'Get In Touch', title: 'Let\'s Move\nSomething Together',
    body: 'Tell us about your shipment and we\'ll have a tailored proposal in your inbox within 4 business hours.',
    phone: '__PHONE__', email: '__EMAIL__', address: '__ADDRESS__',
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
    legal: '© 2026 SMC Express __LEGAL_NAME__ — All rights reserved.',
    vat: 'Registered in Romania · VAT __VAT_NUMBER__',
  },
};
