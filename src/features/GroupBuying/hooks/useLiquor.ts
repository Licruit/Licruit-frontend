import { useInfiniteQuery } from '@tanstack/react-query';
import { SortParams } from '../types/buyingParams';
import { getLiquor } from '../api/liquor.api';

export const useLiquor = (sort: string) => {
  const fetchLiquor = async ({
    queryKey,
    pageParam = 1,
  }: {
    queryKey: [string, SortParams];
    pageParam?: number;
  }) => {
    const [, params] = queryKey;
    return getLiquor({ queryKey: ['liquor', { ...params, page: pageParam }] });
  };

  const {
    data: liquorData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['liquor', { sort }],
    queryFn: fetchLiquor,
    getNextPageParam: (lastPage) => lastPage.nextPage ?? undefined,
  });

  return { liquorData, fetchNextPage, hasNextPage };
};

// useInfiniteQuery(
//   'mainPosts',
//   async ({ pageParam = 0 }) => {
//     const res = await getMainPosts({ ...searchQuery, page: pageParam });
//     return res;
//   }
