import styled from 'styled-components';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import Category from '../common/Category';
import MoreButton from '../common/MoreButton';
import RateLiquorInfo from './RateLiquorInfo';
import { CATEGORY_TEXT } from '../../constants/category';

function Rate() {
  return (
    <RateContainer>
      <CategoryHeader>
        <Category
          title={CATEGORY_TEXT.rate.title}
          description={CATEGORY_TEXT.rate.description}
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const LiquorContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
`;

export default Rate;
