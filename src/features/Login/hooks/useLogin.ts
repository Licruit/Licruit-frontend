import { useState } from 'react';
import { toast } from 'react-toastify';
import PATH from '@/constants/path';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { saveTokens } from '@/utils/storage';
import useLoginStore from '@/store/loginStore';
import { LoginForm } from '../types/login';
import { login } from '../api/login.api';

export const useLogin = () => {
  const navigate = useNavigate();
  const [isAutoLogin, setIsAutoLogin] = useState(false);
  const setIsLoggedIn = useLoginStore((state) => state.setIsLoggedIn);

  const { mutate: handleLogin } = useMutation({
    mutationFn: (loginData: LoginForm) => login(loginData),
    onError: (err) => {
      console.log(err);
      if (err instanceof AxiosError && err.response?.status === 401) {
        toast.error(
          '사업자 등록번호 또는 비밀번호가 잘못되었습니다. 다시 한 번 입력해주세요'
        );
      } else {
        throw err;
      }
    },
    onSuccess: (result) => {
      const { accessToken, refreshToken, isWholesaler } = result.data;
      saveTokens(isAutoLogin, accessToken, refreshToken, isWholesaler);
      setIsLoggedIn(true);
      navigate(PATH.main);
    },
  });

  return { handleLogin, isAutoLogin, setIsAutoLogin };
};
