import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBuyerList } from '../api/buyers.api';
import { GetBuyerListRes } from '../models/buyer.model';

export const useBuyerList = (buyingId: number) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const filter = searchParams.get('filter') || undefined;

  const { data } = useQuery<GetBuyerListRes>({
    queryKey: ['buyerList', { buyingId, page, filter }],
    queryFn: () => getBuyerList({ buyingId, page, filter }),
  });

  return { buyers: data?.orderList, pagination: data?.pagination };
};
