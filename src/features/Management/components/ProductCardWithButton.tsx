import Button from '@/components/Button/Button';
import { ButtonProps, ProductCard } from '@/features/Catalog';
import { useGroupBuyingDetail } from '@/features/GroupBuyingDetail';
import { getRemainedDay, isClosed } from '@/utils/day';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useBuyingStatus } from '../hooks/useBuyingStatus';

function ProductCardWithButton() {
  const { buyingId } = useParams();
  const { groupBuyingDetail } = useGroupBuyingDetail(Number(buyingId));
  const { handleConfirmAll, handleDeleteBuying } = useBuyingStatus(
    Number(buyingId)
  );

  const isOver =
    groupBuyingDetail.orderCount >= groupBuyingDetail.totalMin &&
    isClosed(groupBuyingDetail.deadline);
  const isCanceled =
    groupBuyingDetail.orderCount < groupBuyingDetail.totalMin &&
    isClosed(groupBuyingDetail.deadline);

  let headText: string | undefined =
    `총 ${groupBuyingDetail.orderCount}병 신청됐습니다`;
  let onClick = () => {};
  let buttonProps: ButtonProps = {
    label: '확정',
    $style: 'solid',
    $theme: 'primary',
  };

  if (!buyingId) {
    headText = undefined;
  }

  if (isOver) {
    buttonProps = {
      label: '전체확정',
      $style: 'outlined',
      $theme: 'primary',
    };
    onClick = handleConfirmAll;
  } else if (isCanceled) {
    buttonProps = {
      label: '미달성',
      $style: 'outlined',
      $theme: 'neutral',
    };
  } else {
    buttonProps = {
      label: '공동구매 취소',
      $style: 'outlined',
      $theme: 'neutral',
    };
    onClick = handleDeleteBuying;
  }

  return (
    <Container>
      {buyingId && (
        <ProductCard
          liquorInfo={{
            img: groupBuyingDetail.img,
            categoryName: getRemainedDay(groupBuyingDetail.deadline),
            name: groupBuyingDetail.title,
            description: groupBuyingDetail.content,
          }}
          headText={headText}
          size='265'
        />
      )}
      <Button $size='sm' $width='full' onClick={onClick} {...buttonProps}>
        {buttonProps.label}
      </Button>
    </Container>
  );
}

export default ProductCardWithButton;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 265px;
`;
