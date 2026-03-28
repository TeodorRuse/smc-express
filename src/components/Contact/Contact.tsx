import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Contact section with company info and a quote request form. */
export function Contact({ t }: { t: Translations }) {
  const [contactRef, contactInView] = useInView(0.08);

  return (
    <section className="section contact" id="contact" ref={contactRef as React.RefObject<HTMLElement>}>
      <div className="container contact__inner">
        <div className={`contact__copy ${contactInView ? 'ai' : ''}`}>
          <span className="tag">{t.contact.tag}</span>
          <h2 className="sh__title">
            {t.contact.title.split('\n').map((l, i) => (
              <span key={i}>{l}{i < t.contact.title.split('\n').length - 1 && <br />}</span>
            ))}
          </h2>
          <p className="body-text">{t.contact.body}</p>
          <div className="contact__info">
            <div><span>📞</span><a href={`tel:${t.contact.phone}`}>{t.contact.phone}</a></div>
            <div><span>✉️</span><a href={`mailto:${t.contact.email}`}>{t.contact.email}</a></div>
            <div><span>📍</span><span>{t.contact.address}</span></div>
          </div>
        </div>

        <div className={`contact__form ${contactInView ? 'ai ai--delay' : ''}`}>
          <div className="form-row-2">
            <div className="fg">
              <label>{t.contact.form.name}</label>
              <input type="text" placeholder={t.contact.form.namePh} />
            </div>
            <div className="fg">
              <label>{t.contact.form.company}</label>
              <input type="text" placeholder={t.contact.form.companyPh} />
            </div>
          </div>
          <div className="fg">
            <label>{t.contact.form.emailLabel}</label>
            <input type="email" placeholder={t.contact.form.emailPh} />
          </div>
          <div className="form-row-2">
            <div className="fg">
              <label>{t.contact.form.origin}</label>
              <input type="text" placeholder={t.contact.form.originPh} />
            </div>
            <div className="fg">
              <label>{t.contact.form.destination}</label>
              <input type="text" placeholder={t.contact.form.destPh} />
            </div>
          </div>
          <div className="fg">
            <label>{t.contact.form.cargo}</label>
            <textarea placeholder={t.contact.form.cargoPh} rows={4} />
          </div>
          <button className="btn btn--primary btn--full">{t.contact.form.submit}</button>
        </div>
      </div>
    </section>
  );
}
