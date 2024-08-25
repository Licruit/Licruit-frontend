import { httpClient } from '@/api/http';
import { ReviewReq } from '../model/review.model';

const postReview = async (request: ReviewReq) => {
  const result = await httpClient.post('/reviews', request);
  return result;
};

export default postReview;
