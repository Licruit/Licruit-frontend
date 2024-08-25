import { httpClient } from '@/api/http';

export const getRegion = async () => {
  const response = await httpClient.get('/regions');

  return response.data;
};
