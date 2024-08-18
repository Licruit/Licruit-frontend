import { httpClient } from '@/api/http';
import { LiquorItem } from '../types/liquor';
import { SortParams } from '../types/buyingParams';

export const getLiquor = async ({
  queryKey,
}: {
  queryKey: [string, SortParams];
}): Promise<LiquorItem> => {
  const [, params] = queryKey;
  const { sort, page } = params;

  const response = await httpClient.get('/buyings', {
    params: {
      page,
      sort,
    },
  });
  return response.data;
};
