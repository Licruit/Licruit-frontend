import { httpClient } from '@/api/http';

export const deleteGroupBuying = async (buyingId: number) => {
  const response = await httpClient.delete(`/buyings/wholesaler/${buyingId}`);
  return response;
};
