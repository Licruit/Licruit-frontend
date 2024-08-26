export interface GroupBuyReq {
  openDate: string;
  deadline: string;
  openTime: string;
  deliveryStart: string;
  deliveryEnd: string;
  totalMin: number;
  totalMax: number | null;
  price: number;
  deliveryFee: number;
  freeDeliveryFee?: number | null;
  title: string;
  content: string;
  liquorId: number;
  regions: string[];
}
