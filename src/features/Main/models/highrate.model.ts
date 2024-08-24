import { Liquors, Pagination } from '../types/liquorInfo';

export interface HighRateRes {
  liquors: Liquors[];
  pagination: Pagination;
}
