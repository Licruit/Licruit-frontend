export type Sort = 'ranking' | 'recent' | 'deadline';

export interface SortParams {
  sort: Sort;
  page: number;
}
