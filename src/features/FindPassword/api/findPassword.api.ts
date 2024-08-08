import { httpClient } from '@/api/http';

export const requestResetPassword = async (req: {
  companyNumber: string;
  contact: string;
}) => {
  await httpClient.post('/users/password-reset', req);
};

export const resetPassword = async (req: {
  companyNumber: string;
  password: string;
}) => {
  await httpClient.put('/users/password-reset', req);
};
