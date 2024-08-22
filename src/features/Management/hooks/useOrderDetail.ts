import { useQuery } from '@tanstack/react-query';
import { orderDetail } from '../api/orderDetail';

interface OrderDetail {
  createdAt: string;
  businessName: string;
  contact: string;
  address: string;
  liquorName: string;
  pricePerBottle: number;
  totalPrice: number;
}

export const useOrderDetail = (orderId: number) => {
  const { data } = useQuery<OrderDetail>({
    queryKey: ['orderDetail', orderId],
    queryFn: () => orderDetail(orderId),
  });
  return { orderDetail: data };
};
