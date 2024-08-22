import { httpClient } from '@/api/http';
import { GroupBuyReq } from '../model/groupbuy.model';

const postGroupBuy = async (request: GroupBuyReq) => {
  const result = await httpClient.post('/buyings', request);
  return result;
};

export default postGroupBuy;
