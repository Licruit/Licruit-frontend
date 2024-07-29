import styled from 'styled-components';

import { IMAGES } from '@/constants/images';
import Title from '../common/Title';
import { BANNER_TEXT } from '../../constants/banner';

function JoinUs() {
  return (
    <JoinUsContainer>
      <Content>
        <InfoWrapper>
          <Title $size='36' $color='neutral50'>
            {BANNER_TEXT.join.title}
          </Title>
          <Description>{BANNER_TEXT.join.description}</Description>
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

  background: url(${IMAGES.join}) lightgray 0px -257.75px / 100% 289.522% no-repeat;
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

  &:hover {
    background: ${({ theme }) => theme.color.primary[700]};
  }
`;

export default JoinUs;
