import { useEffect, useState, useCallback, useRef } from 'react';
import { throttle } from 'lodash';

export const useScroll = () => {
  const [isHided, setIsHided] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const lastScrollYRef = useRef(lastScrollY);
  lastScrollYRef.current = lastScrollY;

  const handleScroll = useCallback(
    throttle(() => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollYRef.current) {
        setIsHided(true);
      } else {
        setIsHided(false);
      }
      setLastScrollY(currentScrollY);
    }, 200),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return { isHided };
};
