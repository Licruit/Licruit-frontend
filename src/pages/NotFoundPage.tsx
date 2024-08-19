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
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;

  span {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

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
