import Search from '@/components/Header/Search';

import styled from 'styled-components';
import { useCategory } from '../../hooks/useCatalog';

function CatalogHeader() {
  const { category } = useCategory();
  console.log(category);
  return (
    <Container>
      <Title>TRADITIONAL LIQUOR SPACE</Title>
      <div className='classification'>
        {/* <Tab type='main' /> */}
        <Search />
      </div>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
  .classification {
    display: flex;
    justify-content: space-between;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  color: ${({ theme }) => theme.color.neutral[900]};
  margin: 20px 0;
`;
