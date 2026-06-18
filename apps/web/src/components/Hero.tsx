import { useLang } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLang();
  const p = t.profile;

  return (
    <section className="hero" id="top">
      <div className="wrap hero-inner">
        <p className="hero-eyebrow">{p.role}</p>
        <h1 className="hero-name">{p.name}</h1>
        <p className="hero-line">{p.heroLine}</p>
        <p className="hero-sub">{p.heroSub}</p>
        <span className="badge">
          <span className="badge-dot" /> {p.availability}
        </span>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}
