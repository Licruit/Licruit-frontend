// hooks/useSignup.ts
import { useQuery } from '@tanstack/react-query';
import { getKSIC } from '../api/signup.api';
import { KSIC } from '../types/signup';

export const useSignup = () => {
  const { data: industryData } = useQuery<KSIC[], Error>({
    queryKey: ['ksic'],
    queryFn: getKSIC,
    refetchOnWindowFocus: false,
  });

  return { industryData };
};
