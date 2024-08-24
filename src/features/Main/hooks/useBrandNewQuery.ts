import { useQuery } from '@tanstack/react-query';
import getBrandNew from '../api/getBrandNew';

const useBrandNewQuery = () => {
  const { data: brandNewLiquors } = useQuery({
    queryKey: ['brand-new'],
    queryFn: getBrandNew,
    select: (data) => data.slice(0, 3),
  });

  return { brandNewLiquors };
};

export default useBrandNewQuery;
