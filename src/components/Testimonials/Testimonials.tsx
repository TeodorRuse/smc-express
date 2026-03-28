import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';
import type { Translations } from '../../translations';

/** Auto-rotating testimonial carousel with dot navigation. */
export function Testimonials({ t }: { t: Translations }) {
  const [testimonialsRef, testimonialsInView] = useInView(0.08);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  /* Auto-rotate to the next testimonial every 5 seconds */
  useEffect(() => {
    const id = setInterval(() => setActiveTestimonialIndex(i => (i + 1) % t.testimonials.items.length), 5000);
    return () => clearInterval(id);
  }, [t.testimonials.items.length]);

  return (
    <section className="section testimonials" id="testimonials" ref={testimonialsRef as React.RefObject<HTMLElement>}>
      <div className="container">
        <header className={`sh ${testimonialsInView ? 'ai' : ''}`}>
          <span className="tag">{t.testimonials.tag}</span>
          <h2 className="sh__title">{t.testimonials.title}</h2>
        </header>

        <div className={`t-carousel ${testimonialsInView ? 'ai' : ''}`}>
          {t.testimonials.items.map((item, i) => (
            <article key={i} className={`t-card ${i === activeTestimonialIndex ? 't-card--active' : ''}`}>
              <p className="t-card__quote">"{item.quote}"</p>
              <div className="t-card__author">
                {/* TODO: Add client photos at public/images/testimonial-0.jpg through testimonial-2.jpg */}
                <img className="t-card__avatar" src={`/images/testimonial-${i}.jpg`} alt={item.author} />
                <div>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="t-dots">
          {t.testimonials.items.map((_, i) => (
            <button
              key={i}
              className={`t-dot ${i === activeTestimonialIndex ? 't-dot--active' : ''}`}
              onClick={() => setActiveTestimonialIndex(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
