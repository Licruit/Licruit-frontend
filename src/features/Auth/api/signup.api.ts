import { httpClient } from '@/api/http';
import { KSIC, Signup } from '../types/signup';

export const signup = async (userData: Signup) => {
  try {
    await httpClient.post('/users/register', userData);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const getKSIC = async (): Promise<KSIC[]> => {
  try {
    const response = await httpClient.get('/sectors');
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
