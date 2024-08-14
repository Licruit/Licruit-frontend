import Search from '@/components/Header/Search';

import styled from 'styled-components';
import Category from './Category';

function CatalogHeader() {
  return (
    <Container>
      <Title>TRADITIONAL LIQUOR SPACE</Title>
      <div className='classification'>
        <Category />
        <Search />
      </div>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div`
  position: sticky;
  z-index: 99;
  top: 76px;
  left: 0;

  width: 100%;
  padding: 0 20px;

  background: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};

  .classification {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  margin: 20px 0;
  color: ${({ theme }) => theme.color.neutral[900]};
`;
