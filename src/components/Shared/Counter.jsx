import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ target, duration = 1200, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const currentRef = containerRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Cubic ease-out curve
            const easeOut = 1 - Math.pow(1 - percentage, 3);
            const currentVal = Math.floor(easeOut * target);
            
            setCount(currentVal);

            if (progress < duration) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [target, duration]);

  const formatNumber = (val) => {
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <span ref={containerRef} className="counter-value">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

export default Counter;
