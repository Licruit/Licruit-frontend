import { httpClient } from '@/api/http';
import { Profile } from '../model/profile.model';

export const putProfile = async (data: Profile) => {
  const result = await httpClient.put('/users/profile', data);
  return result;
};
