import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

const SERVICE_ICONS = ['◈', '◉', '◫', '◬', '◭', '◮'];

/** Grid of service cards showing the company's logistics offerings. */
export function Services({ t }: { t: Translations }) {
  const [servicesRef, servicesInView] = useInView(0.08);

  return (
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
          {t.services.items.map((service, index) => (
            <article className="svc-card" key={index} style={{ animationDelay: `${index * 0.07}s` }}>
              <span className="svc-card__icon">{SERVICE_ICONS[index]}</span>
              <h3 className="svc-card__title">{service.title}</h3>
              <p className="svc-card__desc">{service.desc}</p>
              <div className="svc-card__bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
