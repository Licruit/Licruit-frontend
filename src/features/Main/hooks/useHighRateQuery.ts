import { useQuery } from '@tanstack/react-query';
import getHighRate from '../api/getHighRate';

const useHighRateQuery = () => {
  const { data: highRateLiquors } = useQuery({
    queryKey: ['high-rate'],
    queryFn: getHighRate,
    select: (data) => data.slice(0, 5),
  });

  return { highRateLiquors };
};

export default useHighRateQuery;
