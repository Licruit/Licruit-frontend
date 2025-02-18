import { useMutation, useQueryClient } from '@tanstack/react-query';
import useLoginStore from '@/store/loginStore';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useBlackList } from '@/hooks/useCheckUser';
import { registerGroupBuying } from '../api/groupBuying.api';
import { GroupBuyingDetail } from '../models/groupBuyingDetail.model';

interface BuyingForm {
  quantity: number;
}

export const useRegister = (buyingId: number) => {
  const queryClient = useQueryClient();
  const { isBlackList } = useBlackList();
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);

  const methods = useForm<BuyingForm>({
    mode: 'onChange',
    defaultValues: {
      quantity: 1,
    },
  });

  const handleRegister = ({ quantity }: BuyingForm) => {
    if (isBlackList) {
      toast.warn('블랙리스트 회원은 서비스 이용이 제한됩니다.');
    } else if (isLoggedIn) {
      mutate({ quantity });
    } else {
      toast.info('로그인 후 이용 가능한 서비스입니다.');
    }
  };

  const { mutate } = useMutation({
    mutationFn: ({ quantity }: BuyingForm) =>
      registerGroupBuying(buyingId, quantity),
    onMutate: async ({ quantity }: BuyingForm) => {
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
        orderCount: prevData.orderCount + quantity,
        isParticipated: !prevData.isParticipated,
      });

      return { prevData };
    },
    onError: (err, _, context) => {
      if (err instanceof AxiosError && err.response?.status === 400) {
        toast.error(
          '신청하신 수량이 현재 가능 수량을 초과했습니다.\n다시 시도해주세요.'
        );
        queryClient.invalidateQueries({
          queryKey: ['groupBuyingDetail', buyingId],
        });
      } else {
        toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
        queryClient.setQueryData(
          ['groupBuyingDetail', buyingId],
          context?.prevData
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['groupBuyingDetail', buyingId],
      });
    },
  });

  return { methods, handleRegister };
};
