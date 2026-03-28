import { useState, useEffect } from 'react';
import { useInView } from '../../hooks/useInView';

/**
 * Animated number counter that increments from 0 to the target value
 * when the element scrolls into view.
 *
 * Accepts a raw string like "12M+" and splits it into:
 *   - numericTarget: 12 (the number to animate towards)
 *   - suffix: "M+"   (appended after the animated number)
 */
export function CountUp({ raw }: { raw: string }) {
  const numericTarget = parseFloat(raw.replace(/[^0-9.]/g, ''));
  const suffix = raw.replace(/[0-9.]/g, '');
  const [currentValue, setCurrentValue] = useState(0);
  const [ref, inView] = useInView(0.5);

  useEffect(() => {
    if (!inView) return;

    const animationDuration = 1600; // ms
    const frameInterval = 16;       // ~60fps
    const incrementPerFrame = numericTarget / (animationDuration / frameInterval);
    let progress = 0;

    const timer = setInterval(() => {
      progress += incrementPerFrame;
      if (progress >= numericTarget) {
        setCurrentValue(numericTarget);
        clearInterval(timer);
      } else {
        setCurrentValue(progress);
      }
    }, frameInterval);

    return () => clearInterval(timer);
  }, [inView, numericTarget]);

  const displayValue = Number.isInteger(numericTarget)
    ? Math.round(currentValue).toLocaleString()
    : currentValue.toFixed(1);

  return <span ref={ref as React.RefObject<HTMLSpanElement>}>{displayValue}{suffix}</span>;
}
