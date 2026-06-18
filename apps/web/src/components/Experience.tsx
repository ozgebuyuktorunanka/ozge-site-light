import { useLang } from '../i18n/LanguageContext';
import { SectionHead } from './SectionHead';

export function Experience() {
  const { t } = useLang();
  const s = t.ui.sections;

  return (
    <section className="section section-tint" id="work">
      <div className="wrap">
        <SectionHead eyebrow={s.workEyebrow} title={s.workTitle} />
        <div className="timeline">
          {t.experience.map((job, i) => (
            <article className="job reveal" key={i}>
              <span className="job-node" aria-hidden="true" />
              <div className="job-period">
                {job.period}
                {job.current && <span className="job-current">{t.ui.contact.current}</span>}
              </div>
              <h3 className="job-role">{job.role}</h3>
              <p className="job-org">{job.org}</p>
              <ul className="job-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
