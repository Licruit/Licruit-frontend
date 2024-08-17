import styled from 'styled-components';

import { Badge } from '@/styles/components/Badge';
import HeadInfo from '../common/HeadInfo';
import { LiquorInfoProps } from '../../types/main';

function RateLiquorInfo({
  headText,
  imageUrl,
  badgeText,
  title,
  description,
}: LiquorInfoProps) {
  return (
    <LiquorInfoContainer>
      <HeadInfo>{headText}</HeadInfo>
      <img src={imageUrl} alt='liquor' />
      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {badgeText}
        </Badge>
        <Title>{title}</Title>
        <LiquorDescription>{description}</LiquorDescription>
      </LiquorInfo>
    </LiquorInfoContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const LiquorInfoContainer = styled.li`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
  }
`;

const LiquorInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  width: 264px;
`;

const LiquorDescription = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
`;

export default RateLiquorInfo;
