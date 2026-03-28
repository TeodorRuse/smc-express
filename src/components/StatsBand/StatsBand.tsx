import { CountUp } from '../Hero/CountUp';
import type { Translations } from '../../translations';

const STAT_VALS = ['200+', '98.5%', '10+', '25'];

/** Full-width amber banner displaying animated key statistics. */
export function StatsBand({ t }: { t: Translations }) {
  const STAT_LABELS = [t.stats.clients, t.stats.onTime, t.stats.vehicles, t.stats.countries];

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
