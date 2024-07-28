import { httpClient } from '@/api/http';
import { AxiosError } from 'axios';
import { LoginForm } from '../types/login';

export const login = async (loginData: LoginForm) => {
  try {
    await httpClient.post('/users/login', loginData);
    return true;
  } catch (err) {
    if (err instanceof AxiosError) {
      const statusCode = err.response?.status;

      if (statusCode === 401) {
        return false;
      }
    }
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};
