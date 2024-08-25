import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { ShopStatusRes, CompanyStatusRes } from '../model/groupbuystatus.model';

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
