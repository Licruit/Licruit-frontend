import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import { Sort, SortParams } from '../types/buyingParams';
import { getLiquor } from '../api/liquor.api';

export const useLiquor = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const sort = (searchParams.get('sort') as Sort) || 'ranking';
  const page = searchParams.get('page') || 1;

  const params: SortParams = { sort, page: Number(page) };

  const { data: liquorData } = useQuery({
    queryKey: ['liquor', params],
    queryFn: getLiquor,
  });
  return { liquorData };
};
