import { httpClient } from '@/api/http';

export const register = async ({
  liquorId,
  liked,
}: {
  liquorId: number;
  liked: boolean;
}) => {
  let result;
  if (liked) {
    result = await httpClient.delete(`/liquors/${liquorId}/likes`);
  } else {
    result = await httpClient.post(`/liquors/${liquorId}/likes`);
  }
  return result;
};
