import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { BrandNew } from '../models/brandnew.model';

const getBrandNew = async () => {
  const result: AxiosResponse<BrandNew> = await httpClient.get('/liquors', {
    params: { page: 1 },
  });

  return result.data.liquors;
};

export default getBrandNew;
