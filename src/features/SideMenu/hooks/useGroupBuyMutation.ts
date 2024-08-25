import { useMutation } from '@tanstack/react-query';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import postGroupBuy from '../api/postGroupBuy';
import { GroupBuyReq } from '../model/groupbuy.model';

const useGroupBuyMutation = () => {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);

  return useMutation({
    mutationFn: (data: GroupBuyReq) => postGroupBuy(data),
    onSuccess: () => {
      setContent('my-page');
    },
  });
};

export default useGroupBuyMutation;
