import { useState, useEffect } from 'react';

type ScrollDirection = 'down' | 'up';

export const useScrollThrottled = (
  callback: (direction: ScrollDirection, scrollY: number) => void,
  delay: number = 100
) => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isThrottled, setIsThrottled] = useState(false);

  const handleScroll = () => {
    if (isThrottled) return;

    const { scrollY } = window;
    const direction = scrollY > lastScrollY ? 'down' : 'up';

    callback(direction, scrollY);
    setLastScrollY(scrollY);

    setIsThrottled(true);
    setTimeout(() => {
      setIsThrottled(false);
    }, delay);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY, isThrottled]);

  return lastScrollY;
};
