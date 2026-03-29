import type { Translations } from '../../translations';

/** Right side of Contact — application form for people who want to work with us. */
export function ContactForm({ t, inView }: { t: Translations; inView: boolean }) {
  return (
    <div className={`contact__form ${inView ? 'ai ai--delay' : ''}`}>
      <div className="fg">
        <label>{t.contact.form.name}</label>
        <input type="text" placeholder={t.contact.form.namePh} />
      </div>

      <div className="form-row-2">
        <div className="fg">
          <label>{t.contact.form.phoneLabel}</label>
          <input type="tel" placeholder={t.contact.form.phonePh} />
        </div>
        <div className="fg">
          <label>{t.contact.form.emailLabel}</label>
          <input type="email" placeholder={t.contact.form.emailPh} />
        </div>
      </div>

      <div className="form-row-2">
        <div className="fg">
          <label>{t.contact.form.position}</label>
          <input type="text" placeholder={t.contact.form.positionPh} />
        </div>
        <div className="fg">
          <label>{t.contact.form.city}</label>
          <input type="text" placeholder={t.contact.form.cityPh} />
        </div>
      </div>

      <div className="fg">
        <label>{t.contact.form.message}</label>
        <textarea placeholder={t.contact.form.messagePh} rows={5} />
      </div>

      <button className="btn btn--primary btn--full">{t.contact.form.submit}</button>
    </div>
  );
}
