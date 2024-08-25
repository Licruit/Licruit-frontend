import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import Category from '../common/Category';
import MoreButton from '../common/MoreButton';
import RateLiquorInfo from './RateLiquorInfo';
import { CATEGORY_TEXT } from '../../constants/category';
import useHighRateQuery from '../../hooks/useHighRateQuery';

function Rate() {
  const navigate = useNavigate();
  const { highRateLiquors } = useHighRateQuery();

  const liquors = highRateLiquors || [];

  return (
    <RateContainer>
      <CategoryHeader>
        <Category
          title={CATEGORY_TEXT.rate.title}
          description={CATEGORY_TEXT.rate.description}
        />
        <MoreButton onClick={() => navigate(PATH.catalog)}>더보기</MoreButton>
      </CategoryHeader>
      <LiquorContent>
        {liquors.map((liquorItem) => (
          <RateLiquorInfo
            key={liquorItem.id}
            id={liquorItem.id}
            reviewAvg={Number(liquorItem.reviewAvg)}
            imageUrl={liquorItem.img}
            badgeText={liquorItem.categoryName}
            title={liquorItem.name}
            description={liquorItem.description}
          />
        ))}
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
