import { useSuspenseQuery } from '@tanstack/react-query';
import { getGroupBuyingDetail } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

export const useGroupBuyingDetail = (buyingId: number) => {
  const { data } = useSuspenseQuery<GroupBuyingDetail>({
    queryKey: ['groupBuyingDetail', buyingId],
    queryFn: () => getGroupBuyingDetail(buyingId),
  });

  return { groupBuyingDetail: data, liquorId: data?.liquorId };
};
