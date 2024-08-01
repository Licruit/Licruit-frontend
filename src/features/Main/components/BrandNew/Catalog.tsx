import styled from 'styled-components';
import Category from '../common/Category';
import CatalogList from './CatalogList';
import MoreButton from '../common/MoreButton';
import { CATEGORY_TEXT } from '../../constants/category';

function Catalog() {
  return (
    <CatalogContainer>
      <CatalogHeader>
        <Category
          title={CATEGORY_TEXT.new.title}
          description={CATEGORY_TEXT.new.description}
        />
        <MoreButton>더보기</MoreButton>
      </CatalogHeader>
      <CatalogList />
    </CatalogContainer>
  );
}

const CatalogContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const CatalogHeader = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 0;

  border-top: 2px solid ${({ theme }) => theme.color.neutral[900]};
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[900]};
`;

export default Catalog;
