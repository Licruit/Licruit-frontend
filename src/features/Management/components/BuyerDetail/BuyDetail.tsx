import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import { useNavigate, useParams } from 'react-router-dom';
import BuyerTable from './BuyerTable';
import { useOrderDetail } from '../../hooks/useOrderDetail';
import { Suspense } from 'react';
function BuyDetail() {
  const { id: orderId } = useParams();
  const { orderDetail } = useOrderDetail(Number(orderId));
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
}

export default BuyDetail;
