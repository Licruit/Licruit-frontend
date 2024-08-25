import { Suspense } from 'react';
import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import BuyerTable from './BuyerTable';
import { useOrderDetail } from '../../hooks/useOrderDetail';

function BuyDetail() {
  const { orderId } = useParams();
  const { orderDetail } = useOrderDetail(Number(orderId));
  const navigate = useNavigate();
  return (
    <Container>
      <Suspense fallback={<></>}>
        <BuyerTable orderDetail={orderDetail} />
      </Suspense>
      <Button
        onClick={() => navigate(PATH.management)}
        $style='outlined'
        $theme='primary'
        $size='lg'
        $width='full'
      >
        목록으로 돌아가기
      </Button>
    </Container>
  );
}

export default BuyDetail;

const Container = styled.div`
  width: 100%;
`;
