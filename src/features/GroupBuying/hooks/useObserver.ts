import { InfiniteQueryObserverBaseResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

interface IntersectionObserverProps {
  threshold?: number;
  hasNextPage: boolean | undefined;
  fetchNextPage: () => Promise<InfiniteQueryObserverBaseResult>;
}

export const useIntersectionObs = ({
  threshold = 0.5,
  hasNextPage,
  fetchNextPage,
}: IntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });
  };

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(handleObserver, { threshold });

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [threshold, target]);
  return { setTarget };
};
