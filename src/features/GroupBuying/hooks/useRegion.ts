import { useSuspenseQuery } from '@tanstack/react-query';
import { getRegion } from '../api/region.api';

export const useRegion = () => {
  const { data: regionData } = useSuspenseQuery({
    queryKey: ['region'],
    queryFn: getRegion,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });
  return { regionData };
};
