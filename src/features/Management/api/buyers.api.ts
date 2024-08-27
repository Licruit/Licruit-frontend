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
        sort: filter,
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
