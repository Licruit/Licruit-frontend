import { InfiniteQueryObserverBaseResult } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';

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

  const handleObserver = useCallback<IntersectionObserverCallback>(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    },
    [hasNextPage, fetchNextPage] // handleObserver가 의존하는 값들
  );

  useEffect(() => {
    if (!target) return;
    const observer = new IntersectionObserver(handleObserver, { threshold });

    observer.observe(target);
    return () => observer.unobserve(target);
  }, [handleObserver, threshold, target]);
  return { setTarget };
};
