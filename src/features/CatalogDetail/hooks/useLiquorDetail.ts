import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getLiquorDetail } from '../api/liquor.api';
import { LiquorDetail } from '../model/liquor.model';

export const useLiquorDetail = () => {
  const { id } = useParams();

  const { data } = useQuery<LiquorDetail>({
    queryKey: ['liquorDetail', id],
    queryFn: () => getLiquorDetail(+id!),
  });

  return { liquorDetail: data };
};
