import { useMutation, useQueryClient } from '@tanstack/react-query';
import putCancelOrder from '../api/putCancelOrder';

const useCancelOrderMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: number) => putCancelOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['group-buy-list'] });
    },
  });
};

export default useCancelOrderMutation;
