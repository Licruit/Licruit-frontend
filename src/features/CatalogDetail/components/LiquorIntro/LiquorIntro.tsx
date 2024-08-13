import Rating from '@/components/Rating/Rating';
import { AiIcon } from 'public/assets/icons';
import styled from 'styled-components';
import StatBox from '@/components/StatBox/StatBox';
import { useLiquorDetail } from '../../hooks/useLiquorDetail';

function LiquorIntro() {
  const { liquorDetail } = useLiquorDetail();

  return (
    <Container>
      <img src={liquorDetail?.img} alt='liquorImage' className='liquor-img' />
      <div className='intro-wrapper'>
        <Statistic>
          <StatBox title='리뷰' iconType='review'>
            <span className='review-count'>10</span>
          </StatBox>
          <StatBox title='평점' iconType='review'>
            <Rating rating={4.5} hasLabel />
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
      </div>
    </Container>
  );
}

export default LiquorIntro;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .liquor-img {
    height: 500px;
    align-self: center;
  }

  .intro-wrapper {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;

const Statistic = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => theme.typo.body.medium[12]}
  color: ${({ theme }) => theme.color.neutral[400]};

  .review-count {
    ${({ theme }) => theme.typo.body.semi_bold[16]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }
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
