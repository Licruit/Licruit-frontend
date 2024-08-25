import styled from 'styled-components';

import { Badge } from '@/styles/components/Badge';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import HeaderInfo from '../common/HeadInfo';

export interface Props {
  id: number;
  orderCount: number;
  imageUrl: string;
  leftDate: number;
  title: string;
  description: string;
}

function BestSaleLiquorInfo({
  id,
  orderCount,
  leftDate,
  title,
  description,
  imageUrl,
}: Props) {
  const navigate = useNavigate();

  return (
    <LiquorInfoContainer onClick={() => navigate(`${PATH.group_buying}/${id}`)}>
      <HeaderInfo>{orderCount}명 신청</HeaderInfo>
      <LiquorInfoWrapper $imageUrl={imageUrl}>
        <LiquorInfo>
          <Badge $size='sm' $type='white'>
            {leftDate === 0 ? '오늘마감' : `${leftDate}일전`}
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

  background: url(${({ $imageUrl }) => $imageUrl}) lightgray center no-repeat;
  background-size: contain;
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
