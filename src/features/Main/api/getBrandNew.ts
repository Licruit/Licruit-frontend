import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';
import { Liquors } from '../types/liquorInfo';

const getBrandNew = async () => {
  const result: AxiosResponse<Liquors[]> = await httpClient.get('/liquors/new');

  return result.data;
};

export default getBrandNew;
