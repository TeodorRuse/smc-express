import { useState } from 'react';
import type { Translations } from '../../translations';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  company: string;
  message: string;
};

const EMPTY: FormData = { name: '', email: '', phone: '', subject: '', company: '', message: '' };

/** Right side of Contact — general contact form for all inquiries. */
export function ContactForm({ t, inView }: { t: Translations; inView: boolean }) {
  const [form, setForm] = useState<FormData>(EMPTY);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const set = (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }));

  const canSubmit = form.name && form.email && form.subject && form.message;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit || status !== 'idle') return;

    setStatus('sending');
    // TODO: integrate email sending here
    setTimeout(() => setStatus('sent'), 1200);
  };

  if (status === 'sent') {
    return (
      <div className={`contact__form contact__form--success ${inView ? 'ai ai--delay' : ''}`}>
        <div className="form-success">
          <svg className="form-success__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h3 className="form-success__title">{t.contact.form.successTitle}</h3>
          <p className="form-success__text">{t.contact.form.successText}</p>
          <button
            className="btn btn--ghost"
            type="button"
            onClick={() => { setForm(EMPTY); setStatus('idle'); }}
          >
            {t.contact.form.sendAnother}
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      className={`contact__form ${inView ? 'ai ai--delay' : ''}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="fg">
        <label>{t.contact.form.name}</label>
        <input type="text" placeholder={t.contact.form.namePh} value={form.name} onChange={set('name')} required />
      </div>

      <div className="form-row-2">
        <div className="fg">
          <label>{t.contact.form.emailLabel}</label>
          <input type="email" placeholder={t.contact.form.emailPh} value={form.email} onChange={set('email')} required />
        </div>
        <div className="fg">
          <label>{t.contact.form.phoneLabel}</label>
          <input type="tel" placeholder={t.contact.form.phonePh} value={form.phone} onChange={set('phone')} />
        </div>
      </div>

      <div className="form-row-2">
        <div className="fg">
          <label>{t.contact.form.subject}</label>
          <select value={form.subject} onChange={set('subject')} required>
            <option value="" disabled>{t.contact.form.subjectPh}</option>
            {t.contact.form.subjectOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div className="fg">
          <label>{t.contact.form.company}</label>
          <input type="text" placeholder={t.contact.form.companyPh} value={form.company} onChange={set('company')} />
        </div>
      </div>

      <div className="fg">
        <label>{t.contact.form.message}</label>
        <textarea placeholder={t.contact.form.messagePh} rows={5} value={form.message} onChange={set('message')} required />
      </div>

      <button
        className={`btn btn--primary btn--full btn--submit ${status === 'sending' ? 'btn--loading' : ''}`}
        type="submit"
        disabled={!canSubmit || status === 'sending'}
      >
        {status === 'sending' ? (
          <span className="btn__spinner" />
        ) : (
          <>
            <svg className="btn__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
            {t.contact.form.submit}
          </>
        )}
      </button>
    </form>
  );
}
