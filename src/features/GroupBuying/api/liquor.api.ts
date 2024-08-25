import { httpClient } from '@/api/http';

export const getLiquor = async (
  pageParam: number,
  sort: string,
  region: string | null
) => {
  const response = await httpClient.get('/buyings', {
    params: {
      sort,
      page: pageParam,
      region,
    },
  });

  return response.data;
};
