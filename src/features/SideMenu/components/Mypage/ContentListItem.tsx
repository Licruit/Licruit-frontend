import Button from '@/components/Button/Button';
import styled from 'styled-components';
import { useMyPageSideMenuStore } from '@/store/mypageSideMenuStore';
import { GroupBuyListRes } from '../../model/groupbuylist.model';
import useCancelOrderMutation from '../../hooks/useCancelOrderMutation';

function ContentListItem({ ...props }: GroupBuyListRes) {
  const setContent = useMyPageSideMenuStore((state) => state.setContent);
  const { handleClickCancel } = useCancelOrderMutation();

  const ListItemData = { ...props };
  const ListType = ListItemData.status;

  const ButtonType =
    ListType === '신청'
      ? ({ $style: 'outlined', $theme: 'neutral', text: '취소하기' } as const)
      : ({
          $style: 'solid',
          $theme: 'primary',
          text: '리뷰 작성하기',
        } as const);

  const handleClickReview = () => {
    setContent('review', Number(ListItemData.buyingId));
  };

  return (
    <ListItem>
      <Date>{ListItemData.createdAt}</Date>
      <Devider />
      <ItemInfoWrapper>
        <img src={ListItemData.img} alt='liquor' />
        <ItemInfo>
          <StateBadge>
            <div className='icon' />
            {ListItemData.status}
          </StateBadge>
          <ItemTitle>{ListItemData.title}</ItemTitle>
          <ItemDesc>{ListItemData.content}</ItemDesc>
          <PaymentInfo>
            {Number(ListItemData.totalPrice).toLocaleString()}원 ·{' '}
            {ListItemData.quantity}개
          </PaymentInfo>
        </ItemInfo>
      </ItemInfoWrapper>
      {(ListType === '신청' || ListType === '배송완료') && (
        <Button
          $style={ButtonType.$style}
          $theme={ButtonType.$theme}
          $size='sm'
          $width='full'
          onClick={
            ListType === '신청'
              ? () => handleClickCancel(Number(ListItemData.buyingId))
              : handleClickReview
          }
          disabled={Number(ListItemData.isWroteReview) !== 1}
        >
          {ButtonType.text}
        </Button>
      )}
    </ListItem>
  );
}

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 100%;
  padding: 20px;
`;

const Date = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const Devider = styled.div`
  height: 1px;
  border: 1px solid ${({ theme }) => theme.color.neutral[600]};
`;

const ItemInfoWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: end;
  width: 100%;

  img {
    width: 200px;
    height: 200px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const StateBadge = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  color: ${({ theme }) => theme.color.primary[500]};
  ${({ theme }) => theme.typo.heading.bold[14]}

  .icon {
    width: 8px;
    height: 8px;
    background: ${({ theme }) => theme.color.primary[500]};
  }
`;

const ItemTitle = styled.div`
  ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const ItemDesc = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[600]};
`;

const PaymentInfo = styled.p`
  ${({ theme }) => theme.typo.body.semi_bold[14]};
  color: ${({ theme }) => theme.color.primary[500]};
`;

export default ContentListItem;
