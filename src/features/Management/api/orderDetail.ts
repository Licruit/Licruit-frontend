import { httpClient } from '@/api/http';

export const orderDetail = async (orderId: number) => {
  const response = await httpClient.get(`/buyings/wholesaler/order/${orderId}`);
  return response.data;
};
