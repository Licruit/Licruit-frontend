import Button from '@/components/Button/Button';
import Header from '@/components/Header/Header';
import PATH from '@/constants/path';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <Content>
        <Title>
          <h1>404</h1>
          <h3>Not Found</h3>
        </Title>

        <span>존재하지 않는 페이지입니다.</span>
        <Button
          type='button'
          $size='md'
          $style='solid'
          $theme='primary'
          onClick={() => navigate(PATH.main)}
        >
          메인 페이지로
        </Button>
      </Content>
    </Container>
  );
}

export default NotFoundPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.color.primary[500]};

  h1 {
    font-size: 90px;
    font-weight: 300;
  }

  h3 {
    font-size: 40px;
    font-weight: 600;
  }
`;
