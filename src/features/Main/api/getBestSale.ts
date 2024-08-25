import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { BestSaleParams, BestSaleRes } from '../models/bestsale.model';

const getBestSale = async (sort: BestSaleParams) => {
  const result: AxiosResponse<BestSaleRes> = await httpClient.get(
    `/buyings/?sort=${sort}&page=1`
  );
  return result.data.buyings;
};

export default getBestSale;
