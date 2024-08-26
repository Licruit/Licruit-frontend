import { useQuery } from '@tanstack/react-query';
import getCompanyGroupBuyList from '../api/getGroupBuyList';

const useGroupBuyListQuery = (isCompany: boolean) => {
  const { data } = useQuery({
    queryKey: ['group-buy-list'],
    queryFn: getCompanyGroupBuyList,
    enabled: !isCompany,
  });

  return { groupBuyLists: data };
};

export default useGroupBuyListQuery;
