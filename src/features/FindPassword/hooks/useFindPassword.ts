import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import { useMutation } from '@tanstack/react-query';
import { requestResetPassword, resetPassword } from '../api/findPassword.api';
import { FindPasswordFormType } from '../types/findPassword';

export const useFindPassword = (
  currentStep: number,
  setStep: React.Dispatch<React.SetStateAction<number>>
) => {
  const navigate = useNavigate();

  const { mutate: requestReset } = useMutation({
    mutationFn: (data: { companyNumber: string; contact: string }) =>
      requestResetPassword(data),
    onSuccess: () => {
      setStep((prev) => prev + 1);
    },
    onError: () => {
      window.alert('오류가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const { mutate: resetPw } = useMutation({
    mutationFn: (data: { companyNumber: string; password: string }) =>
      resetPassword(data),
    onSuccess: () => {
      navigate(PATH.login);
    },
    onError: () => {
      window.alert('오류가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const handleSubmitForm = (data: FindPasswordFormType) => {
    if (currentStep === 1) {
      requestReset({
        companyNumber: data.companyNumber.toString(),
        contact: data.phone.toString(),
      });
    } else {
      resetPw({
        companyNumber: data.companyNumber.toString(),
        password: data.password,
      });
    }
  };

  return { handleSubmitForm };
};
