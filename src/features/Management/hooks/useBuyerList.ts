import { useSearchParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getBuyerList } from '../api/buyers.api';
import { GetBuyerListRes } from '../models/buyer.model';

export const useBuyerList = (buyingId: number) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const filter = searchParams.get('filter') === 'cancel' ? 'cancel' : undefined;

  const { data } = useSuspenseQuery<GetBuyerListRes>({
    queryKey: ['buyerList', { buyingId, page, filter }],
    queryFn: () => getBuyerList({ buyingId, page, filter }),
  });

  const isEmpty = data.orderList.length === 0;

  return { buyers: data?.orderList, pagination: data?.pagination, isEmpty };
};
