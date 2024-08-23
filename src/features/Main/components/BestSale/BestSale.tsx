import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import MoreButton from '../common/MoreButton';
import Category from '../common/Category';
import BestLiquorInfo from './BestSaleLiquorInfo';
import { CONTENT } from '../../constants/button';
import { CATEGORY_TEXT } from '../../constants/category';
import useBestSaleQuery from '../../hooks/useBestSaleQuery';
import { BestSaleParams, BestSaleRes } from '../../models/bestsale.model';

function BestSale() {
  const [selectedButton, setSelectedButton] = useState(CONTENT.ranking);
  const [liquorContent, setLiquorContent] = useState<BestSaleRes['buyings']>(
    []
  );
  const navigate = useNavigate();

  const sort = Object.keys(CONTENT).find(
    (key) => CONTENT[key as keyof typeof CONTENT] === selectedButton
  ) as BestSaleParams;

  const { data: bestSaleLiquor } = useBestSaleQuery(sort);

  useEffect(() => {
    if (bestSaleLiquor) setLiquorContent(bestSaleLiquor.slice(0, 3));
  }, [bestSaleLiquor]);

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
        <MoreButton onClick={() => navigate('group-buying?sort=ranking')}>
          더보기
        </MoreButton>
      </CategoryHeader>
      <LiquorContent>
        {/* 추후 서버 데이터로 대체 예정 */}
        {liquorContent.map((liquorInfo) => (
          <BestLiquorInfo
            orderCount={liquorInfo.orderCount}
            title={liquorInfo.title}
            description={liquorInfo.content}
            leftDate={liquorInfo.leftDate}
            imageUrl={liquorInfo.img}
            onClick={() => navigate(`group-buying/${liquorInfo.id}`)}
          />
        ))}
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
