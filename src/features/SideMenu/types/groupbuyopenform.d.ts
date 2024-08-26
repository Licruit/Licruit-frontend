export interface GroupBuyForm {
  liquor: { name: string; id: number };
  dates: Date[];
  time: string;
  deliveryDates: Date[];
  totalMin: number;
  totalMax: number;
  individualMin: number;
  price: string;
  deliveryFee: string;
  freeDeliveryFee?: string;
  title: string;
  content: string;
  regions: string[];
}
