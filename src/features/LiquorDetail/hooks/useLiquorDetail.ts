import { useQuery } from '@tanstack/react-query';
import { getLiquorDetail } from '../api/liquor.api';
import { LiquorDetail } from '../models/liquor.model';

export const useLiquorDetail = (id: number | undefined) => {
  const { data } = useQuery<LiquorDetail>({
    queryKey: ['liquorDetail', id],
    queryFn: () => getLiquorDetail(Number(id!)),
    enabled: id !== undefined,
  });

  return { liquorDetail: data, liquorImg: data?.img };
};
