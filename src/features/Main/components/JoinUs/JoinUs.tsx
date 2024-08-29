import styled from 'styled-components';
import { IMAGES } from '@/constants/images';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import { Suspense } from 'react';
import LoadingSpinner from '@/components/Spinner/Spinner';
import { BANNER_TEXT } from '../../constants/banner';

function JoinUs() {
  const navigate = useNavigate();

  return (
    <JoinUsContainer>
      <Suspense fallback={<LoadingSpinner />}>
        <img
          className='join-banner'
          src={IMAGES.join}
          alt='join-banner'
          loading='lazy'
        />
      </Suspense>
      <Content>
        <InfoWrapper>
          <Title>{BANNER_TEXT.join.title}</Title>
          <Description>{BANNER_TEXT.join.description}</Description>
        </InfoWrapper>
        <JoinButton onClick={() => navigate(PATH.join)}>
          회원가입 하러가기
        </JoinButton>
      </Content>
    </JoinUsContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[36]};
  color: ${({ theme }) => theme.color.neutral[50]};
`;

const JoinUsContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 272px;

  .join-banner {
    position: absolute;
    z-index: -10;
    top: 0;
    left: 0;

    width: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
  text-align: center;
`;

const JoinButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 197px;
  padding: 14.5px 24px;

  color: ${({ theme }) => theme.color.neutral[50]};

  background: ${({ theme }) => theme.color.primary[500]};

  &:hover {
    background: ${({ theme }) => theme.color.primary[700]};
  }
`;

export default JoinUs;
