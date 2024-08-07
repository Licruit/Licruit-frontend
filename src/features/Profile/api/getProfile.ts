import { authInstance } from '@/api/instance';

export const getProfile = async (id: string, type: string) => {
  const result = await authInstance.get(`/profile/${id}?type=${type}`);
  return result.data;
};
