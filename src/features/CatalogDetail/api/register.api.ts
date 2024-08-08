import { authInstance } from '@/api/instance';

export const register = async ({
  liquorId,
  liked,
}: {
  liquorId: number;
  liked: boolean;
}) => {
  let result;
  if (liked) {
    result = await authInstance.delete(`/liquors/${liquorId}/likes`);
  } else {
    result = await authInstance.post(`/liquors/${liquorId}/likes`);
  }
  return result;
};
