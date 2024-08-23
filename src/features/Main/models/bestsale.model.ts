interface Pagination {
  currentPage: number;
  totalPage: number;
}

interface Buying {
  id: number;
  title: string;
  content: string;
  price: number;
  orderCount: number;
  leftDate: number;
  img: string;
  liquorName: string;
  alcohol: string;
  volume: number;
  categoryName: string;
}

export type BestSaleParams = 'ranking' | 'recent' | 'deadline';

export interface BestSaleRes {
  buyings: Buying[];
  pagination: Pagination;
}
