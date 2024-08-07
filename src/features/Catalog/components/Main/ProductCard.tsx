import HeadInfo from '@/features/Main/components/common/HeadInfo';
import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

interface LiquorInfo {
  img: string;
  categoryName: string;
  name: string;
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
      <ImgContainer>
        <img src={liquorInfo.img} alt='liquor' />
      </ImgContainer>

      <LiquorInfo>
        <Badge $type='black' $size='sm'>
          {liquorInfo.categoryName}
        </Badge>
        <Title>{liquorInfo.name}</Title>
        <LiquorDescription>
          {liquorInfo.description.substring(0, 50)}
        </LiquorDescription>
      </LiquorInfo>
    </LiquorInfoContainer>
  );
}

const Title = styled.div`
  ${({ theme }) => theme.typo.heading.bold[20]};
  color: ${({ theme }) => theme.color.neutral[900]};
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
`;

const LiquorInfoContainer = styled.li`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    height: 370px;
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
