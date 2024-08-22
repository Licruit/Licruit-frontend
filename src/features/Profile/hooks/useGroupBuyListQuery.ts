import { useQuery } from '@tanstack/react-query';
import getGroupBuyList from '../api/getGroupBuyList';

const useGroupBuyListQuery = () => {
  const { data } = useQuery({
    queryKey: ['group-buy-list'],
    queryFn: getGroupBuyList,
  });

  return { data };
};

export default useGroupBuyListQuery;
