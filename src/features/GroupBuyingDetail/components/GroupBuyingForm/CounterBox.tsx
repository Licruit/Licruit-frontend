import styled from 'styled-components';
import { formatNumber } from '@/utils/format';
import Counter from './Counter';
import { GroupBuyingDetail } from '../../models/groupBuyingDetail.model';

interface Props {
  detailData: GroupBuyingDetail;
}

function CounterBox({ detailData }: Props) {
  const { price, deliveryFee, freeDeliveryFee } = detailData;
  return (
    <Container>
      <div className='description'>
        <span>택배배송 (+{formatNumber(deliveryFee)}원)</span>
        <span>{formatNumber(freeDeliveryFee)}원 이상 결제시 무료 배송</span>
      </div>
      <SelectorWrapper>
        <Counter />
        <span className='price'>{formatNumber(price)}원</span>
      </SelectorWrapper>
    </Container>
  );
}

export default CounterBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;

  .description {
    display: flex;
    flex-direction: column;
    gap: 2px;
    ${({ theme }) => theme.typo.body.medium[12]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .price {
    ${({ theme }) => theme.typo.heading.bold[20]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;
