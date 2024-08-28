import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';

interface RegionRes {
  id: number;
  name: string;
}

export const getRegion = async () => {
  const response: AxiosResponse<RegionRes[]> = await httpClient.get('/regions');

  return response.data;
};
