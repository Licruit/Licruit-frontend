import { httpClient } from '@/api/http';

export const requestResetPassword = async (
  companyNumber: string,
  contact: string
) => {
  try {
    await httpClient.post('/users/password-reset', {
      companyNumber,
      contact,
    });
  } catch (err) {
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};

export const resetPassword = async (password: string) => {
  try {
    await httpClient.put('/users/password-reset', {
      password,
    });
  } catch (err) {
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};
