import styled from 'styled-components';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import Category from '../common/Category';
import MoreButton from '../common/MoreButton';
import RateLiquorInfo from './RateLiquorInfo';

function Rate() {
  return (
    <RateContainer>
      <CategoryHeader>
        <Category
          title='사장님들의 술직 리뷰'
          description='솔직한 사장님들의 리뷰 모음 ! 진짜 맛을 여기서 찾아보세요'
        />
        <MoreButton>더보기</MoreButton>
      </CategoryHeader>
      <LiquorContent>
        {/* 서버 데이터 대체 예정 */}
        <RateLiquorInfo
          headText='현재 3.5잔이에요 !'
          imageUrl={LiquorUrl}
          badgeText='탁주'
          title='홉미드'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
        />
        <RateLiquorInfo
          headText='현재 3.5잔이에요 !'
          imageUrl={LiquorUrl}
          badgeText='탁주'
          title='홉미드'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
        />
        <RateLiquorInfo
          headText='현재 3.5잔이에요 !'
          imageUrl={LiquorUrl}
          badgeText='탁주'
          title='홉미드'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
        />
        <RateLiquorInfo
          headText='현재 3.5잔이에요 !'
          imageUrl={LiquorUrl}
          badgeText='탁주'
          title='홉미드'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
        />
        <RateLiquorInfo
          headText='현재 3.5잔이에요 !'
          imageUrl={LiquorUrl}
          badgeText='탁주'
          title='홉미드'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
        />
      </LiquorContent>
    </RateContainer>
  );
}

const RateContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .wrapper {
    display: flex;
    flex-direction: column;

    gap: 20px;
  }
`;

const LiquorContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export default Rate;
