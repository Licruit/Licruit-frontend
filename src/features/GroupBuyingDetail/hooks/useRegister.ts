import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { registerGroupBuying } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

interface BuyingForm {
  quantity: number;
}

export const useRegister = (buyingId: number) => {
  const queryClient = useQueryClient();

  const methods = useForm<BuyingForm>({
    mode: 'onChange',
    defaultValues: {
      quantity: 1,
    },
  });

  const { mutate: handleRegister } = useMutation({
    mutationFn: ({ quantity }: BuyingForm) =>
      registerGroupBuying(buyingId, quantity),
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: ['groupBuyingDetail', buyingId],
      });

      const prevData = queryClient.getQueryData<GroupBuyingDetail>([
        'groupBuyingDetail',
        buyingId,
      ]);

      if (!prevData) {
        return;
      }

      queryClient.setQueryData(['groupBuyingDetail', buyingId], {
        ...prevData,
        isParticipated: !prevData.isParticipated,
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(
        ['groupBuyingDetail', buyingId],
        context?.prevData
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['groupBuyingDetail', buyingId],
      });
    },
  });

  return { methods, handleRegister };
};
