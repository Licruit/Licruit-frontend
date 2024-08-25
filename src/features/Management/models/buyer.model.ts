export interface Buyer {
  id: number;
  userCompanyNumber: number;
  contact: number;
  liquorName: string;
  liquorPrice: number;
  status: string;
}

export interface GetBuyerListRes {
  orderList: Buyer[];
  pagination: {
    currentPage: number;
    totalPage: number;
  };
}
