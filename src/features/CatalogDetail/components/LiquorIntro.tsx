import Rating from '@/components/Rating/Rating';
import { AiIcon, GlassIcon, ReviewIcon } from 'public/assets/icons';
import styled from 'styled-components';

function LiquorIntro() {
  return (
    <Container>
      <Statistic>
        <StatBox>
          <div className='title'>
            <ReviewIcon fill='#ADAEB1' width={18} height={18} />
            리뷰
          </div>
          <span className='review-count'>10</span>
        </StatBox>
        <StatBox>
          <div className='title'>
            <GlassIcon fill='#ADAEB1' width={18} height={18} />
            평점
          </div>
          <RatingWrapper>
            <span>3.9</span>
            <Rating />
          </RatingWrapper>
        </StatBox>
      </Statistic>
      <Summary>
        <AiIcon />
        <p>
          백경13은 부드럽고 깔끔한 맛으로, 다양한 음식과 완벽하게 어울립니다.
          <br />
          전통주의 깊은 맛과 현대적인 감각을 동시에 즐기고 싶다면, 지금 바로
          백경13을 선택하세요!
        </p>
      </Summary>
    </Container>
  );
}

export default LiquorIntro;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;

const Statistic = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.typo.body.medium[12]}
  color: ${({ theme }) => theme.color.neutral[400]};
`;

const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;

  .title {
    display: flex;
    gap: 4px;
  }

  .review-count {
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  span {
    ${({ theme }) => theme.typo.body.semi_bold[16]}
  }

  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.primary[500]};
`;

const Summary = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 20px;
  color: ${({ theme }) => theme.color.primary[500]};
  background-color: ${({ theme }) => theme.color.primary[100]};

  p {
    flex: 1;
    ${({ theme }) => theme.typo.body.semi_bold[14]}
    white-space: pre-wrap;
  }
`;
