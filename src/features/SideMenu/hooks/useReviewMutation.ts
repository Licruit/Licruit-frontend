import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { ReviewReq } from '../model/review.model';
import postReview from '../api/postReview';

const useReviewMutation = () => {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: ReviewReq) => postReview(data),
    onSuccess: () => {
      setContent('my-page');
      queryClient.invalidateQueries({ queryKey: ['group-buy-list'] });
    },
  });
};

export default useReviewMutation;
