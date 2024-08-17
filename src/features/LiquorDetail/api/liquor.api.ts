import { httpClient } from '@/api/http';

export const getLiquorDetail = async (liquorId: number) => {
  try {
    const result = await httpClient.get(`/liquors/${liquorId}`);
    return result.data;
  } catch (err) {
    window.alert('오류가 발생했습니다. 다시 시도해주세요.');
  }
};
