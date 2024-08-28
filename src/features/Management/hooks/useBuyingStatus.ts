import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PATH from '@/constants/path';
import { deleteGroupBuying } from '../api/buying.api';
import { confirmAllBuyer } from '../api/buyers.api';

export const useBuyingStatus = (buyingId: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: handleDeleteBuying } = useMutation({
    mutationFn: () => deleteGroupBuying(buyingId),
    onSuccess: () => {
      navigate(PATH.management);
      toast.info('공동구매가 취소되었습니다.');
    },
  });

  const { mutate: handleConfirmAll } = useMutation({
    mutationFn: () => confirmAllBuyer(buyingId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['buyerList'],
        exact: false,
      });
    },
  });

  return { handleDeleteBuying, handleConfirmAll };
};
