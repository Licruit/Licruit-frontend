import { useQuery } from '@tanstack/react-query';
import { getShopCurrentStatus } from '../api/getGroupBuyStatus';

const useShopStatusQuery = () => {
  const { data } = useQuery({
    queryKey: ['shop-status'],
    queryFn: getShopCurrentStatus,
  });

  return { data };
};

export default useShopStatusQuery;
