import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { registerGroupBuying } from '../api/groupBuying.api';

interface BuyingForm {
  quantity: number;
}

export const useRegister = () => {
  const { id } = useParams();

  const methods = useForm<BuyingForm>({
    mode: 'onChange',
    defaultValues: {
      quantity: 1,
    },
  });

  const { mutate: handleRegister } = useMutation({
    mutationFn: ({ quantity }: BuyingForm) =>
      registerGroupBuying(Number(id), quantity),
    onError: () => {
      window.alert('오류가 발생했습니다. 다시 시도해주세요.'); // toast로 변경 예정
    },
  });

  return { methods, handleRegister };
};
