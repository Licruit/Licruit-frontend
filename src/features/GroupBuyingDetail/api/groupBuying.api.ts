import { httpClient } from '@/api/http';

export const getGroupBuyingDetail = async (buyingId: number) => {
  const result = await httpClient.get(`/buyings/${buyingId}`);
  return result.data;
};

export const registerGroupBuying = async (
  buyingId: number,
  quantity: number
) => {
  const result = await httpClient.post(`/buyings/${buyingId}`, { quantity });
  return result.data;
};
