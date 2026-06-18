import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Industries() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section" id="industries">
      <div className="wrap">
        <SectionHead eyebrow={s.industriesEyebrow} title={s.industriesTitle} />
        <div className="industries">
          {t.industries.map((ind) => (
            <div className="industry reveal" key={ind.title}>
              <h3 className="industry-title">{ind.title}</h3>
              <p className="industry-sub">{ind.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
