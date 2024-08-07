import { authInstance } from '@/api/instance';
import { Profile } from '../model/profile.model';

export const putProfile = async (data: Profile) => {
  const result = await authInstance.put('/users/profile', data);
  return result;
};
