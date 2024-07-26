import styled from 'styled-components';
import {} from '@/constants/icons';
import { TOS } from '../../constants/tos';
import TermItem, { CheckIcon } from './ConsentTerm';

function ConsentForm() {
  return (
    <Container>
      <AllAgree>
        <CheckIcon />
        모두 동의
      </AllAgree>
      <ul>
        {TOS.map((term) => {
          return (
            <li key={term.id}>
              <TermItem {...term} />
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

export default ConsentForm;

const Container = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const AllAgree = styled.div`
  margin-bottom: 20px;
  padding: 18.5px 24px;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.color.neutral[400]};
  ${({ theme }) => theme.typo.body.medium[14]};
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;
