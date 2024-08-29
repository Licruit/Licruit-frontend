import { useParams, useSearchParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getReviews } from '../api/review.api';
import { GetReviewReq } from '../models/review.model';

export const useReviews = () => {
  const { id: liquorId } = useParams();
  const [searchParams] = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const sort = searchParams.get('sort') === '1' ? 1 : 0;

  const { data } = useSuspenseQuery<GetReviewReq>({
    queryKey: ['reviews', { liquorId, page, sort }],
    queryFn: () => getReviews({ liquorId: Number(liquorId), page, sort }),
  });

  return { reviews: data?.reviews, pagination: data?.pagination };
};
