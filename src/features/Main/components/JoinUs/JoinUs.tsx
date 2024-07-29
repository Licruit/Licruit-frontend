import React from 'react';
import styled from 'styled-components';
import JoinUsUrl from 'public/assets/images/main/join-us.svg';

function JoinUs() {
  return (
    <JoinUsContainer>
      <Content>
        <InfoWrapper>
          <Title>이런 고민, 한 번쯤 해보셨나요 ?</Title>
          <Description>
            저희가 그 고민을 한 번에 해결해 드립니다 !<br /> 리쿠르트와
            함께라면, 주류 공동구매가 더 쉽고 편리해 집니다 !
          </Description>
        </InfoWrapper>
        <JoinButton>회원가입 하러가기</JoinButton>
      </Content>
    </JoinUsContainer>
  );
}

const JoinUsContainer = styled.div`
  width: 100%;
  height: 272px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: url(${JoinUsUrl}) lightgray 0px -257.75px / 100% 289.522% no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[36]};
  color: ${({ theme }) => theme.color.neutral[50]};
  text-align: center;
`;

const Description = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.common[0]};
  text-align: center;
`;

const JoinButton = styled.button`
  width: 197px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14.5px 24px;

  color: ${({ theme }) => theme.color.neutral[50]};
  background: ${({ theme }) => theme.color.primary[500]};
`;

export default JoinUs;
