import { useQuery } from '@tanstack/react-query';
import getGroupBuyStatus from '../api/getGroupBuyStatus';

const useGroupBuyStatusQuery = () => {
  const { data } = useQuery({
    queryKey: ['group-buy-status'],
    queryFn: getGroupBuyStatus,
  });

  return { data };
};

export default useGroupBuyStatusQuery;
