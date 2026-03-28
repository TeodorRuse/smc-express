import { useState, useEffect, useRef } from 'react';

/**
 * Tracks whether a DOM element is visible in the viewport.
 * Once the element scrolls into view, `inView` becomes true and stays true
 * (one-shot — used to trigger entrance animations).
 *
 * @param threshold - Fraction of the element that must be visible (0–1).
 * @returns [ref, inView] — attach `ref` to the element, read `inView` for visibility.
 */
export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
}
