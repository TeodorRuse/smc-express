import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';
import { bgDots, cities, routes } from './europeMap';
import './coverage.css';

function cityByName(name: string) {
  return cities.find(c => c.name === name)!;
}

/** Coverage — contained section with text left, dot-matrix map right. */
export function Coverage({ t }: { t: Translations }) {
  const [coverageRef, coverageInView] = useInView(0.08);

  return (
    <section className="section coverage" id="coverage" ref={coverageRef as React.RefObject<HTMLElement>}>
      <div className="container coverage__inner">

        {/* Text */}
        <div className={`coverage__text ${coverageInView ? 'ai' : ''}`}>
          <span className="tag">{t.coverage.tag}</span>
          <h2 className="sh__title">
            {t.coverage.title.split('\n').map((l, i) => (
              <span key={i}>{l}{i < t.coverage.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="body-text">{t.coverage.body}</p>
          <div className="regions">
            {t.coverage.regions.map(region => <span className="region-tag" key={region}>{region}</span>)}
          </div>
        </div>

        {/* Map */}
        <div className={`coverage__map ${coverageInView ? 'ai ai--delay' : ''}`}>
          <svg className="coverage__svg" viewBox="-40 -30 560 440" preserveAspectRatio="xMidYMid meet">
            <defs>
              <radialGradient id="hubGlow">
                <stop offset="0%"  stopColor="var(--amber)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--amber)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <g className={`dot-field ${coverageInView ? 'dot-field--visible' : ''}`}>
              {bgDots.map((d, i) => (
                <circle key={i} cx={d.x} cy={d.y} r="1.2" className="bg-dot" />
              ))}
            </g>

            <g className="route-lines">
              {routes.map(([a, b], i) => {
                const ca = cityByName(a);
                const cb = cityByName(b);
                const isHub = ca.hub && cb.hub;
                return (
                  <line
                    key={i}
                    x1={ca.x} y1={ca.y} x2={cb.x} y2={cb.y}
                    className={`route-line ${isHub ? 'route-line--hub' : ''} ${coverageInView ? 'route-line--visible' : ''}`}
                    style={{ animationDelay: `${0.4 + i * 0.04}s` }}
                  />
                );
              })}
            </g>

            {cities.filter(c => !c.alba).map(city => (
              <g key={city.name} className={`city-node ${coverageInView ? 'city-node--visible' : ''}`}>
                <circle cx={city.x} cy={city.y} r="2" className="city-dot" />
                <text x={city.x} y={city.y - 6} className="city-label">{city.name}</text>
              </g>
            ))}

            {cities.filter(c => c.alba).map(city => (
              <g key={city.name} className={`alba-node ${coverageInView ? 'alba-node--visible' : ''}`}>
                <circle cx={city.x} cy={city.y} r="18" fill="url(#hubGlow)" />
                <circle cx={city.x} cy={city.y} r="4.5" className="alba-dot" />
                <text x={city.x} y={city.y - 12} className="alba-label">{city.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
}
