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
      <Fleet t={t} />
      <Coverage t={t} />
      <Careers t={t} />
      <Testimonials t={t} />
      <Contact t={t} />
      <Footer t={t} />
    </div>
  );
}
