import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Reset scroll to top on normal navigation actions (PUSH, REPLACE)
    // Preserve scroll position on browser back/forward actions (POP)
    if (navType !== 'POP') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Instant scroll ensures page starts at the top
      });
    }
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;
