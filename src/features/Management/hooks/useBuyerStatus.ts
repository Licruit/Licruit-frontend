import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  cancelOrder,
  confirmBuyerStatus,
  reportBuyer,
} from '../api/buyers.api';
import { GetBuyerListRes } from '../models/buyer.model';

export const useBuyerStatus = () => {
  const buyingId = Number(useParams().buyingId);
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page') || 1);
  const filter = searchParams.get('filter') === 'cancel' ? 'cancel' : undefined;

  const { mutate: handleConfirm } = useMutation({
    mutationFn: (orderId: number) => confirmBuyerStatus(buyingId, orderId),
    onMutate: async (orderId: number) => {
      await queryClient.cancelQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });
      const prevData = queryClient.getQueryData<GetBuyerListRes>([
        'buyerList',
        { buyingId, page, filter },
      ]);

      if (!prevData) return;

      queryClient.setQueryData(['buyerList', { buyingId, page, filter }], {
        ...prevData,
        orderList: prevData.orderList.map((buyer) =>
          buyer.id === orderId ? { ...buyer, status: '확정' } : buyer
        ),
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(
        ['buyerList', { buyingId, page, filter }],
        context?.prevData
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });
    },
  });

  const { mutate: handleCancel } = useMutation({
    mutationFn: (orderId: number) => cancelOrder(orderId),
    onMutate: async (orderId: number) => {
      await queryClient.cancelQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });

      const prevData = queryClient.getQueryData<GetBuyerListRes>([
        'buyerList',
        { buyingId, page, filter },
      ]);

      if (!prevData) return;

      queryClient.setQueryData(['buyerList', { buyingId, page, filter }], {
        ...prevData,
        orderList: prevData.orderList.map((buyer) =>
          buyer.id === orderId ? { ...buyer, status: '취소' } : buyer
        ),
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(
        ['buyerList', { buyingId, page, filter }],
        context?.prevData
      );
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });
    },
  });

  const { mutate: handleReport } = useMutation({
    mutationFn: (orderId: number) => reportBuyer(orderId),
    onMutate: async (orderId: number) => {
      await queryClient.cancelQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });

      const prevData = queryClient.getQueryData<GetBuyerListRes>([
        'buyerList',
        { buyingId, page, filter },
      ]);

      if (!prevData) return;

      queryClient.setQueryData(['buyerList', { buyingId, page, filter }], {
        ...prevData,
        orderList: prevData.orderList.map((buyer) =>
          buyer.id === orderId ? { ...buyer, status: '경고' } : buyer
        ),
      });

      return { prevData };
    },
    onError: (_err, _variable, context) => {
      toast.error('오류가 발생했습니다.\n다시 시도해주세요.');
      queryClient.setQueryData(
        ['buyerList', { buyingId, page, filter }],
        context?.prevData
      );
    },
    onSettled: () => {
      toast.info('경고 처리 되었습니다.');
      queryClient.invalidateQueries({
        queryKey: ['buyerList', { buyingId, page, filter }],
      });
    },
  });

  return { handleConfirm, handleCancel, handleReport };
};
