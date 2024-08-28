import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { confirmBuyerStatus } from '../api/buyers.api';

export const useBuyerStatus = () => {
  const { buyingId } = useParams();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const filter = searchParams.get('filter') || undefined;

  const { mutate: handleConfirm } = useMutation({
    mutationFn: (orderId: number) =>
      confirmBuyerStatus(Number(buyingId), orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });
    },
  });

  return { handleConfirm };
};
