import { CountUp } from '../Hero/CountUp';
import type { Translations } from '../../translations';

/* TODO: Replace with real SMC Express numbers when available (e.g. '5M+', '97.5%', '120+', '15') */
const STAT_VALS = ['000', '00%', '000+', '00'];

/** Full-width amber banner displaying animated key statistics. */
export function StatsBand({ t }: { t: Translations }) {
  const STAT_LABELS = [t.stats.tonnes, t.stats.onTime, t.stats.vehicles, t.stats.countries];

  return (
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
  );
}
