import { useQuery } from '@tanstack/react-query';
import getGroupBuyList from '../api/getGroupBuyList';

const useGroupBuyListQuery = (isCompany: boolean) => {
  const { data } = useQuery({
    queryKey: ['group-buy-list'],
    queryFn: getGroupBuyList,
    enabled: !isCompany,
  });

  return { data };
};

export default useGroupBuyListQuery;
