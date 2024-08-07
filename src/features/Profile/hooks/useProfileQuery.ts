import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../api/getProfile';
import { Profile } from '../model/profile.model';

const useProfileQuery = (id: string, type: string) => {
  const { data, error, isError } = useQuery<Profile>({
    queryKey: ['profile', id],
    queryFn: () => getProfile(id, type),
  });

  return { profile: data, isError, error };
};

export default useProfileQuery;
