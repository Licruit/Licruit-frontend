export interface GroupBuyReq {
  openDate: string;
  deadline: string;
  openTime: string;
  deliveryStart: string;
  deliveryEnd: string;
  totalMin: number;
  totalMax: number;
  price: number;
  deliveryFee: number;
  freeDeliveryFee?: number;
  title: string;
  content: string;
  liquorId: number;
  regions: string[];
}
