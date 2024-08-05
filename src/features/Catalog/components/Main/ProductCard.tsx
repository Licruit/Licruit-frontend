import HeadInfo from '@/features/Main/components/common/HeadInfo';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

interface LiquorInfo {
  imageUrl: string;
  badgeText: string;
  title: string;
  description: string;
}

interface Props {
  headText?: string;
  liquorInfo: LiquorInfo;
}

function ProductCard({ headText, liquorInfo }: Props) {
  return (
    <LiquorInfoContainer>
      {headText && <HeadInfo>{headText}</HeadInfo>}
      <img src={liquorInfo.imageUrl} alt='liquor' />
      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {liquorInfo.badgeText}
        </Badge>
        <Title>{liquorInfo.title}</Title>
        <LiquorDescription>{liquorInfo.description}</LiquorDescription>
      </LiquorInfo>
    </LiquorInfoContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;

const LiquorInfoContainer = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;

  img {
    width: 100%;
  }

  cursor: pointer;
`;

const LiquorInfo = styled.div`
  width: 264px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

const LiquorDescription = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  color: ${({ theme }) => theme.color.neutral[400]};
`;

export default ProductCard;
