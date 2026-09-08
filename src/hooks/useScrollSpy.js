import { useState, useEffect } from 'react';

/**
 * Custom hook to track the active section in viewport
 * @param {string[]} sectionIds - Array of section element IDs to observe
 * @param {string} rootMargin - IntersectionObserver root margin (default: '-20% 0px -60% 0px')
 * @returns {string} activeSection - The ID of currently active section
 */
export function useScrollSpy(sectionIds = [], rootMargin = '-20% 0px -60% 0px') {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    if (!sectionIds.length) return;

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin,
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, rootMargin]);

  return activeSection;
}

export default useScrollSpy;
