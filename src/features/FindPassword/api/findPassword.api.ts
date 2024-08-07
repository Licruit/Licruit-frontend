import { baseInstance } from '@/api/instance';

export const requestResetPassword = async (
  companyNumber: string,
  contact: string
) => {
  await baseInstance.post('/users/password-reset', {
    companyNumber,
    contact,
  });
};

export const resetPassword = async (password: string) => {
  await baseInstance.put('/users/password-reset', {
    password,
  });
};
