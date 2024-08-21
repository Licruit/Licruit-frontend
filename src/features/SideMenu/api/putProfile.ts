import { httpClient } from '@/api/http';
import { EditProfile } from '../model/profile.model';

export const putProfile = async (data: EditProfile) => {
  const result = await httpClient.put('/users/profile', data);
  return result;
};

export const putProfileImage = async (image: FormData) => {
  const result = await httpClient.put('/users/profile/img', image);
  return result;
};
