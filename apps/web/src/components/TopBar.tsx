import { useLang } from '../i18n/LanguageContext';

export function TopBar() {
  const { t, locale, toggle } = useLang();
  const nav = t.ui.nav;

  return (
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a href="#top" className="brand">
          Özge<span className="brand-dot">.</span>
        </a>

        <nav className="nav" aria-label="Primary">
          <a href="#about">{nav.about}</a>
          <a href="#impact">{nav.impact}</a>
          <a href="#skills">{nav.skills}</a>
          <a href="#work">{nav.work}</a>
          <a href="#achievements">{nav.achievements}</a>
          <a href="#contact">{nav.contact}</a>
        </nav>

        <button
          type="button"
          className="lang-toggle"
          onClick={toggle}
          aria-label={`Switch language to ${t.ui.switchTo}`}
        >
          <span className={locale === 'tr' ? 'on' : ''}>TR</span>
          <span className="sep">/</span>
          <span className={locale === 'en' ? 'on' : ''}>EN</span>
        </button>
      </div>
    </header>
  );
}
