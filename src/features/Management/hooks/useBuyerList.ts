import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getBuyerList } from '../api/buyers.api';

export const useBuyerList = (buyingId: number) => {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const filter =
    searchParams.get('filter') === 'canceled' ? 'cancel' : undefined;

  const { data } = useQuery({
    queryKey: ['buyerList', { buyingId, page, filter }],
    queryFn: () => getBuyerList({ buyingId, page, filter }),
  });

  return { buyers: data?.orderList, pagination: data?.pagination };
};
