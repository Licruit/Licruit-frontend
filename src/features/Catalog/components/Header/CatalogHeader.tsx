import { useEffect, useState } from 'react';
import Search from '@/components/Header/Search';
import styled from 'styled-components';
import Category from './Category';

function CatalogHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
  width: 100%;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[400]};
  position: -webkit-sticky;
  position: sticky;
  top: 75px;
  left: 0;
  z-index: 90;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  height: ${({ isVisible }) => (isVisible ? 'auto' : '0')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition:
    transform 0.3s ease-in-out,
    opacity 0.3s ease-in-out;
  transform: ${({ isVisible }) =>
    isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  overflow: hidden;

  .classification {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.extra_bold[80]};
  color: ${({ theme }) => theme.color.neutral[900]};
  margin: 20px 0;
`;
