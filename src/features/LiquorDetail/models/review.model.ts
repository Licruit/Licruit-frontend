export interface Review {
  img: string;
  name: string;
  userCompanyNumber: number;
  content: string;
  score: number;
  createdAt: Date;
}

export interface GetReviewReq {
  reviews: Review[];
  pagination: {
    currentPage: number;
    totalPage: number;
  };
}
