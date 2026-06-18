import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Skills() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section" id="skills">
      <div className="wrap">
        <SectionHead eyebrow={s.skillsEyebrow} title={s.skillsTitle} />
        <div className="skills-grid">
          {t.skillGroups.map((g) => (
            <div className="skill-group reveal" key={g.heading}>
              <h3 className="skill-heading">{g.heading}</h3>
              <ul className="chips">
                {g.items.map((item) => (
                  <li className="chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
