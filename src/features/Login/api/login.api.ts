import { httpClient } from '@/api/http';
import { toast } from 'react-toastify';
import { AxiosError, AxiosResponse } from 'axios';
import { LoginForm } from '../types/login';
import { LoginRes } from '../models/user.model';

export const login = async (loginData: LoginForm) => {
  try {
    const result: AxiosResponse<LoginRes> = await httpClient.post(
      '/users/login',
      loginData
    );
    return result;
  } catch (err) {
    if (err instanceof AxiosError) {
      const statusCode = err.response?.status;

      if (statusCode === 401) {
        return false;
      }
    }
    toast.error('오류가 발생했습니다. 다시 시도해주세요.');
  }
};
