import styled from 'styled-components';

import Badge from '@/components/Badge/Badge';
import HeadInfo from '../common/HeadInfo';

interface Props {
  headText: string;
  imageUrl: string;
  badgeText: string;
  title: string;
  description: string;
}

function RateLiquorInfo({
  headText,
  imageUrl,
  badgeText,
  title,
  description,
}: Props) {
  return (
    <LiquorInfoContainer>
      <HeadInfo>{headText}</HeadInfo>
      <img src={imageUrl} alt='liquor' />
      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {badgeText}
        </Badge>
        <LiquorTitle>{title}</LiquorTitle>
        <LiquorDescription>{description}</LiquorDescription>
      </LiquorInfo>
    </LiquorInfoContainer>
  );
}

const LiquorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
  }
`;

const LiquorInfo = styled.div`
  width: 264px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const LiquorTitle = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const LiquorDescription = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
`;

export default RateLiquorInfo;
