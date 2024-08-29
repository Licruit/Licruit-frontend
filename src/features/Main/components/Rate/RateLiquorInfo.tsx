import styled from 'styled-components';
import { Badge } from '@/styles/components/Badge';
import { useNavigate } from 'react-router-dom';
import PATH from '@/constants/path';
import HeadInfo from '../common/HeadInfo';

interface Props {
  id: number;
  reviewAvg: number;
  imageUrl: string;
  badgeText: string;
  title: string;
  description: string;
}

function RateLiquorInfo({
  id,
  reviewAvg,
  imageUrl,
  badgeText,
  title,
  description,
}: Props) {
  const navigate = useNavigate();

  return (
    <LiquorInfoContainer onClick={() => navigate(`${PATH.catalog}/${id}`)}>
      <HeadInfo>현재 {reviewAvg}잔이에요 !</HeadInfo>
      <img src={imageUrl} alt={title} loading='lazy' />
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
  align-items: center;

  img {
    height: 264px;
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
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

  color: ${({ theme }) => theme.color.neutral[400]};
  text-overflow: ellipsis;
  ${({ theme }) => theme.typo.body.medium[14]};
`;

export default RateLiquorInfo;
