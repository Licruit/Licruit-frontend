import { httpClient } from '@/api/http';

export const getProfile = async (id: string, type: string) => {
  const result = await httpClient.get(`/profile/${id}?type=${type}`);
  return result.data;
};
