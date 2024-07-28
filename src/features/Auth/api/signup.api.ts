import { httpClient } from '@/api/http';
import { KSIC, Signup } from '../types/signup';

export const signup = async (userData: Signup) => {
  await httpClient.post('/users/register', userData);
};

export const getKSIC = async (): Promise<KSIC[]> => {
  const response = await httpClient.get('/sectors');
  return response.data;
};
