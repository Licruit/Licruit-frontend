import { httpClient } from '@/api/http';
import { toast } from 'react-toastify';

export const requestCode = async (contact: string) => {
  try {
    const result = await httpClient.post('/users/auth/otp', { contact });
    return result;
  } catch (err) {
    toast.error('오류가 발생했습니다. 다시 시도해주세요.');
  }
};

export const verifyCode = async (contact: string, code: number) => {
  try {
    await httpClient.post('/users/auth/otp/validation', {
      contact,
      otp: Number(code),
    });
    return true;
  } catch (err) {
    return false;
  }
};
