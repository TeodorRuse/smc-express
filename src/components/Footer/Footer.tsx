import type { Translations } from '../../translations';

interface FooterProps {
  t: Translations;
  scrollTo: (id: string) => void;
}

/** Professional site footer with brand motto, navigation, contact details, and legal info. */
export function Footer({ t, scrollTo }: FooterProps) {
  return (
    <footer className="footer">

      {/* Motto divider — "Rapid si Sigur" */}
      <div className="footer__motto-bar">
        <div className="container footer__motto-inner">
          <span className="footer__motto-line" />
          <span className="footer__motto-text">Rapid si Sigur</span>
          <span className="footer__motto-line" />
        </div>
      </div>

      {/* Main footer content */}
      <div className="container footer__grid">

        {/* Brand column */}
        <div className="footer__brand">
          <div className="nav__logo" style={{ marginBottom: '0.75rem' }}>
            <img className="nav__logo-img" src="/images/smc_logo.jpg" alt="SMC Express" />
            <span className="nav__logo-text">SMC Express</span>
          </div>
          <p className="footer__tagline">{t.footer.tagline}</p>
        </div>

        {/* Quick links — scroll to actual sections */}
        <div>
          <strong>{t.footer.navigation}</strong>
          <ul>
            {t.footer.navLinks.map(link => (
              <li key={link.sectionId}>
                <button className="footer__nav-link" onClick={() => scrollTo(link.sectionId)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <strong>{t.footer.contactTitle}</strong>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </span>
              <a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a>
            </li>
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </span>
              <a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>
            </li>
            <li>
              <span className="footer__contact-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <span>{t.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bottom bar */}
      <div className="footer__bottom">
        <span>{t.footer.legal}</span>
        <span className="footer__made-with">{t.footer.madeWith}</span>
        <span>{t.footer.vat}</span>
      </div>
    </footer>
  );
}
