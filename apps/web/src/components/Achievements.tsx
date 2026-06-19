import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Achievements() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section" id="achievements">
      <div className="wrap">
        <SectionHead eyebrow={s.achievementsEyebrow} title={s.achievementsTitle} />
        <div className="ach-grid">
          <div className="reveal">
            <h3 className="ach-label">{s.achievementsLabel}</h3>
            <div className="ach-list">
              {t.achievements.map((a) => (
                <div className="ach-item" key={a.title}>
                  <div className="ach-title">{a.title}</div>
                  <p className="ach-detail">{a.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <h3 className="ach-label">{s.competenciesLabel}</h3>
            <ul className="competencies">
              {t.competencies.map((c) => (
                <li className="competency" key={c}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
