import { httpClient } from '@/api/http';

export const getGroupBuyingDetail = async (buyingId: number) => {
  const result = await httpClient.get(`/buyings/${buyingId}`);
  return result.data;
};
