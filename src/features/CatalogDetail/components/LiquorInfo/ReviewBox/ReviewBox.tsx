import styled from 'styled-components';
import Pagination from '@/components/Pagination/Pagination';
import ReviewListItem from './ReviewListItem';
import SortSelect from './SortSelect';

function ReviewBox() {
  return (
    <Container>
      <SortSelect />
      <div className='review-wrapper'>
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
      </div>
      <Pagination totalReviews={100} currentPage={1} />
    </Container>
  );
}

export default ReviewBox;

const Container = styled.div`
  width: 100%;

  .review-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 20px 0;
  }
`;
