import { useState, useEffect, useCallback } from 'react';
import { translations, type Lang } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { StatsBand } from './components/StatsBand';
import { Fleet } from './components/Fleet';
import { Coverage } from './components/Coverage';
import { Careers } from './components/Careers';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './App.css';

/** Overlay with a slowly spinning gear icon — signals "work in progress" without any language. */
function MaintenanceOverlay({ children }: { children: React.ReactNode }) {
  return (
    <div className="maintenance-wrap">
      {children}
      <div className="maintenance-overlay">
        <svg className="maintenance-gear" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </div>
    </div>
  );
}

/**
 * Root application component.
 * Manages global state (language, theme) and composes all page sections.
 */
export default function App() {
  const [lang, setLang] = useState<Lang>('ro');
  const [dark, setDark]  = useState(false);

  const t = translations[lang];

  /* Sync the data-theme attribute on <html> whenever the theme changes */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  /* Smooth-scroll to a section by its DOM id */
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="app">
      <Navbar t={t} lang={lang} setLang={setLang} dark={dark} setDark={setDark} scrollTo={scrollTo} />
      <Hero t={t} scrollTo={scrollTo} />
      <Services t={t} />
      <About t={t} />
      <StatsBand t={t} />
      <MaintenanceOverlay><Fleet t={t} /></MaintenanceOverlay>
      <MaintenanceOverlay><Coverage t={t} /></MaintenanceOverlay>
      <MaintenanceOverlay><Careers t={t} /></MaintenanceOverlay>
      <MaintenanceOverlay><Testimonials t={t} /></MaintenanceOverlay>
      <Contact t={t} />
      <Footer t={t} scrollTo={scrollTo} />
    </div>
  );
}
