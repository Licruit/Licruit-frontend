import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getLiquor } from '../api/liquor.api';

export const useLiquor = (sort: string, region: string | null) => {
  const {
    data: liquorData,
    fetchNextPage,
    hasNextPage,
  } = useSuspenseInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['buyings', sort, region],
    queryFn: ({ pageParam }) => getLiquor(pageParam, sort, region),
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.pagination.currentPage + 1;
      return nextPage <= lastPage.pagination.totalPage ? nextPage : undefined;
    },
    select: (data) => ({
      pages: data.pages.flatMap((page) => page.buyings),
      pageParams: data.pageParams,
    }),
  });
  return { liquorData, fetchNextPage, hasNextPage };
};
