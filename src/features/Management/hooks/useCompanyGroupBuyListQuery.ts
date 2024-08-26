import { useSuspenseQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import getCompanyGroupBuyList from '../api/getCompanyGroupBuyList';

const useCompanyGroupBuyListQuery = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const sort = searchParams.get('filter') || undefined;
  const page = Number(searchParams.get('page') || 1);

  const { data: companyGroupBuyList } = useSuspenseQuery({
    queryKey: ['company-group-buy-list', { sort, page }],
    queryFn: getCompanyGroupBuyList,
  });

  return { companyGroupBuyList };
};

export default useCompanyGroupBuyListQuery;
