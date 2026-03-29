import { useState, useEffect } from 'react';
import { LANGUAGES, type Lang } from '../../translations';
import type { Translations } from '../../translations';

interface NavbarProps {
  t: Translations;                                   // current language translations
  lang: Lang;                                        // active language code
  setLang: (lang: Lang) => void;                     // change application language
  dark: boolean;                                     // true = dark theme active
  setDark: (fn: (d: boolean) => boolean) => void;    // toggle theme state
  scrollTo: (id: string) => void;                    // smooth-scroll to section by id
}

/**
 * Fixed navigation bar with:
 * - Logo + section links
 * - Language picker dropdown
 * - Dark/light theme toggle
 * - Hamburger menu for mobile
 *
 * Becomes semi-transparent with blur after scrolling past 48px.
 */
export function Navbar({ t, lang, setLang, dark, setDark, scrollTo }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  /* Add background blur to nav after user scrolls down */
  useEffect(() => {
    const handleScroll = () => setHasUserScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close language dropdown when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.lang-picker')) setIsLanguageDropdownOpen(false);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const NAV_ITEMS = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about,    id: 'about' },
    { label: t.nav.fleet,    id: 'fleet' },
    { label: t.nav.coverage, id: 'coverage' },
    { label: t.nav.careers,  id: 'careers' },
    { label: t.nav.contact,  id: 'contact' },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  const navigateToSection = (id: string) => {
    scrollTo(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`nav ${hasUserScrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <div className="nav__logo" onClick={() => navigateToSection('hero')} role="button" tabIndex={0}>
          <img className="nav__logo-img" src="/images/smc_logo.jpg" alt="SMC Express" />
          <span className="nav__logo-text">SMC Express</span>
        </div>

        <ul className={`nav__links ${isMobileMenuOpen ? 'nav__links--open' : ''}`}>
          {NAV_ITEMS.map(({ label, id }) => (
            <li key={id}>
              <button className="nav__link" onClick={() => navigateToSection(id)}>{label}</button>
            </li>
          ))}

          <li className="nav__controls">
            <div className="lang-picker">
              <button className="lang-picker__btn" onClick={() => setIsLanguageDropdownOpen(open => !open)}>
                <img src={currentLang.flagUrl} alt={currentLang.label} className="lang-picker__flag" />
                <span className="lang-picker__code">{currentLang.code.toUpperCase()}</span>
                <span className="lang-picker__arrow">{isLanguageDropdownOpen ? '▲' : '▼'}</span>
              </button>
              {isLanguageDropdownOpen && (
                <ul className="lang-picker__menu">
                  {LANGUAGES.map(l => (
                    <li key={l.code}>
                      <button
                        className={`lang-picker__option ${l.code === lang ? 'lang-picker__option--active' : ''}`}
                        onClick={() => { setLang(l.code); setIsLanguageDropdownOpen(false); }}
                      >
                        <img src={l.flagUrl} alt={l.label} className="lang-picker__flag" />
                        <span>{l.label}</span>
                        <span className="lang-picker__option-code">{l.code.toUpperCase()}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
              {dark ? '☀️' : '🌙'}
            </button>

            <button className="btn btn--nav" onClick={() => navigateToSection('contact')}>
              {t.nav.getQuote}
            </button>
          </li>
        </ul>

        <button className={`nav__burger ${isMobileMenuOpen ? 'nav__burger--open' : ''}`} onClick={() => setIsMobileMenuOpen(open => !open)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
