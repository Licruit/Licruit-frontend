import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { GetBuyerListRes } from '../models/buyer.model';

interface Props {
  buyingId: number;
  page: number;
  filter: 'cancel' | undefined;
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
