import { useState } from 'react';
import Search from '@/components/Header/Search';
import styled from 'styled-components';
import Category from './Category';
import { useScrollThrottled } from '../../hooks/useScroll';

function CatalogHeader() {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = (direction: 'down' | 'up'): void => {
    if (direction === 'down') {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useScrollThrottled(handleScroll, 200);

  return (
    <Container isVisible={isVisible}>
      <Title>TRADITIONAL LIQUOR SPACE</Title>
      <div className='classification'>
        <Category />
        <Search />
      </div>
    </Container>
  );
}

export default CatalogHeader;

const Container = styled.div<{ isVisible: boolean }>`
  position: sticky;
  z-index: 90;
  top: 75px;
  left: 0;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-100%)'};

  overflow: hidden;

  width: 100%;
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  padding: 0 20px;

  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  background: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};

  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;

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
