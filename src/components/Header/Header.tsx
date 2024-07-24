import styled from 'styled-components';
import Logo from 'public/assets/images/Logo.svg?react';
import { Link, useLocation } from 'react-router-dom';
import PATH from '@/constants/path';

function Header() {
  const { pathname } = useLocation();

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
      {!pathname.startsWith('/auth') && (
        <Nav $gap={24}>
          <NavLink to={PATH.login}>LOGIN</NavLink>
          <NavLink to={PATH.join}>SIGN UP</NavLink>
        </Nav>
      )}
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

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  left: 0;

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
