import { useMutation, useQueryClient } from '@tanstack/react-query';
import useSessionStore from '@/store/sessionStore';
import { useParams } from 'react-router-dom';
import { register } from '../api/register.api';
import { LiquorDetail } from '../model/liquor.model';

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
      window.alert('로그인 후 이용 가능한 서비스입니다.');
    }
  };

  const { mutate } = useMutation({
    mutationFn: ({ liquorId, liked }: Props) => register({ liquorId, liked }),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['liquorDetail', id] });

      const prevData = queryClient.getQueryData<LiquorDetail>([
        'liquorDetail',
        id,
      ]);

      queryClient.setQueryData(['liquorDetail', id], {
        ...prevData,
        liked: !prevData!.liked,
      });

      return { prevData };
    },
    onError: (err, variable, context) => {
      window.alert('오류가 발생했습니다. 다시 시도해주세요.');
      queryClient.setQueryData(['liquorDetail', id], context?.prevData);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['liquorDetail', id] });
    },
  });

  return { handleRegister };
};
