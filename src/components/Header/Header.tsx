import styled from 'styled-components';
import { Logo } from 'public/assets/images';
import { Link } from 'react-router-dom';
import PATH from '@/constants/path';
import Navigation from './Navigation';

function Header() {
  return (
    <HeaderBar>
      <div className='wrapper'>
        <NavLink to={PATH.main}>
          <Logo />
        </NavLink>
        <Nav $gap={36}>
          <NavLink to={PATH.catalog}>TRADITIONAL LIQUOR SPACE</NavLink>
          <NavLink to={PATH.group_buying}>GROUP BUYING</NavLink>
        </Nav>
      </div>
      <Navigation />
    </HeaderBar>
  );
}

export default Header;

const HeaderBar = styled.header`
  width: 100%;
  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);

  .wrapper {
    display: flex;
    align-items: center;
    gap: 36px;
  }
`;

const Nav = styled.nav<{ $gap: number }>`
  display: flex;
  gap: ${({ $gap }) => $gap}px;
`;

const NavLink = styled(Link)`
  ${({ theme }) => theme.typo.body.medium[14]}
`;
