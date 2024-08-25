import { useMutation, useQueryClient } from '@tanstack/react-query';
import putCancelOrder from '../api/putCancelOrder';

const useCancelOrderMutation = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (orderId: number) => putCancelOrder(orderId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['group-buy-list'] });
    },
  });

  const handleCancelOrder = (buyingId: number) => {
    mutate(buyingId);
  };

  return { handleCancelOrder };
};

export default useCancelOrderMutation;
