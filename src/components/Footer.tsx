import { IMAGES } from '@/constants/images';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <img src={IMAGES.footer} alt='footer' />
      <ul>
        <li>&copy; LICRUIT</li>
        <li>이용약관</li>
        <li>개인정보처리방침</li>
      </ul>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  padding: 20px 0;

  img {
    width: 100%;
  }

  ul {
    display: flex;
    margin-top: 20px;
    gap: 36px;
    ${({ theme }) => theme.typo.body.medium[14]};
    color: ${({ theme }) => theme.color.primary[500]};
  }
`;
