import { httpClient } from '@/api/http';
import axios from 'axios';
import { BUSINESS_URL } from '@/constants/url';
import { KSIC, Signup } from '../types/signup';

export const signup = async (userData: Signup) => {
  await httpClient.post('/users/register', userData);
};

export const getKSIC = async (): Promise<KSIC[]> => {
  const response = await httpClient.get('/sectors');
  return response.data;
};

export const VerificationBusiness = async (businessNumber: string) => {
  const data = { b_no: [businessNumber] };
  const response = await axios.post(BUSINESS_URL, data);
  return response.data;
};
