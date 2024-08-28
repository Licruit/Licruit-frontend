import { useMutation, useQueryClient } from '@tanstack/react-query';
import useLoginStore from '@/store/loginStore';
import { useBlackList } from '@/hooks/useCheckUser';
import { LiquorDetailType } from '@/features/LiquorDetail';
import { toast } from 'react-toastify';
import { register } from '../api/register.api';

interface Props {
  liquorId: number;
  liked: boolean;
}

export const useRegister = (id: number) => {
  const { isLoggedIn } = useLoginStore();
  const queryClient = useQueryClient();
  const { isBlackList } = useBlackList();

  const handleRegister = (liked: boolean) => {
    if (isBlackList) {
      toast.warn('블랙리스트 회원은 서비스 이용이 제한됩니다.');
    } else if (isLoggedIn) {
      mutate({ liquorId: Number(id)!, liked });
    } else {
      toast.info('로그인 후 이용 가능한 서비스입니다.');
    }
  };

  const { mutate } = useMutation({
    mutationFn: ({ liquorId, liked }: Props) => register({ liquorId, liked }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['liquorDetail', id] });

      const prevData = queryClient.getQueryData<LiquorDetailType>([
        'liquorDetail',
        id,
      ]);

      if (!prevData) {
        return;
      }

      queryClient.setQueryData(['liquorDetail', id], {
        ...prevData,
        liked: !prevData.liked,
        likes: prevData.liked ? prevData.likes - 1 : prevData.likes + 1,
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(['liquorDetail', id], context?.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['liquorDetail', id] });
    },
  });

  return { handleRegister };
};
