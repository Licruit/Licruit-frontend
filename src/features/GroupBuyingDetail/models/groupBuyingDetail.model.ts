export interface GroupBuyingDetail {
  openDate: string;
  deadline: string;
  deliveryStart: string;
  deliveryEnd: string;
  totalMin: number;
  totalMax: number;
  price: number;
  img: string;
  deliveryFee: number;
  freeDeliveryFee: number;
  title: string;
  content: string;
  orderCount: number;
  liquorId: number;
  liquorName: string;
  isParticipated: number;
  deliveryRegions: string[];
}
