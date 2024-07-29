import PATH from '@/constants/path';
import useSessionStore from '@/store/sessionStore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CartIcon from 'public/assets/icons/shoppingbag.svg?react';

function Navigation() {
  const isLoggedIn = useSessionStore((state) => state.isLoggedIn);

  return (
    <div>
      {isLoggedIn ? (
        <Nav $gap={24}>
          <NavLink to={PATH.login}>MY PAGE</NavLink>
          <LinkWithIcon>
            <li>
              <NavLink to={PATH.join}>LOGOUT</NavLink>
            </li>
            <li className='cart-wrapper'>
              <CartIcon fill='#141517' />
              <span>(0)</span>
            </li>
          </LinkWithIcon>
        </Nav>
      ) : (
        <Nav $gap={24}>
          <NavLink to={PATH.login}>LOGIN</NavLink>
          <NavLink to={PATH.join}>SIGN UP</NavLink>
        </Nav>
      )}
    </div>
  );
}

export default Navigation;

const Nav = styled.nav<{ $gap: number }>`
  display: flex;
  align-items: center;
  gap: ${({ $gap }) => $gap}px;
`;

const NavLink = styled(Link)`
  ${({ theme }) => theme.typo.body.medium[14]}
`;

const LinkWithIcon = styled.ul`
  display: flex;
  align-items: center;

  .cart-wrapper {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  span {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[600]};
  }

  li:first-child::after {
    content: '|';
    line-height: 20px;
    float: right;
    color: rgba(0, 0, 0, 0.6);
    padding: 0 12px;
    display: block;
  }
`;
