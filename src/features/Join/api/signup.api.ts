import { httpClient } from '@/api/http';
import axios from 'axios';
import { DropdownItem } from '@/components/Input/Dropdown';

import { BUSINESS_URL } from '@/constants/url';
import { SignupFormType } from '../types/signup';
import { BUSINESS_TYPE } from '../constants/business';

export const signup = async (userData: Omit<SignupFormType, 'isVerified'>) => {
  await httpClient.post('/users/register', userData);
};

export const getKSIC = async (): Promise<DropdownItem[]> => {
  const response = await httpClient.get('/sectors');
  return response.data;
};

export const verificationBusiness = async (companyNumber: string) => {
  const data = { b_no: [companyNumber] };
  const response = await axios.post(BUSINESS_URL, data);
  console.log(response.data);
  if (response.data.data[0].b_stt !== BUSINESS_TYPE) {
    throw new Error();
  }
};

export const duplicateBusiness = async (companyNumber: string) => {
  try {
    await httpClient.post('/users/company-number/check', {
      companyNumber,
    });
    return false;
  } catch {
    return true;
  }
};
