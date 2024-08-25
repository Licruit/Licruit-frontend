import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { putProfile } from '../api/putProfile';
import { EditProfile } from '../model/profile.model';

interface States {
  profile: EditProfile;
}

const useProfileMutation = () => {
  const queryClient = useQueryClient();
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return useMutation({
    mutationFn: ({ profile }: States) => putProfile(profile),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      setContent('my-page');
    },
  });
};

export default useProfileMutation;
