import axios from 'axios';
import { baseInstance } from '@/api/instance';
import { BUSINESS_URL } from '@/constants/url';
import { KSIC, SignupFormType } from '../types/signup';
import { BUSINESS_TYPE } from '../constants/business';

export const signup = async (userData: Omit<SignupFormType, 'isVerified'>) => {
  await baseInstance.post('/users/register', userData);
};

export const getKSIC = async (): Promise<KSIC[]> => {
  const response = await baseInstance.get('/sectors');
  return response.data;
};

export const verificationBusiness = async (companyNumber: string) => {
  const data = { b_no: [companyNumber] };
  const response = await axios.post(BUSINESS_URL, data);

  if (response.data.data[0].b_stt !== BUSINESS_TYPE) {
    throw new Error();
  }
};

export const duplicateBusiness = async (companyNumber: string) => {
  try {
    await baseInstance.post('/users/company-number/check', {
      companyNumber,
    });
    return false;
  } catch {
    return true;
  }
};
