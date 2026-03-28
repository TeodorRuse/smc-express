import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** SVG icons for each service — truck, speed, shield, globe, chart, handshake */
const SERVICE_ICONS = [
  // Freight Transport — truck
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 4v4h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  // Fast Delivery — lightning bolt
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  // Secure Storage — shield check
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>,
  // International Transport — globe
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  // Logistics Consulting — bar chart
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>,
  // Dedicated Logistics — handshake/users
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
];

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
