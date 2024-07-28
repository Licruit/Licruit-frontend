import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSessionStore from '@/store/sessionStore';
import { LoginForm } from '../types/login';
import { login } from '../api/login.api';

export const useLogin = () => {
  const navigate = useNavigate();
  const setIsLoggedIn = useSessionStore((state) => state.setIsLoggedIn);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const handleLogin = async (value: LoginForm) => {
    login(value).then((res) => {
      if (res) {
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setIsFailed(true);
      }
    });
  };

  return { isFailed, handleLogin };
};
