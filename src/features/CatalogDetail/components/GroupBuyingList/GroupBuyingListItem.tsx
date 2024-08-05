import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

function GroupBuyingListItem() {
  return (
    <Container>
      <Badge $size='sm' $type='black'>
        20일 남음
      </Badge>
      <h2 className='item-name'>
        우아하고 순수한 첫번째 고래
        <br />
        백경 13. 탁주
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur t amet, consectett amet, consectet ...
      </p>
    </Container>
  );
}

export default GroupBuyingListItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
