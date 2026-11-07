import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    // Add a slight delay to ensure the DOM is fully rendered after route transitions
    const timer = setTimeout(() => {
      const observerOptions = {
        root: null,
        rootMargin: '0px 0px -8% 0px', // Trigger slightly before element reaches bottom
        threshold: 0.05,
      };

      const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, observerOptions);
      const revealElements = document.querySelectorAll('.reveal-on-scroll');

      revealElements.forEach((el) => {
        // Only observe if it doesn't already have the visible class
        if (!el.classList.contains('reveal-visible')) {
          observer.observe(el);
        }
      });

      return () => {
        revealElements.forEach((el) => observer.unobserve(el));
      };
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);
};
