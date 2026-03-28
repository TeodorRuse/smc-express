import { useState, useEffect, useRef, useCallback } from 'react';
import { translations, LANGUAGES, type Lang } from './i18n';
import './App.css';

/* ─── HOOKS ─────────────────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView] as const;
}

/* ─── COUNTUP ────────────────────────────────────────────────── */
function CountUp({ raw }: { raw: string }) {
  const numeric = parseFloat(raw.replace(/[^0-9.]/g, ''));
  const suffix  = raw.replace(/[0-9.]/g, '');
  const [val, setVal] = useState(0);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const total = 1600;
    const step  = 16;
    const inc   = numeric / (total / step);
    const t = setInterval(() => {
      cur += inc;
      if (cur >= numeric) { setVal(numeric); clearInterval(t); }
      else setVal(cur);
    }, step);
    return () => clearInterval(t);
  }, [inView, numeric]);

  const display = Number.isInteger(numeric) ? Math.round(val).toLocaleString() : val.toFixed(1);
  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{display}{suffix}</span>;
}

/* ─── SERVICE ICONS ──────────────────────────────────────────── */
const SVC_ICONS = ['◈', '◉', '◫', '◬', '◭', '◮'];

/* ─── APP ────────────────────────────────────────────────────── */
export default function App() {
  const [lang, setLang]           = useState<Lang>('en');
  const [dark, setDark]           = useState(true);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [activeT, setActiveT]     = useState(0);

  const t = translations[lang];

  /* theme class on root */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, [dark]);

  /* nav scroll */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  /* testimonial auto-rotate */
  useEffect(() => {
    const id = setInterval(() => setActiveT(i => (i + 1) % t.testimonials.items.length), 5000);
    return () => clearInterval(id);
  }, [t.testimonials.items.length]);

  /* close lang picker on outside click */
  useEffect(() => {
    const fn = (e: MouseEvent) => {
      if (!(e.target as Element).closest('.lang-picker')) setLangOpen(false);
    };
    document.addEventListener('click', fn);
    return () => document.removeEventListener('click', fn);
  }, []);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  }, []);

  const NAV_ITEMS = [
    { label: t.nav.services, id: 'services' },
    { label: t.nav.about,    id: 'about' },
    { label: t.nav.fleet,    id: 'fleet' },
    { label: t.nav.coverage, id: 'coverage' },
    { label: t.nav.careers,  id: 'careers' },
    { label: t.nav.contact,  id: 'contact' },
  ];

  const STAT_VALS = ['12M+', '98.6%', '340+', '28'];
  const STAT_LABELS = [t.stats.tonnes, t.stats.onTime, t.stats.vehicles, t.stats.countries];

  /* in-view refs */
  const [heroRef,         heroInView]         = useInView(0.05);
  const [servicesRef,     servicesInView]     = useInView(0.08);
  const [aboutRef,        aboutInView]        = useInView(0.08);
  const [fleetRef,        fleetInView]        = useInView(0.08);
  const [coverageRef,     coverageInView]     = useInView(0.08);
  const [careersRef,      careersInView]      = useInView(0.08);
  const [testimonialsRef, testimonialsInView] = useInView(0.08);
  const [contactRef,      contactInView]      = useInView(0.08);

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  return (
    <div className="app">

      {/* ── NAV ── */}
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <div className="nav__logo" onClick={() => scrollTo('hero')} role="button" tabIndex={0}>
            <span className="nav__logo-mark">V</span>
            <span className="nav__logo-text">ECTRAN</span>
          </div>

          <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            {NAV_ITEMS.map(({ label, id }) => (
              <li key={id}>
                <button className="nav__link" onClick={() => scrollTo(id)}>{label}</button>
              </li>
            ))}

            {/* controls inside mobile menu */}
            <li className="nav__controls">
              {/* Language picker */}
              <div className="lang-picker">
                <button className="lang-picker__btn" onClick={() => setLangOpen(o => !o)}>
                  <span>{currentLang.flag}</span>
                  <span className="lang-picker__code">{currentLang.code.toUpperCase()}</span>
                  <span className="lang-picker__arrow">{langOpen ? '▲' : '▼'}</span>
                </button>
                {langOpen && (
                  <ul className="lang-picker__menu">
                    {LANGUAGES.map(l => (
                      <li key={l.code}>
                        <button
                          className={`lang-picker__option ${l.code === lang ? 'lang-picker__option--active' : ''}`}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                        >
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Theme toggle */}
              <button className="theme-toggle" onClick={() => setDark(d => !d)} aria-label="Toggle theme">
                {dark ? '☀️' : '🌙'}
              </button>

              <button className="btn btn--nav" onClick={() => scrollTo('contact')}>
                {t.nav.getQuote}
              </button>
            </li>
          </ul>

          <button className={`nav__burger ${menuOpen ? 'nav__burger--open' : ''}`} onClick={() => setMenuOpen(m => !m)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero" id="hero" ref={heroRef as React.RefObject<HTMLElement>}>
        <div className="hero__bg">
          <div className="hero__grid" />
          <div className="hero__glow" />
        </div>

        <div className={`hero__body ${heroInView ? 'ai' : ''}`}>
          <p className="hero__eyebrow">{t.hero.eyebrow}</p>
          <h1 className="hero__title">
            <span>{t.hero.titleLine1}</span><br />
            <em>{t.hero.titleLine2}</em>
          </h1>
          <p className="hero__sub">{t.hero.subtitle}</p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('contact')}>{t.hero.ctaPrimary}</button>
            <button className="btn btn--ghost"   onClick={() => scrollTo('services')}>{t.hero.ctaSecondary}</button>
          </div>
        </div>

        <div className="hero__stats">
          {STAT_VALS.map((v, i) => (
            <div className="hero__stat" key={i}>
              <span className="hero__stat-val"><CountUp raw={v} /></span>
              <span className="hero__stat-lbl">{STAT_LABELS[i]}</span>
            </div>
          ))}
        </div>

        <div className="hero__scroll">
          <span>{t.hero.scroll}</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="section services" id="services" ref={servicesRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <header className={`sh ${servicesInView ? 'ai' : ''}`}>
            <span className="tag">{t.services.tag}</span>
            <h2 className="sh__title">
              {t.services.title.split('\n').map((line, i) => (
                <span key={i}>{line}{i < t.services.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="sh__desc">{t.services.desc}</p>
          </header>

          <div className={`svc-grid ${servicesInView ? 'ai' : ''}`}>
            {t.services.items.map((s, i) => (
              <article className="svc-card" key={i} style={{ animationDelay: `${i * 0.07}s` }}>
                <span className="svc-card__icon">{SVC_ICONS[i]}</span>
                <h3 className="svc-card__title">{s.title}</h3>
                <p className="svc-card__desc">{s.desc}</p>
                <div className="svc-card__bar" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="section about" id="about" ref={aboutRef as React.RefObject<HTMLElement>}>
        <div className="container about__inner">
          <div className={`about__visual ${aboutInView ? 'ai' : ''}`}>
            <div className="about__img">
              <span className="about__img-text">EST. 2001</span>
            </div>
            <div className="about__badge">
              <b className="about__badge-num">23</b>
              <span className="about__badge-lbl">{t.about.badge}</span>
            </div>
          </div>

          <div className={`about__copy ${aboutInView ? 'ai ai--delay' : ''}`}>
            <span className="tag">{t.about.tag}</span>
            <h2 className="sh__title">
              {t.about.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < t.about.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="body-text">{t.about.body1}</p>
            <p className="body-text">{t.about.body2}</p>
            <ul className="pillars">
              {t.about.pillars.map(p => (
                <li key={p}><span className="pillar-dot" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className="stats-band">
        <div className="container stats-band__grid">
          {STAT_VALS.map((v, i) => (
            <div className="stats-band__item" key={i}>
              <span className="stats-band__val"><CountUp raw={v} /></span>
              <span className="stats-band__lbl">{STAT_LABELS[i]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FLEET ── */}
      <section className="section fleet" id="fleet" ref={fleetRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <header className={`sh ${fleetInView ? 'ai' : ''}`}>
            <span className="tag">{t.fleet.tag}</span>
            <h2 className="sh__title">
              {t.fleet.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < t.fleet.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
          </header>

          <div className={`fleet-grid ${fleetInView ? 'ai' : ''}`}>
            {t.fleet.items.map((f, i) => (
              <article className="fleet-card" key={i} style={{ animationDelay: `${i * 0.09}s` }}>
                <span className="fleet-card__tag">{f.tag}</span>
                <div className="fleet-card__icon">🚛</div>
                <h3 className="fleet-card__type">{f.type}</h3>
                <div className="fleet-card__specs">
                  <div><span>{t.fleet.capacity}</span><strong>{f.capacity}</strong></div>
                  <div><span>{t.fleet.fleetSize}</span><strong>{f.count}</strong></div>
                </div>
              </article>
            ))}
          </div>
          <p className={`fleet__note ${fleetInView ? 'ai' : ''}`}>{t.fleet.footnote}</p>
        </div>
      </section>

      {/* ── COVERAGE ── */}
      <section className="section coverage" id="coverage" ref={coverageRef as React.RefObject<HTMLElement>}>
        <div className="container coverage__inner">
          <div className={`coverage__copy ${coverageInView ? 'ai' : ''}`}>
            <span className="tag">{t.coverage.tag}</span>
            <h2 className="sh__title">
              {t.coverage.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < t.coverage.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="body-text">{t.coverage.body}</p>
            <div className="regions">
              {t.coverage.regions.map(r => <span className="region-tag" key={r}>{r}</span>)}
            </div>
          </div>

          <div className={`map-box ${coverageInView ? 'ai ai--delay' : ''}`}>
            <span className="map-box__label">{t.coverage.mapLabel}</span>
            <div className="map-dots">
              {[...Array(14)].map((_, i) => (
                <div key={i} className="map-dot" style={{
                  top:  `${18 + Math.sin(i * 1.7) * 32 + (i % 3) * 8}%`,
                  left: `${12 + (i % 7) * 12 + Math.sin(i) * 4}%`,
                  animationDelay: `${i * 0.18}s`,
                }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section className="section careers" id="careers" ref={careersRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <header className={`sh ${careersInView ? 'ai' : ''}`}>
            <span className="tag">{t.careers.tag}</span>
            <h2 className="sh__title">
              {t.careers.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < t.careers.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="sh__desc">{t.careers.subtitle}</p>
          </header>

          <div className="careers__layout">
            {/* Roles */}
            <div className={`careers__roles ${careersInView ? 'ai' : ''}`}>
              <h3 className="careers__sub">{t.careers.openRoles}</h3>
              <div className="roles-list">
                {t.careers.roles.map((r, i) => (
                  <div className="role-card" key={i}>
                    <div className="role-card__left">
                      <span className="role-card__title">{r.title}</span>
                      <span className="role-card__loc">📍 {r.location}</span>
                    </div>
                    <div className="role-card__right">
                      <span className="role-card__type">{r.type}</span>
                      <button className="btn btn--outline-sm">{t.careers.applyNow}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Perks */}
            <div className={`careers__perks ${careersInView ? 'ai ai--delay' : ''}`}>
              <h3 className="careers__sub">{t.careers.perksTitle}</h3>
              <ul className="perks-list">
                {t.careers.perks.map((p, i) => (
                  <li key={i}><span className="perk-dot" />{p}</li>
                ))}
              </ul>
              <div className="careers__open-cta">
                <p>{t.careers.cta}</p>
                <button className="btn btn--primary">{t.careers.ctaBtn}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section testimonials" id="testimonials" ref={testimonialsRef as React.RefObject<HTMLElement>}>
        <div className="container">
          <header className={`sh ${testimonialsInView ? 'ai' : ''}`}>
            <span className="tag">{t.testimonials.tag}</span>
            <h2 className="sh__title">{t.testimonials.title}</h2>
          </header>

          <div className={`t-carousel ${testimonialsInView ? 'ai' : ''}`}>
            {t.testimonials.items.map((item, i) => (
              <article key={i} className={`t-card ${i === activeT ? 't-card--active' : ''}`}>
                <p className="t-card__quote">"{item.quote}"</p>
                <div className="t-card__author">
                  <div className="t-card__avatar">{item.author[0]}</div>
                  <div>
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="t-dots">
            {t.testimonials.items.map((_, i) => (
              <button
                key={i}
                className={`t-dot ${i === activeT ? 't-dot--active' : ''}`}
                onClick={() => setActiveT(i)}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="section contact" id="contact" ref={contactRef as React.RefObject<HTMLElement>}>
        <div className="container contact__inner">
          <div className={`contact__copy ${contactInView ? 'ai' : ''}`}>
            <span className="tag">{t.contact.tag}</span>
            <h2 className="sh__title">
              {t.contact.title.split('\n').map((l, i) => (
                <span key={i}>{l}{i < t.contact.title.split('\n').length - 1 && <br />}</span>
              ))}
            </h2>
            <p className="body-text">{t.contact.body}</p>
            <div className="contact__info">
              <div><span>📞</span><a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a></div>
              <div><span>✉️</span><a href={`mailto:${t.contact.email}`}>{t.contact.email}</a></div>
              <div><span>📍</span><span>{t.contact.address}</span></div>
            </div>
          </div>

          <div className={`contact__form ${contactInView ? 'ai ai--delay' : ''}`}>
            <div className="form-row-2">
              <div className="fg">
                <label>{t.contact.form.name}</label>
                <input type="text" placeholder={t.contact.form.namePh} />
              </div>
              <div className="fg">
                <label>{t.contact.form.company}</label>
                <input type="text" placeholder={t.contact.form.companyPh} />
              </div>
            </div>
            <div className="fg">
              <label>{t.contact.form.emailLabel}</label>
              <input type="email" placeholder={t.contact.form.emailPh} />
            </div>
            <div className="form-row-2">
              <div className="fg">
                <label>{t.contact.form.origin}</label>
                <input type="text" placeholder={t.contact.form.originPh} />
              </div>
              <div className="fg">
                <label>{t.contact.form.destination}</label>
                <input type="text" placeholder={t.contact.form.destPh} />
              </div>
            </div>
            <div className="fg">
              <label>{t.contact.form.cargo}</label>
              <textarea placeholder={t.contact.form.cargoPh} rows={4} />
            </div>
            <button className="btn btn--primary btn--full">{t.contact.form.submit}</button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container footer__grid">
          <div className="footer__brand">
            <div className="nav__logo" style={{ marginBottom: '0.75rem' }}>
              <span className="nav__logo-mark">V</span>
              <span className="nav__logo-text">ECTRAN</span>
            </div>
            <p>{t.footer.tagline}</p>
          </div>
          <div>
            <strong>{t.footer.company}</strong>
            <ul>{t.footer.companyLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div>
            <strong>{t.footer.services}</strong>
            <ul>{t.footer.serviceLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
          <div>
            <strong>{t.footer.support}</strong>
            <ul>{t.footer.supportLinks.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        </div>
        <div className="footer__bottom">
          <span>{t.footer.legal}</span>
          <span>{t.footer.vat}</span>
        </div>
      </footer>
    </div>
  );
}
