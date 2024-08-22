import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import { useNavigate, useParams } from 'react-router-dom';
import BuyerTable from './BuyerTable';
import { ErrorBoundary } from 'react-error-boundary';
import { useOrderDetail } from '../../hooks/useOrderDetail';
import Fallback from './Fallback';

function BuyDetail() {
  const { id: orderId } = useParams();
  const { orderDetail } = useOrderDetail(Number(orderId));
  const navigate = useNavigate();
  if (!orderDetail) {
    throw new Error('구매자 정보를 찾을 수 없습니다');
  }
  return (
    <>
      <ErrorBoundary FallbackComponent={Fallback}>
        <BuyerTable orderDetail={orderDetail} />
      </ErrorBoundary>

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
