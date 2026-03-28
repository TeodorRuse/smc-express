import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Fleet section showing vehicle type cards with capacity and count specs. */
export function Fleet({ t }: { t: Translations }) {
  const [fleetRef, fleetInView] = useInView(0.08);

  return (
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
          {t.fleet.items.map((vehicle, index) => (
            <article className="fleet-card" key={index} style={{ animationDelay: `${index * 0.09}s` }}>
              <span className="fleet-card__tag">{vehicle.tag}</span>
              {/* TODO: Add vehicle photos at public/images/fleet-0.jpg through fleet-3.jpg */}
              <img className="fleet-card__img" src={`/images/fleet-${index}.jpg`} alt={vehicle.type} />
              <h3 className="fleet-card__type">{vehicle.type}</h3>
              <div className="fleet-card__specs">
                <div><span>{t.fleet.capacity}</span><strong>{vehicle.capacity}</strong></div>
                <div><span>{t.fleet.fleetSize}</span><strong>{vehicle.count}</strong></div>
              </div>
            </article>
          ))}
        </div>
        <p className={`fleet__note ${fleetInView ? 'ai' : ''}`}>{t.fleet.footnote}</p>
      </div>
    </section>
  );
}
