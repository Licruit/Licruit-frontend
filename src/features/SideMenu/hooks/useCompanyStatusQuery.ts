import { useQuery } from '@tanstack/react-query';
import { getCompanyCurrentStatus } from '../api/getGroupBuyStatus';

const useCompanyStatusQuery = () => {
  const { data } = useQuery({
    queryKey: ['company-status'],
    queryFn: getCompanyCurrentStatus,
  });

  return { data };
};

export default useCompanyStatusQuery;
