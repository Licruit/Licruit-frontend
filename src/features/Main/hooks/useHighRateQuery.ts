import { useQuery } from '@tanstack/react-query';
import getHighRate from '../api/getHighRate';

const useHighRateQuery = () => {
  const { data } = useQuery({
    queryKey: ['high-rate'],
    queryFn: getHighRate,
  });

  return { data };
};

export default useHighRateQuery;
