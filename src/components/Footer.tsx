import { IMAGES } from '@/constants/images';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <img src={IMAGES.footer} alt='footer' />
      <ul>
        <li>© LICRUIT</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
      </ul>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 20px 0;
  ul {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.primary[500]};
    margin-top: 20px;
    display: flex;
    gap: 36px;
  }
`;
