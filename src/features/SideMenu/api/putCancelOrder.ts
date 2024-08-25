import { httpClient } from '@/api/http';

const putCancelOrder = async (orderId: number) => {
  const result = await httpClient.put(`/orders/${orderId}`);
  return result;
};

export default putCancelOrder;
