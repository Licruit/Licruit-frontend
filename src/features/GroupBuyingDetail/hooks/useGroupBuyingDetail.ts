import { useQuery } from '@tanstack/react-query';
import { getGroupBuyingDetail } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

export const useGroupBuyingDetail = (buyingId: number) => {
  const { data } = useQuery<GroupBuyingDetail>({
    queryKey: ['groupBuyingDetail', buyingId],
    queryFn: () => getGroupBuyingDetail(buyingId),
    enabled: buyingId !== undefined,
  });

  return { groupBuyingDetail: data, liquorId: data?.liquorId };
};
