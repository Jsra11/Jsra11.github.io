import { useEffect, useState } from 'react';

export function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16); // ~60 FPS
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
}