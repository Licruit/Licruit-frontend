import { useMutation, useQueryClient } from '@tanstack/react-query';
import useSessionStore from '@/store/sessionStore';
import { LiquorDetailType } from '@/features/LiquorDetail';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../api/register.api';

interface Props {
  liquorId: number;
  liked: boolean;
}

export const useRegister = () => {
  const { id } = useParams();
  const { isLoggedIn } = useSessionStore();
  const queryClient = useQueryClient();

  const handleRegister = (liked: boolean) => {
    if (isLoggedIn) {
      mutate({ liquorId: +id!, liked });
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
