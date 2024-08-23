import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';

interface GroupBuyStatusRes {
  id: string;
  status: string;
  statusCount: string;
}

const getGroupBuyStatus = async () => {
  const result: AxiosResponse<GroupBuyStatusRes[]> =
    await httpClient.get('/orders/summary');
  return result.data;
};

export default getGroupBuyStatus;
