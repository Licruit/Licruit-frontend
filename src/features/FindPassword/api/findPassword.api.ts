import { httpClient } from '@/api/http';

export const requestResetPassword = async (
  companyNumber: string,
  contact: string
) => {
  await httpClient.post('/users/password-reset', {
    companyNumber,
    contact,
  });
};

export const resetPassword = async (password: string) => {
  await httpClient.put('/users/password-reset', {
    password,
  });
};
