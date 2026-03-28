import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Coverage map section with region tags and animated dot markers. */
export function Coverage({ t }: { t: Translations }) {
  const [coverageRef, coverageInView] = useInView(0.08);

  return (
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
            {t.coverage.regions.map(region => <span className="region-tag" key={region}>{region}</span>)}
          </div>
        </div>

        <div className={`map-box ${coverageInView ? 'ai ai--delay' : ''}`}>
          {/* TODO: Add route map image at public/images/coverage-map.png */}
          <img src="/images/coverage-map.png" alt={t.coverage.mapLabel} className="map-box__img" />
        </div>
      </div>
    </section>
  );
}
