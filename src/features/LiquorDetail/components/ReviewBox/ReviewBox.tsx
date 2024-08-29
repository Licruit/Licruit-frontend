import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Pagination from '@/components/Pagination/Pagination';
import ReviewListItem from './ReviewListItem';
import SortSelect from './SortSelect';
import { useReviews } from '../../hooks/useReviews';

function ReviewBox() {
  const { reviews, pagination } = useReviews();

  return (
    <Container>
      <SortSelect />
      <div className='review-wrapper'>
        {reviews.map((review) => (
          <ReviewListItem key={uuidv4()} reviewData={review} />
        ))}
      </div>
      <Pagination
        totalItems={pagination.totalPage}
        currentPage={Number(pagination.currentPage)}
      />
    </Container>
  );
}

export default ReviewBox;

const Container = styled.div`
  width: 100%;

  .review-wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;
    margin: 20px 0;
  }
`;
