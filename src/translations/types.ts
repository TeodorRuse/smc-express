/**
 * Supported language codes.
 */
export type Lang = 'en' | 'ro' | 'de' | 'fr' | 'es';

/**
 * Available languages with display label and flag emoji.
 */
/**
 * Flag URLs use Flagcdn (open-source CDN for country flag SVGs).
 * Format: https://flagcdn.com/24x18/{country-code}.png
 */
export const LANGUAGES: { code: Lang; label: string; flagUrl: string }[] = [
  { code: 'ro', label: 'Română',   flagUrl: 'https://flagcdn.com/24x18/ro.png' },
  { code: 'en', label: 'English',  flagUrl: 'https://flagcdn.com/24x18/gb.png' },
  { code: 'de', label: 'Deutsch',  flagUrl: 'https://flagcdn.com/24x18/de.png' },
  { code: 'fr', label: 'Français', flagUrl: 'https://flagcdn.com/24x18/fr.png' },
  { code: 'es', label: 'Español',  flagUrl: 'https://flagcdn.com/24x18/es.png' },
];

/**
 * Shape of all translatable text content used across the site.
 * Every language file must satisfy this interface.
 */
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
    clients: string;
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
