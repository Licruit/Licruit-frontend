import styled from 'styled-components';
import useLoginStore from '@/store/loginStore';
import { useWatch } from 'react-hook-form';
import { formatNumber } from '@/utils/format';
import Counter from './Counter';
import { GroupBuyingDetail } from '../../models/groupBuyingDetail.model';

interface Props {
  detailData: GroupBuyingDetail;
}

function CounterBox({ detailData }: Props) {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  const quantity = useWatch({ name: 'quantity' });
  const {
    price,
    deliveryFee,
    freeDeliveryFee,
    orderCount,
    totalMax,
    deliveryRegions,
  } = detailData;

  return (
    <Container>
      <div className='description'>
        <span>배송가능 지역 : {deliveryRegions.join(',')}</span>
        <span>
          {deliveryFee === 0 ? (
            '무료배송'
          ) : (
            <>
              택배배송 (+{formatNumber(deliveryFee)}원)
              {freeDeliveryFee !== 0 &&
                ` · ${formatNumber(freeDeliveryFee)}원 이상 결제시 무료 배송`}
            </>
          )}
        </span>
      </div>
      <SelectorWrapper>
        {isLoggedIn ? (
          <>
            <Counter
              remainedQuantity={totalMax === 0 ? null : totalMax - orderCount}
            />
            <span className='price'>{formatNumber(price * quantity)}원</span>
          </>
        ) : (
          <NonMemberView>
            <span className='price'>회원전용가격</span>
          </NonMemberView>
        )}
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

const NonMemberView = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
