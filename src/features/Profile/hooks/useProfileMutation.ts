import { useMutation } from '@tanstack/react-query';
import { putProfile } from '../api/putProfile';
import { Profile } from '../model/profile.model';

const useProfileMutation = () => {
  return useMutation({
    mutationFn: (data: Profile) => putProfile(data),
    onError: (error) => {
      console.log(error);
      window.alert('잠시후 다시 시도해 주세요.');
    },
  });
};

export default useProfileMutation;
