import styled from 'styled-components';

import { Badge } from '@/styles/components/Badge';
import HeaderInfo from '../common/HeadInfo';
import { LiquorInfoProps } from '../../types/main';

function BestSaleLiquorInfo({
  headText,
  badgeText,
  title,
  description,
  imageUrl,
}: LiquorInfoProps) {
  return (
    <LiquorInfoContainer>
      <HeaderInfo>{headText}</HeaderInfo>
      <LiquorInfoWrapper $imageUrl={imageUrl}>
        <LiquorInfo>
          <Badge $size='sm' $type='white'>
            {badgeText}
          </Badge>
          <Title>{title}</Title>
          <LiquorDescription>{description}</LiquorDescription>
        </LiquorInfo>
      </LiquorInfoWrapper>
    </LiquorInfoContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[36]};
  color: ${({ theme }) => theme.color.common[100]};
`;

const LiquorInfoContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const LiquorInfoWrapper = styled.div<{ $imageUrl: string }>`
  cursor: pointer;

  width: 453px;
  height: 453px;
  padding-top: 175px;

  background: url(${({ $imageUrl }) => $imageUrl}) lightgray 50% / cover
    no-repeat;
`;

const LiquorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-start;
  justify-content: end;

  width: 100%;
  height: 278px;
  padding: 20px;

  background: linear-gradient(0deg, #000 0%, rgb(0 0 0 / 0%) 100%);
`;

const LiquorDescription = styled.p`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[500]};
`;

export default BestSaleLiquorInfo;
