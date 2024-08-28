import { httpClient } from '@/api/http';
import { AxiosResponse } from 'axios';

interface Buying {
  id: number;
  title: string;
  content: string;
  leftDate: number;
  liquorName: string;
  liquorImg: string;
  orderCount: string;
}

interface Pagination {
  currentPage: number;
  totalPage: number;
}

interface GroupBuyListRes {
  buyings: Buying[];
  pagination: Pagination;
}

const getCompanyGroupBuyList = async ({
  queryKey,
}: {
  queryKey: [string | null, { page: number; sort: string | undefined }];
}) => {
  const [, { page, sort }] = queryKey;

  const result: AxiosResponse<GroupBuyListRes> = await httpClient.get(
    '/buyings/wholesaler',
    {
      params: {
        page,
        type: sort,
      },
    }
  );

  return result.data;
};

export default getCompanyGroupBuyList;
