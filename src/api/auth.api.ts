import { baseInstance } from './instance';

export const requestCode = async (contact: string) => {
  try {
    const result = await baseInstance.post('/users/auth/otp', { contact });
    return result;
  } catch (err) {
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};

export const verifyCode = async (contact: string, code: number) => {
  try {
    await baseInstance.post('/users/auth/otp/validation', {
      contact,
      otp: +code,
    });
    return true;
  } catch (err) {
    return false;
  }
};
