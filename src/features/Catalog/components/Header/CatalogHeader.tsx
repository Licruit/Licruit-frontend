import PATH from '@/constants/path';
import { useScroll } from '@/hooks/gesture/useScroll';
import Search from '@/components/Header/Search';
import styled from 'styled-components';
import Category from './Category';

function CatalogHeader() {
  const { isHided } = useScroll();

  return (
    <Container $isHided={isHided}>
      <Title>TRADITIONAL LIQUOR SPACE</Title>
      <div className='classification'>
        <Category />
        <Search
          placeholder='찾고 싶은 전통주를 입력하세요'
          searchPath={PATH.catalog}
        />
      </div>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div<{ $isHided: boolean }>`
  position: sticky;
  z-index: 90;
  top: 75px;
  left: 0;

  overflow: hidden;

  width: 100%;
  padding: 0 20px;

  background: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};

  transition: all 0.3s ease-in-out;
  opacity: ${({ $isHided }) => ($isHided ? 0 : 1)};
  transform: ${({ $isHided }) => ($isHided ? 'translateY(-100%)' : 'none')};

  .classification {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

export const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  margin: 20px 0;
  color: ${({ theme }) => theme.color.neutral[900]};
`;
