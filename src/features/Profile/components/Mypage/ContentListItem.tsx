import MockImage from 'public/assets/images/main/mock-image1 38.svg';
import Button from '@/components/Button/Button';
import styled from 'styled-components';
import { GroupBuyListRes } from '../../model/groupbuylist.model';

function ContentListItem({ ...props }: GroupBuyListRes) {
  const ListItemData = { ...props };
  return (
    <ListItem>
      <Date>{ListItemData.createdAt}</Date>
      <Devider />
      <ItemInfoWrapper>
        <img src={MockImage} alt='liquor' />
        <ItemInfo>
          <StateBadge>
            <div className='icon' />
            {ListItemData.status}
          </StateBadge>
          <ItemTitle>{ListItemData.title}</ItemTitle>
          <ItemDesc>{ListItemData.content}</ItemDesc>
          <PaymentInfo>
            {ListItemData.totalPrice}원 · {ListItemData.quantity}개
          </PaymentInfo>
        </ItemInfo>
      </ItemInfoWrapper>
      <Button $style='outlined' $theme='neutral' $size='sm' $width='full'>
        취소하기
      </Button>
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
