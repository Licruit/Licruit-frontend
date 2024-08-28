import { useSuspenseQuery } from '@tanstack/react-query';
import { getLiquorDetail } from '../api/liquor.api';
import { LiquorDetail } from '../models/liquor.model';

export const useLiquorDetail = (id: number | undefined) => {
  const { data } = useSuspenseQuery<LiquorDetail>({
    queryKey: ['liquorDetail', id],
    queryFn: () => getLiquorDetail(Number(id!)),
  });

  return { liquorDetail: data, liquorImg: data?.img };
};
