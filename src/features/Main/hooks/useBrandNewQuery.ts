import { useQuery } from '@tanstack/react-query';
import getBrandNew from '../api/getBrandNew';

const useBrandNewQuery = () => {
  const { data } = useQuery({
    queryKey: ['brand-new'],
    queryFn: getBrandNew,
  });

  return { data };
};

export default useBrandNewQuery;
