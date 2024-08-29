import { IMAGES } from '@/constants/images';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
      <img src={IMAGES.footer} alt='footer' />
      <ul>
        <li>&copy; LICRUIT</li>
        <li>
          <a
            href='https://www.notion.so/jimin1020/4eea2b3905514c7e831300d1abf6b349'
            target='_blank'
            rel='noopener noreferrer'
          >
            이용약관
          </a>
        </li>
        <li>
          <a
            href='https://www.notion.so/jimin1020/d50d5df8985d4147bdfb20771f45672e'
            target='_blank'
            rel='noopener noreferrer'
          >
            개인정보처리방침
          </a>
        </li>
      </ul>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  width: 100%;
  padding: 20px;

  img {
    width: 100%;
  }

  ul {
    display: flex;
    gap: 36px;
    margin-top: 20px;

    ${({ theme }) => theme.typo.body.medium[14]};
    li {
      color: ${({ theme }) => theme.color.primary[500]};

      a {
        color: ${({ theme }) => theme.color.primary[500]};
      }
    }
  }
`;
