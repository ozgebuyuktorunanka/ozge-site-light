import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Metrics() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section section-tint" id="impact">
      <div className="wrap">
        <SectionHead eyebrow={s.impactEyebrow} title={s.impactTitle} />
        <div className="metrics">
          {t.metrics.map((m, i) => (
            <div className="metric reveal" key={i}>
              <div className="metric-value">{m.value}</div>
              <p className="metric-context">{m.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
