import { httpClient } from '@/api/http';
import axios from 'axios';
import { BUSINESS_URL } from '@/constants/url';
import { KSIC, SignupFormType } from '../types/signup';

export const signup = async (userData: Omit<SignupFormType, 'isVerified'>) => {
  await httpClient.post('/users/register', userData);
};

export const getKSIC = async (): Promise<KSIC[]> => {
  const response = await httpClient.get('/sectors');
  return response.data;
};

export const verificationBusiness = async (companyNumber: string) => {
  const data = { b_no: [companyNumber] };
  const response = await axios.post(BUSINESS_URL, data);

  if (response.data.data[0].b_stt !== '계속사업자') {
    throw new Error();
  }
};
