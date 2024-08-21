import { useInfiniteQuery } from '@tanstack/react-query';
import { getLiquor } from '../api/liquor.api';

export const useLiquor = (sort: string) => {
  const {
    data: liquorData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['buyings'],
    queryFn: ({ pageParam }) => getLiquor(pageParam, sort),
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
