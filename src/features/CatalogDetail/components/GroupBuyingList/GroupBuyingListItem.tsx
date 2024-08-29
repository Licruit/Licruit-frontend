import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';
import PATH from '@/constants/path';
import { useNavigate } from 'react-router-dom';
import { Buying } from '../../models/buying.model';

interface Props {
  buyingData: Buying;
}

function GroupBuyingListItem({ buyingData }: Props) {
  const navigate = useNavigate();
  const { leftDate, buyingTitle, buyingContent, id } = buyingData;

  return (
    <Container onClick={() => navigate(`${PATH.group_buying}/${id}`)}>
      <Badge $size='sm' $type='black'>
        {leftDate}일 남음
      </Badge>
      <h2 className='item-name'>{buyingTitle}</h2>
      <p>{buyingContent}</p>
    </Container>
  );
}

export default GroupBuyingListItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  cursor: pointer;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.neutral[900]};

  .item-name {
    ${({ theme }) => theme.typo.heading.bold[24]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  p {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
