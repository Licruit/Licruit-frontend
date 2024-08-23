interface Pagination {
  currentPage: number;
  totalPage: number;
}

interface Liquors {
  id: number;
  name: string;
  description: string;
  img: string;
  categoryName: string;
  reviewAvg: string;
}

export interface HighRateRes {
  liquors: Liquors[];
  pagination: Pagination;
}
