import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { registerGroupBuying } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

interface BuyingForm {
  quantity: number;
}

export const useRegister = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const methods = useForm<BuyingForm>({
    mode: 'onChange',
    defaultValues: {
      quantity: 1,
    },
  });

  const { mutate: handleRegister } = useMutation({
    mutationFn: ({ quantity }: BuyingForm) =>
      registerGroupBuying(Number(id), quantity),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['groupBuyingDetail', id] });

      const prevData = queryClient.getQueryData<GroupBuyingDetail>([
        'groupBuyingDetail',
        id,
      ]);

      if (!prevData) {
        return;
      }

      queryClient.setQueryData(['groupBuyingDetail', id], {
        ...prevData,
        isParticipated: !prevData.isParticipated,
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(['groupBuyingDetail', id], context?.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['groupBuyingDetail', id] });
    },
  });

  return { methods, handleRegister };
};
