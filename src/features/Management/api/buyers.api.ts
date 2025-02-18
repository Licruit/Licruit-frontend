import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { GetBuyerListRes } from '../models/buyer.model';

interface Props {
  buyingId: number;
  page: number;
  filter: string | undefined;
}

export const getBuyerList = async ({ buyingId, page, filter }: Props) => {
  const response: AxiosResponse<GetBuyerListRes> = await httpClient.get(
    `/buyings/wholesaler/${buyingId}`,
    {
      params: {
        page,
        type: filter,
      },
    }
  );
  return response.data;
};

export const confirmBuyerStatus = async (buyingId: number, orderId: number) => {
  const response = await httpClient.put(
    `/buyings/wholesaler/confirm/${buyingId}/${orderId}`
  );
  return response.data;
};

export const confirmAllBuyer = async (buyingId: number) => {
  const response = await httpClient.put(
    `/buyings/wholesaler/confirm/${buyingId}`
  );
  return response.data;
};

export const cancelOrder = async (orderId: number) => {
  const response = await httpClient.delete(
    `/buyings/wholesaler/order/${orderId}`
  );
  return response.data;
};

export const reportBuyer = async (orderId: number) => {
  const response = await httpClient.post(`/buyings/blacklist/${orderId}`);
  return response.data;
};
