import { useSuspenseQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getCurrentBuyings } from '../api/buyings.api';
import { Buying } from '../models/buying.model';

export const useCurrentBuyings = () => {
  const { id: liquorId } = useParams();

  const { data } = useSuspenseQuery<Buying[]>({
    queryKey: ['currentBuyings', liquorId],
    queryFn: () => getCurrentBuyings(Number(liquorId)),
  });

  return { buyings: data, totalBuyings: data?.length };
};
