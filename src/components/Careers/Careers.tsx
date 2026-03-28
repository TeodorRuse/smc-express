import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Careers section with open job roles listing and company perks. */
export function Careers({ t }: { t: Translations }) {
  const [careersRef, careersInView] = useInView(0.08);

  return (
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
          <div className={`careers__roles ${careersInView ? 'ai' : ''}`}>
            <h3 className="careers__sub">{t.careers.openRoles}</h3>
            <div className="roles-list">
              {t.careers.roles.map((role, index) => (
                <div className="role-card" key={index}>
                  <div className="role-card__left">
                    <span className="role-card__title">{role.title}</span>
                    <span className="role-card__loc">📍 {role.location}</span>
                  </div>
                  <div className="role-card__right">
                    <span className="role-card__type">{role.type}</span>
                    <button className="btn btn--outline-sm">{t.careers.applyNow}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`careers__perks ${careersInView ? 'ai ai--delay' : ''}`}>
            <h3 className="careers__sub">{t.careers.perksTitle}</h3>
            <ul className="perks-list">
              {t.careers.perks.map((perk, index) => (
                <li key={index}><span className="perk-dot" />{perk}</li>
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
  );
}
