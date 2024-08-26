import { httpClient } from '@/api/http';
import { DropdownItem } from '@/components/Input/Dropdown';

import { SignupFormType } from '../types/signup';

export const signup = async (userData: Omit<SignupFormType, 'isVerified'>) => {
  await httpClient.post('/users/register', userData);
};

export const getKSIC = async (): Promise<DropdownItem[]> => {
  const response = await httpClient.get('/sectors');
  return response.data;
};

export const uploadCertificate = async (image: FormData) => {
  const response = await httpClient.post('/users/biz-check', image);
  return response.data;
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
