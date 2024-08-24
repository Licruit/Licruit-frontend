import { httpClient } from '@/api/http';

export const getLiquor = async (pageParam: number, sort: string) => {
  const response = await httpClient.get('/buyings', {
    params: {
      sort,
      page: pageParam,
    },
  });
  return response.data;
};
