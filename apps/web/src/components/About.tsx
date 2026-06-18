import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function About() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section" id="about">
      <div className="wrap">
        <SectionHead eyebrow={s.aboutEyebrow} title={s.aboutTitle} />
        <div className="about-grid">
          <div className="about-copy reveal">
            {t.about.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <dl className="facts reveal">
            {t.about.facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
