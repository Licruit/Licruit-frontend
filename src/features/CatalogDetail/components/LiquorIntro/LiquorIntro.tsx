import Rating from '@/components/Rating/Rating';
import styled from 'styled-components';
import StatBox from '@/components/StatBox/StatBox';

function LiquorIntro() {
  return (
    <Container>
      <StatBox title='리뷰' iconType='review'>
        <span className='review-count'>10</span>
      </StatBox>
      <StatBox title='평점' iconType='review'>
        <Rating rating={4.5} hasLabel />
      </StatBox>
    </Container>
  );
}

export default LiquorIntro;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  width: 100%;
  padding: 20px;

  color: ${({ theme }) => theme.color.neutral[400]};

  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[12]}

  .review-count {
    ${({ theme }) => theme.typo.body.semi_bold[16]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }
`;
