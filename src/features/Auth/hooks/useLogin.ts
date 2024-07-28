import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../types/login';
import { login } from '../api/login.api';

export const useLogin = () => {
  const navigate = useNavigate();
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const handleLogin = async (value: LoginForm) => {
    login(value).then((res) => {
      if (res) {
        navigate('/');
      } else {
        setIsFailed(true);
      }
    });
  };

  return { isFailed, handleLogin };
};
