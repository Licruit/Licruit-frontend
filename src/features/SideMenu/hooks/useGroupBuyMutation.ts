import { useMutation } from '@tanstack/react-query';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { format } from 'date-fns';
import { formatPriceToNumber } from '@/utils/format';
import postGroupBuy from '../api/postGroupBuy';
import { GroupBuyReq } from '../model/groupbuy.model';
import { GroupBuyForm } from '../types/groupbuyopenform';

const useGroupBuyMutation = () => {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  const { mutate } = useMutation({
    mutationFn: (data: GroupBuyReq) => postGroupBuy(data),
    onSuccess: () => {
      setContent('my-page');
    },
  });

  const handleGroupBuyOpen = (data: GroupBuyForm) => {
    const {
      dates,
      time,
      deliveryDates,
      totalMin,
      totalMax,
      price,
      deliveryFee,
      freeDeliveryFee,
      title,
      content,
      liquor,
      regions,
    } = data;

    const req = {
      openDate: format(dates[0], 'yyyy-MM-dd'),
      deadline: format(dates[1], 'yyyy-MM-dd'),
      openTime: format(time, 'HH:mm'),
      deliveryStart: format(deliveryDates[0], 'yyyy-MM-dd'),
      deliveryEnd: format(deliveryDates[1], 'yyyy-MM-dd'),
      totalMin: Number(totalMin),
      totalMax: totalMax ? Number(totalMax) : null,
      price: formatPriceToNumber(price),
      deliveryFee: formatPriceToNumber(deliveryFee),
      freeDeliveryFee: freeDeliveryFee
        ? formatPriceToNumber(freeDeliveryFee)
        : null,
      title,
      content,
      liquorId: liquor.id,
      regions,
    };

    mutate(req);
  };

  return { handleGroupBuyOpen };
};

export default useGroupBuyMutation;
