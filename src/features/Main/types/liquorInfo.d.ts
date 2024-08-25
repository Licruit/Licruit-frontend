export interface Pagination {
  currentPage: number;
  totalPage: number;
}

export interface Liquors {
  id: number;
  name: string;
  description: string;
  img: string;
  categoryName: string;
  reviewAvg: string;
}
