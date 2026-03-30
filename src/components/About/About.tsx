import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Company history section with visual placeholder, years badge, and core pillars. */
export function About({ t }: { t: Translations }) {
  const [aboutRef, aboutInView] = useInView(0.08);

  return (
    <section className="section about" id="about" ref={aboutRef as React.RefObject<HTMLElement>}>
      <div className="container about__inner">
        <div className={`about__visual ${aboutInView ? 'ai' : ''}`}>
          <div className="about__img">
            <video
              className="about__img-video"
              src="/videos/sprinter_good.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="about__badge">
            <b className="about__badge-num">{new Date().getFullYear() - 2010}</b>
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
  );
}
