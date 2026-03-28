import { useInView } from '../../hooks/useInView';
import { CountUp } from './CountUp';
import { RouteMap } from './RouteMap';
import type { Translations } from '../../translations';

interface HeroProps {
  t: Translations;
  scrollTo: (id: string) => void;
}

/* TODO: Replace with real SMC Express numbers when available (e.g. '5M+', '97.5%', '120+', '15') */
const STAT_VALS = ['000', '00%', '000+', '00'];

/** Full-viewport hero section with animated title, CTAs, and key stats. */
export function Hero({ t, scrollTo }: HeroProps) {
  const [heroRef, heroInView] = useInView(0.05);
  const STAT_LABELS = [t.stats.tonnes, t.stats.onTime, t.stats.vehicles, t.stats.countries];

  return (
    <section className="hero" id="hero" ref={heroRef as React.RefObject<HTMLElement>}>
      <div className="hero__bg">
        <div className="hero__bg-img" />
        <div className="hero__grid" />
        <div className="hero__glow" />
        <RouteMap />
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
  );
}
