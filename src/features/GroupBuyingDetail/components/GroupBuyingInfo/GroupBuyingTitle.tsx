import { Badge } from '@/styles/components/Badge';
import styled from 'styled-components';

function GroupBuyingTitle() {
  return (
    <Container>
      <Badge $size='lg' $type='black'>
        오늘 마감
      </Badge>
      <h1>
        우아하고 순수한 첫번째 고래
        <br />
        백경 13. 탁주
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum
        dolor sit amet, consectetur adipiscin
      </p>
    </Container>
  );
}

export default GroupBuyingTitle;

const Container = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 20px;
  border-bottom: 2px solid ${({ theme }) => theme.color.neutral[900]};

  h1 {
    ${({ theme }) => theme.typo.heading.bold[36]}
    color: ${({ theme }) => theme.color.neutral[900]};
  }

  p {
    ${({ theme }) => theme.typo.body.medium[14]}
    color: ${({ theme }) => theme.color.neutral[400]};
  }
`;
