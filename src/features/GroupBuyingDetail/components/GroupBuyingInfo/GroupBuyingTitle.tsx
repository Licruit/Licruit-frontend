import { Badge } from '@/styles/components/Badge';
import { getDday } from '@/utils/d-day';
import styled from 'styled-components';

interface Props {
  deadline: string;
  title: string;
  content: string;
}

function GroupBuyingTitle({ deadline, title, content }: Props) {
  return (
    <Container>
      <Badge $size='lg' $type='black'>
        {getDday(deadline)}
      </Badge>
      <h1>{title}</h1>
      <p>{content}</p>
    </Container>
  );
}

export default GroupBuyingTitle;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  height: fit-content;
  padding-bottom: 20px;

  white-space: pre-wrap;

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
