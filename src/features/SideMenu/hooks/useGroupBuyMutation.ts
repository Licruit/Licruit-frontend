import { useMutation } from '@tanstack/react-query';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { format } from 'date-fns';
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
    const req = {
      openDate: format(data.dates[0], 'yyyy-MM-dd'),
      deadline: format(data.dates[1], 'yyyy-MM-dd'),
      openTime: format(data.time, 'HH:mm'),
      deliveryStart: format(data.deliveryDates[0], 'yyyy-MM-dd'),
      deliveryEnd: format(data.deliveryDates[1], 'yyyy-MM-dd'),
      totalMin: Number(data.totalMin),
      totalMax: data.totalMax ? Number(data.totalMax) : null,
      price: Number(data.price.replace(/,/g, '')),
      deliveryFee: Number(data.deliveryFee.replace(/,/g, '')),
      freeDeliveryFee: data.freeDeliveryFee
        ? Number(data.freeDeliveryFee.replace(/,/g, ''))
        : null,
      title: data.title,
      content: data.content,
      liquorId: data.liquor.id,
      regions: data.regions,
    };

    mutate(req);
  };

  return { handleGroupBuyOpen };
};

export default useGroupBuyMutation;
