import { useQuery } from '@tanstack/react-query';
import { getProfile } from '../api/getProfile';
import { GetProfile } from '../model/profile.model';

const useProfileQuery = () => {
  const { data, error, isError } = useQuery<GetProfile>({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    staleTime: Infinity,
  });

  return { data, isError, error };
};

export default useProfileQuery;
