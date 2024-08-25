import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { HighRateRes } from '../models/highrate.model';

const getHighRate = async () => {
  const result: AxiosResponse<HighRateRes> = await httpClient.get('/liquors', {
    params: { sort: 0, page: 1 },
  });
  return result.data.liquors;
};

export default getHighRate;
