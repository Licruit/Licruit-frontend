import Category from '@/components/Header/Category';
import styled from 'styled-components';

function CatalogHeader() {
  return (
    <Container>
      <Title>
        TRADITIONAL LIQUOR SPACE
        <Category type='catalog' />
      </Title>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div``;
const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  color: ${({ theme }) => theme.color.neutral[900]};
  margin-bottom: 20px;
`;
