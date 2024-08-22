export interface CatalogItem {
  liquors: Liquors[];
  pagination: Pagination;
}

export interface Liquors {
  id: number;
  name: string;
  description: string;
  categoryName: string;
  img: string;
}

interface Pagination {
  currentPage: number;
  totalPage: number;
}
