import type { Translations } from '../../translations';

/** Left side of Contact — company info, description, and contact details. */
export function ContactInfo({ t, inView }: { t: Translations; inView: boolean }) {
  return (
    <div className={`contact__info-panel ${inView ? 'ai' : ''}`}>
      <span className="tag">{t.contact.tag}</span>
      <h2 className="sh__title">
        {t.contact.title.split('\n').map((l, i) => (
          <span key={i}>{l}{i < t.contact.title.split('\n').length - 1 && <br />}</span>
        ))}
      </h2>
      <p className="body-text">{t.contact.body}</p>

      <div className="contact__details">
        <div className="contact__detail">
          <span className="contact__detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
          </span>
          <span className="contact__detail-text">{t.contact.phone}</span>
        </div>

        <div className="contact__detail">
          <span className="contact__detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
          </span>
          <span className="contact__detail-text">{t.contact.email}</span>
        </div>

        <div className="contact__detail">
          <span className="contact__detail-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </span>
          <span className="contact__detail-text">{t.contact.address}</span>
        </div>
      </div>
    </div>
  );
}
