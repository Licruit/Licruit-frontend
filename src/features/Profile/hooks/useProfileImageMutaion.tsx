import { useMutation } from '@tanstack/react-query';
import { putProfileImage } from '../api/putProfile';

const useProfileImageMutation = () => {
  return useMutation({
    mutationFn: (image: FormData) => putProfileImage(image),
    onError: () => {
      window.alert('잠시후 다시 시도해 주세요.');
    },
  });
};

export default useProfileImageMutation;
