export interface LiquorItem {
  buyings: GroupBuying[];
  pagination: Pagination;
}

export interface GroupBuying {
  id: number;
  title: string;
  content: string;
  price: number;
  orderCount: number;
  leftDate: number;
  liquorName: string;
  alcohol: string;
  volume: number;
  categoryName: string;
  img: string;
}

interface Pagination {
  currentPage: number;
  totalPage: number;
}
