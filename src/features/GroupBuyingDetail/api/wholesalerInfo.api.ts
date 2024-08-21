import { httpClient } from '@/api/http';

export const getWholesalerInfo = async (buyingId: number) => {
  const result = await httpClient.get(`/buyings/${buyingId}/wholesaler`);
  return result.data;
};
