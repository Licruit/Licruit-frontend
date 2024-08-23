import { useQuery } from '@tanstack/react-query';
import getBestSale from '../api/getBestSale';
import { BestSaleParams } from '../models/bestsale.model';

const useBestSaleQuery = (sort: BestSaleParams) => {
  const { data } = useQuery({
    queryKey: ['best-sale', sort],
    queryFn: () => getBestSale(sort),
  });

  return { data };
};

export default useBestSaleQuery;
