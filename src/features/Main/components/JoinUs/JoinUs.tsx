import styled from 'styled-components';

import { IMAGES } from '@/constants/images';
import { useNavigate } from 'react-router-dom';
import { BANNER_TEXT } from '../../constants/banner';

function JoinUs() {
  const navigate = useNavigate();

  return (
    <JoinUsContainer>
      <Content>
        <InfoWrapper>
          <Title>{BANNER_TEXT.join.title}</Title>
          <Description>{BANNER_TEXT.join.description}</Description>
        </InfoWrapper>
        <JoinButton onClick={() => navigate('auth/signUp')}>
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
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 272px;

  background: url(${IMAGES.join}) lightgray 0 -257.75px / 100% 289.522% no-repeat;
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
  color: ${({ theme }) => theme.color.common[0]};
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
