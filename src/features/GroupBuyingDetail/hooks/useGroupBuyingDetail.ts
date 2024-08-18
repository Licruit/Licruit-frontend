import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getGroupBuyingDetail } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

export const useGroupBuyingDetail = () => {
  const { id } = useParams();

  const { data } = useQuery<GroupBuyingDetail>({
    queryKey: ['groupBuyingDetail', id],
    queryFn: () => getGroupBuyingDetail(Number(id!)),
    enabled: id !== undefined,
  });

  return { groupBuyingDetail: data };
};
