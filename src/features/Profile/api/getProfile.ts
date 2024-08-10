import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { GetProfile } from '../model/profile.model';

export const getProfile = async () => {
  const result: AxiosResponse<GetProfile> =
    await httpClient.get('/users/profile');

  return result.data;
};
