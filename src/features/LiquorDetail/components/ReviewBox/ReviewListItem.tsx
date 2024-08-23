import Rating from '@/components/Rating/Rating';
import styled from 'styled-components';
import { formatDate } from '@/utils/date';
import { Review } from '../../models/review.model';
import { formatCompanyNumber } from '../../utils/formatCompanyNumber';

interface Props {
  reviewData: Review;
}

function ReviewListItem({ reviewData }: Props) {
  const { img, name, userCompanyNumber, content, score, createdAt } =
    reviewData;

  return (
    <Container>
      <div className='profile-wrapper'>
        <Profile>
          <img src={img} alt='user profile' />
          <div className='info-wrapper'>
            <h5>{name}</h5>
            <span>{formatCompanyNumber(userCompanyNumber)}</span>
          </div>
        </Profile>
        <ReviewInfo>
          <Rating rating={score} size={20} />
          <span className='date'>{formatDate(createdAt)}</span>
        </ReviewInfo>
      </div>
      <p className='review'>{content}</p>
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
    white-space: pre-wrap;
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.body.medium[14]}
  }
`;

const Profile = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
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
