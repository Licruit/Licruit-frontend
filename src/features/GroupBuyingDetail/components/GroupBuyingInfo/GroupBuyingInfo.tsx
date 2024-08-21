import styled, { useTheme } from 'styled-components';
import StatBox from '@/components/StatBox/StatBox';
import { InfoIcon } from 'public/assets/icons';
import { GroupBuyingDetail } from '../../models/groupBuyingDetail.model';

interface Props {
  detailData: GroupBuyingDetail;
}

function GroupBuyingInfo({ detailData }: Props) {
  const theme = useTheme();
  const { openDate, deadline, deliveryStart, deliveryEnd } = detailData;

  return (
    <Container>
      <Statistic>
        <StatBox title='공동구매 주문기간' iconType='calendar'>
          <span>
            {openDate}~{deadline}
          </span>
        </StatBox>
        <StatBox title='배송 예정일' iconType='calendar'>
          <span>
            {deliveryStart}~{deliveryEnd}
          </span>
        </StatBox>
      </Statistic>
      <Warning>
        <InfoIcon fill={theme.color.neutral[600]} width={24} height={24} />
        <p>
          공동구매 주문 기간 종료 후에는 주문 취소 시 이용 제한 패널티를 받을 수
          있습니다
          <br />총 2번의 경고가 접수되면 리크루트 공동구매 서비스 이용이
          제한되니, 유의해 주시기 바랍니다
        </p>
      </Warning>
    </Container>
  );
}

export default GroupBuyingInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  padding: 20px;

  border: 1px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Statistic = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;

  span {
    ${({ theme }) => theme.typo.body.semi_bold[16]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;

const Warning = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;
  padding: 20px;

  background-color: ${({ theme }) => theme.color.neutral[200]};

  p {
    ${({ theme }) => theme.typo.body.semi_bold[14]}
    color: ${({ theme }) => theme.color.neutral[600]};
    white-space: pre-line;
  }
`;
