import Button from '@/components/Button/Button';
import styled from 'styled-components';
import BuyerTable from './BuyerTable';

function BuyDetail() {
  return (
    <Contianer>
      <BuyerTable />
      <Button $style='outlined' $theme='primary' $size='lg' $width='fit'>
        목록으로 돌아가기
      </Button>
    </Contianer>
  );
}

export default BuyDetail;

const Contianer = styled.div`
  width: 100%;
`;
