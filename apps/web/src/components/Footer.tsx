import { useLang } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span>
          © {new Date().getFullYear()} {t.profile.name}
        </span>
        <span>{t.ui.footer}</span>
      </div>
    </footer>
  );
}
