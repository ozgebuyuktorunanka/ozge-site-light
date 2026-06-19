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
              {job.summary && <p className="job-summary">{job.summary}</p>}
              <ul className="job-bullets">
                {job.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
              {job.groups?.map((group, g) => (
                <div className="job-group" key={g}>
                  <p className="job-group-label">{group.label}</p>
                  <ul className="job-bullets job-bullets-alt">
                    {group.items.map((item, k) => (
                      <li key={k}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
              {job.tags && job.tags.length > 0 && (
                <ul className="job-tags">
                  {job.tags.map((tag) => (
                    <li className="job-tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
