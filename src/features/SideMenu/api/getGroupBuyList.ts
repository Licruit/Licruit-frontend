import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { GroupBuyListRes } from '../model/groupbuylist.model';

const getGroupBuyList = async () => {
  const result: AxiosResponse<GroupBuyListRes[]> =
    await httpClient.get(`/orders`);
  return result.data;
};

export default getGroupBuyList;
