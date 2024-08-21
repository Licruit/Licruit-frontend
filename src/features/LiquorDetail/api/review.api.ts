import { httpClient } from '@/api/http';

interface Props {
  liquorId: number;
  page: number;
  sort?: 0 | 1;
}

export const getReviews = async ({ liquorId, page, sort }: Props) => {
  const response = await httpClient.get(`/liquors/${liquorId}/reviews`, {
    params: { page, sort },
  });
  return response.data;
};
