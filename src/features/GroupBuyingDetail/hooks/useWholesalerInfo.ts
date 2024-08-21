import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { WholesalerInfo } from '../models/wholesalerInfo.model';
import { getWholesalerInfo } from '../api/wholesalerInfo.api';

export const useWholesalerInfo = () => {
  const { id } = useParams();

  const { data } = useQuery<WholesalerInfo>({
    queryKey: ['wholesalerInfo', id],
    queryFn: () => getWholesalerInfo(Number(id!)),
    enabled: id !== undefined,
  });

  return { wholesalerInfo: data };
};
