import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import Category from '../common/Category';
import CatalogList from './CatalogList';
import MoreButton from '../common/MoreButton';
import { CATEGORY_TEXT } from '../../constants/category';

interface Props {
  setImageUrl: (value: string) => void;
}

function Catalog({ setImageUrl }: Props) {
  const navigate = useNavigate();

  return (
    <CatalogContainer>
      <CatalogHeader>
        <Category
          title={CATEGORY_TEXT.new.title}
          description={CATEGORY_TEXT.new.description}
        />
        <MoreButton onClick={() => navigate(PATH.catalog)}>더보기</MoreButton>
      </CatalogHeader>
      <CatalogList setImageUrl={setImageUrl} />
    </CatalogContainer>
  );
}

const CatalogContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 40px;
`;

const CatalogHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px 0;

  border-top: 2px solid ${({ theme }) => theme.color.neutral[900]};
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[900]};
`;

export default Catalog;
