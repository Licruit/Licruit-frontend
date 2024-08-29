import Button from '@/components/Button/Button';
import styled from 'styled-components';
import { useBuyerStatus } from '../../hooks/useBuyerStatus';

interface Props {
  status: string;
  orderId: number;
}

function RowButton({ status, orderId }: Props) {
  const { handleConfirm, handleCancel, handleReport } = useBuyerStatus();

  return (
    <ButtonContainer>
      {status === '취소' && (
        <Button
          $style='outlined'
          $size='sm'
          $theme='neutral'
          onClick={(e) => {
            e.stopPropagation();
            handleReport(orderId);
          }}
        >
          경고
        </Button>
      )}
      {status === '신청' && (
        <>
          <Button
            $style='outlined'
            $size='sm'
            $theme='neutral'
            onClick={(e) => {
              e.stopPropagation();
              handleConfirm(orderId);
            }}
          >
            구매 확정
          </Button>
          <Button
            $style='outlined'
            $size='sm'
            $theme='neutral'
            onClick={(e) => {
              e.stopPropagation();
              handleCancel(orderId);
            }}
          >
            취소
          </Button>
        </>
      )}
    </ButtonContainer>
  );
}

export default RowButton;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: end;
`;
