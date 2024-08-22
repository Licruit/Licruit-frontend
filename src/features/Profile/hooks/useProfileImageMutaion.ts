import { useMutation } from '@tanstack/react-query';
import { putProfileImage } from '../api/putProfile';

const useProfileImageMutation = () => {
  return useMutation({
    mutationFn: (image: FormData) => putProfileImage(image),
  });
};

export default useProfileImageMutation;
