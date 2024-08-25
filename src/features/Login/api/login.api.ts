import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { LoginForm } from '../types/login';
import { LoginRes } from '../models/user.model';

export const login = async (loginData: LoginForm) => {
  const result: AxiosResponse<LoginRes> = await httpClient.post(
    '/users/login',
    loginData
  );
  return result;
};
