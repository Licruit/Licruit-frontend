import Button from '@/components/Button/Button';
import PATH from '@/constants/path';
import { useNavigate } from 'react-router-dom';
import BuyerTable from './BuyerTable';

function BuyDetail() {
  const navigate = useNavigate();
  return (
    <>
      <BuyerTable />
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
