import styled from 'styled-components';
import ReviewListItem from './ReviewListItem';

function ReviewBox() {
  return (
    <Container>
      <div className='review-wrapper'>
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
        <ReviewListItem />
      </div>
    </Container>
  );
}

export default ReviewBox;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  .review-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;
