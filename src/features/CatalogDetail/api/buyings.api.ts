import { httpClient } from '@/api/http';

export const getCurrentBuyings = async (liquorId: number) => {
  const response = await httpClient.get(`/liquors/${liquorId}/buyings`);
  return response.data;
};
