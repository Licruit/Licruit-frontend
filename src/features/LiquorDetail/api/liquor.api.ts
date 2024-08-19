import { httpClient } from '@/api/http';

export const getLiquorDetail = async (liquorId: number) => {
  const result = await httpClient.get(`/liquors/${liquorId}`);
  return result.data;
};
