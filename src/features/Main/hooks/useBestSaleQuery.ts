import { useQuery } from '@tanstack/react-query';
import getBestSale from '../api/getBestSale';
import { BestSaleParams } from '../models/bestsale.model';

const useBestSaleQuery = (sort: BestSaleParams) => {
  const { data: bestSaleLiquors } = useQuery({
    queryKey: ['best-sale', sort],
    queryFn: () => getBestSale(sort),
    select: (data) => data.slice(0, 3),
  });

  return { bestSaleLiquors };
};

export default useBestSaleQuery;
