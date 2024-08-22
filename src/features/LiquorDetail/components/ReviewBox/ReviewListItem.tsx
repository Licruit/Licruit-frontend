import Rating from '@/components/Rating/Rating';
import styled from 'styled-components';

function ReviewListItem() {
  return (
    <Container>
      <div className='profile-wrapper'>
        <Profile>
          <div className='temp-profile' />
          <div className='info-wrapper'>
            <h5>작성자</h5>
            <span>607-**-****</span>
          </div>
        </Profile>
        <ReviewInfo>
          <Rating rating={3.5} size={20} />
          <span className='date'>2024.08.01</span>
        </ReviewInfo>
      </div>
      <p className='review'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur t amet, consectett amet, consectet Lorem
        ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit
        amet, consectetur t amet, consectett amet, consectet ...Lorem ipsum
        dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet,
        consectetur t amet, consectett amet, consectet
      </p>
    </Container>
  );
}

export default ReviewListItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  .profile-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .review {
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  .temp-profile {
    width: 48px;
    height: 48px;
    background-color: ${({ theme }) => theme.color.primary[500]};
  }

  .info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 2px;

    h5 {
      color: ${({ theme }) => theme.color.neutral[900]};
      ${({ theme }) => theme.typo.body.semi_bold[14]}
    }

    span {
      color: ${({ theme }) => theme.color.neutral[600]};
      ${({ theme }) => theme.typo.body.medium[12]}
    }
  }
`;

const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-end;
  justify-content: center;

  .date {
    margin-right: 5px;
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.body.medium[12]}
  }
`;
