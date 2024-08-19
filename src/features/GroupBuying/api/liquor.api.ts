import { httpClient } from '@/api/http';
import { GroupBuying } from '../types/liquor';
import { SortParams } from '../types/buyingParams';

export const getLiquor = async ({
  queryKey,
}: {
  queryKey: [string, SortParams];
}): Promise<{ data: GroupBuying[]; nextPage?: number }> => {
  const [, params] = queryKey;
  const { sort, page } = params;

  const response = await httpClient.get('/buyings', {
    params: {
      page,
      sort,
    },
  });

  const { pagination, buyings } = response.data;
  const hasNextPage = pagination.currentPage < pagination.totalPage;
  return { data: buyings, nextPage: hasNextPage ? page + 1 : undefined };
};
