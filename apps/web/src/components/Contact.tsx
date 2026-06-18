import { useState } from 'react';
import { useLang } from '../i18n/LanguageContext';
import { sendContact } from '../lib/api';

type Status =
  | { type: 'idle' }
  | { type: 'sending' }
  | { type: 'success'; message: string }
  | { type: 'error'; message: string };

const EMPTY = { name: '', email: '', message: '', company: '' };

export function Contact() {
  const { t, locale } = useLang();
  const c = t.ui.contact;
  const p = t.profile;

  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState<Status>({ type: 'idle' });

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.type === 'sending') return;
    setStatus({ type: 'sending' });
    try {
      const res = await sendContact({ ...form, locale });
      setStatus({ type: 'success', message: res.message || c.success });
      setForm(EMPTY);
    } catch {
      setStatus({ type: 'error', message: `${c.errorPrefix} ${p.email}` });
    }
  };

  return (
    <section className="section section-contact" id="contact">
      <div className="wrap">
        <div className="reveal">
          <span className="sec-eyebrow">{c.eyebrow}</span>
          <h2 className="contact-title">
            {c.title} <span className="accent">{c.titleAccent}</span>
          </h2>
          <p className="contact-sub">{c.sub}</p>
        </div>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={onSubmit} noValidate>
            <label className="field">
              <span>{c.name}</span>
              <input
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder={c.namePlaceholder}
                required
                minLength={2}
                autoComplete="name"
              />
            </label>
            <label className="field">
              <span>{c.email}</span>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder={c.emailPlaceholder}
                required
                autoComplete="email"
              />
            </label>
            <label className="field">
              <span>{c.message}</span>
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder={c.messagePlaceholder}
                rows={4}
                required
                minLength={10}
              />
            </label>

            {/* Honeypot — hidden from people, catches bots. */}
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              className="hp"
              aria-hidden="true"
              value={form.company}
              onChange={update('company')}
            />

            <button type="submit" className="btn" disabled={status.type === 'sending'}>
              {status.type === 'sending' ? c.sending : c.send}
            </button>

            {status.type === 'success' && (
              <p className="form-msg ok" role="status">
                {status.message}
              </p>
            )}
            {status.type === 'error' && (
              <p className="form-msg err" role="alert">
                {status.message}
              </p>
            )}
          </form>

          <div className="contact-links reveal">
            <a className="link-card primary" href={`mailto:${p.email}`}>
              <span className="link-label">{c.emailLabel}</span>
              <span className="link-value">{p.email}</span>
            </a>
            <a
              className="link-card"
              href={p.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="link-label">{c.linkedinLabel}</span>
              <span className="link-value">/in/ozgebuyuktorun1</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
