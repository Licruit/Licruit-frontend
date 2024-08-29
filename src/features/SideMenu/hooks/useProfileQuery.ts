import { useSuspenseQuery } from '@tanstack/react-query';
import { getProfile } from '../api/getProfile';
import { GetProfile } from '../model/profile.model';

const useProfileQuery = () => {
  const { data } = useSuspenseQuery<GetProfile>({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  });

  return { userProfile: data };
};

export default useProfileQuery;
