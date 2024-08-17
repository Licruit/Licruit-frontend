export interface GroupBuyReq {
  openDate: Date;
  deadline: Date;
  openTime: string;
  deliveryStart: Date;
  deliveryEnd: Date;
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
