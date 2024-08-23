import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';

interface ShopStatusRes {
  id: string;
  status: string;
  statusCount: string;
}

interface CompanyStatusRes {
  openBuying: string;
  shortfall: string;
  achievement: string;
}

export const getShopCurrentStatus = async () => {
  const result: AxiosResponse<ShopStatusRes[]> =
    await httpClient.get('/orders/summary');
  return result.data;
};

export const getCompanyCurrentStatus = async () => {
  const result: AxiosResponse<CompanyStatusRes> =
    await httpClient.get('/buyings/summary');
  return result.data;
};
