import { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import LiquorUrl from 'public/assets/images/main/mock-image1 38.svg';
import MoreButton from '../common/MoreButton';
import Category from '../common/Category';
import BestLiquorInfo from './BestSaleLiquorInfo';

import { CONTENT } from '../../constants/button';
import { CATEGORY_TEXT } from '../../constants/category';

function BestSale() {
  const [selectedButton, setSelectedButton] = useState(CONTENT.rank);

  const handleClickButton = (content: string) => {
    setSelectedButton(content);
  };

  return (
    <BestSaleContainer>
      <CategoryHeader>
        <div className='wrapper'>
          <Category
            title={CATEGORY_TEXT.best.title}
            description={CATEGORY_TEXT.best.description}
          />
          <ButtonCategory>
            {Object.values(CONTENT).map((content) => (
              <Button
                key={content}
                type='button'
                $theme={selectedButton === content ? 'primary' : 'neutral'}
                $style='outlined'
                $size='sm'
                onClick={() => handleClickButton(content)}
              >
                {content}
              </Button>
            ))}
          </ButtonCategory>
        </div>
        <MoreButton>더보기</MoreButton>
      </CategoryHeader>
      <LiquorContent>
        {/* 추후 서버 데이터로 대체 예정 */}
        <BestLiquorInfo
          headText='1400명 신청'
          title='우아하고 순수한 첫번째 고래백경 13. 탁주'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
          badgeText='오늘마감'
          imageUrl={LiquorUrl}
        />
        <BestLiquorInfo
          headText='1400명 신청'
          title='우아하고 순수한 첫번째 고래백경 13. 탁주'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
          badgeText='오늘마감'
          imageUrl={LiquorUrl}
        />
        <BestLiquorInfo
          headText='1400명 신청'
          title='우아하고 순수한 첫번째 고래백경 13. 탁주'
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscin'
          badgeText='오늘마감'
          imageUrl={LiquorUrl}
        />
      </LiquorContent>
    </BestSaleContainer>
  );
}

const BestSaleContainer = styled.div`
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

const ButtonCategory = styled.div`
  display: flex;
  gap: 10px;
`;

const LiquorContent = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export default BestSale;
