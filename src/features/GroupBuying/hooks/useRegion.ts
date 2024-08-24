import { useQuery } from '@tanstack/react-query';
import { getRegion } from '../api/region.api';

export const useRegion = () => {
  const { data: regionData } = useQuery({
    queryKey: ['region'],
    queryFn: getRegion,
  });
  return { regionData };
};
