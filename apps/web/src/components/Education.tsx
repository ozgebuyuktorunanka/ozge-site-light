import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Education() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section section-tint" id="education">
      <div className="wrap">
        <SectionHead eyebrow={s.educationEyebrow} title={s.educationTitle} />
        <div className="edu-grid">
          <div className="reveal">
            <h3 className="edu-label">{s.educationLabel}</h3>
            {t.education.map((e) => (
              <div className="edu-item" key={e.title}>
                <div className="edu-title">{e.title}</div>
                <div className="edu-meta">{e.meta}</div>
              </div>
            ))}
          </div>
          <div className="reveal">
            <h3 className="edu-label">{s.certsLabel}</h3>
            {t.certifications.map((c) => (
              <div className="edu-item" key={c.title}>
                <div className="edu-title">{c.title}</div>
                <div className="edu-meta">{c.meta}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
