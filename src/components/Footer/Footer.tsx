import type { Translations } from '../../translations';

/** Site footer with brand info, link columns, and legal/VAT text. */
export function Footer({ t }: { t: Translations }) {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="nav__logo" style={{ marginBottom: '0.75rem' }}>
            <img className="nav__logo-img" src="/images/logo.png" alt="SMC Express" />
            <span className="nav__logo-text">SMC Express</span>
          </div>
          <p>{t.footer.tagline}</p>
        </div>
        <div>
          <strong>{t.footer.company}</strong>
          <ul>{t.footer.companyLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        <div>
          <strong>{t.footer.services}</strong>
          <ul>{t.footer.serviceLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
        <div>
          <strong>{t.footer.support}</strong>
          <ul>{t.footer.supportLinks.map(link => <li key={link}><a href="#">{link}</a></li>)}</ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>{t.footer.legal}</span>
        <span>{t.footer.vat}</span>
      </div>
    </footer>
  );
}
