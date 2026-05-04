import { useCallback } from 'react';

/**
 * Hook to enable smooth scrolling to sections
 * Returns a function to scroll to a target element by ID
 */
export function useSmoothScroll() {
  const scrollToSection = useCallback((targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return scrollToSection;
}
