import { httpClient } from '@/api/http';
import { SignOutReq } from '../model/signout.model';

export const signOut = async (data: SignOutReq) => {
  const result = await httpClient.delete('/users/withdrawal', { data });
  return result;
};
