import { useInView } from '../../hooks/useInView';
import { ContactInfo } from './ContactInfo';
import { ContactForm } from './ContactForm';
import type { Translations } from '../../translations';

/** Contact section — info panel on the left, form on the right. */
export function Contact({ t }: { t: Translations }) {
  const [contactRef, contactInView] = useInView(0.08);

  return (
    <section className="section contact" id="contact" ref={contactRef as React.RefObject<HTMLElement>}>
      <div className="container contact__inner">
        <ContactInfo t={t} inView={contactInView} />
        <ContactForm t={t} inView={contactInView} />
      </div>
    </section>
  );
}
