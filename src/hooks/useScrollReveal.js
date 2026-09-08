import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger entrance animations when elements enter the viewport
 * @param {Object} options
 * @param {number} options.threshold - Intersection threshold (default: 0.15)
 * @param {string} options.rootMargin - Intersection rootMargin (default: '0px 0px -50px 0px')
 * @param {boolean} options.triggerOnce - Whether to animate only once (default: true)
 * @returns {React.MutableRefObject} ref - Attach to a container or element
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -50px 0px',
  triggerOnce = true,
} = {}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('is-revealed');
          }
        });
      },
      {
        root: null,
        threshold,
        rootMargin,
      }
    );

    // Observe the main target ref element
    observer.observe(target);

    // Also observe any child elements with data-reveal or .reveal-child
    const childElements = target.querySelectorAll('.reveal-child, [data-reveal]');
    childElements.forEach((child) => observer.observe(child));

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
}

export default useScrollReveal;
