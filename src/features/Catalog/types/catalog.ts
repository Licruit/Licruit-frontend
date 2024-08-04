export interface CatalogItem {
  liquors: Liquors[];
  pagination: Pagination;
}

interface Liquors {
  id: number;
  name: string;
  description: string;
  category_name: string;
}

interface Pagination {
  currentPage: number;
  totalPage: number;
}
