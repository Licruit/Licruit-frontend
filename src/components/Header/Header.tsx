import styled from 'styled-components';
import { Logo } from 'public/assets/images';
import { Link } from 'react-router-dom';
import PATH from '@/constants/path';
import Navigation from './Navigation';

function Header() {
  return (
    <HeaderBar>
      <div className='wrapper'>
        <NavLink to={PATH.main} aria-label='Home'>
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
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 20px;

  background: rgb(255 255 255 / 60%);
  backdrop-filter: blur(10px);

  .wrapper {
    display: flex;
    gap: 36px;
    align-items: center;
  }
`;

const Nav = styled.nav<{ $gap: number }>`
  display: flex;
  gap: ${({ $gap }) => $gap}px;
`;

const NavLink = styled(Link)`
  ${({ theme }) => theme.typo.body.medium[14]}
`;
