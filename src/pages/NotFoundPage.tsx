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
        <TextBox>
          <h2>앗! 페이지를 찾을 수 없어요!</h2>
          <p>
            길을 잃으신 것 같아요.
            <br />
            메인으로 돌아가서 다시 시작해 보세요!
          </p>
        </TextBox>

        <div className='button-wrapper'>
          <Button
            type='button'
            $size='lg'
            $style='outlined'
            $width='full'
            $theme='primary'
            onClick={() => navigate(PATH.main)}
          >
            메인 페이지로 돌아가기
          </Button>
        </div>
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

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  text-align: center;

  h2 {
    color: ${({ theme }) => theme.color.neutral[900]};
    ${({ theme }) => theme.typo.heading.bold[30]}
  }

  p {
    color: ${({ theme }) => theme.color.neutral[400]};
    ${({ theme }) => theme.typo.body.semi_bold[16]}
  }
`;
