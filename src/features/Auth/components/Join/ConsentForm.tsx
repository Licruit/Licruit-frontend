import { useState } from 'react';
import styled from 'styled-components';
import { TOS } from '../../constants/tos';
import TermItem, { CheckIcon } from './ConsentTerm';

function ConsentForm() {
  const [term, setTerm] = useState(TOS);

  const handleChecked = (id: number) => {
    setTerm((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
    console.log(term);
  };

  const handleAllChecked = () => {
    setTerm((prev) => prev.map((item) => ({ ...item, checked: true })));
  };

  return (
    <Container>
      <AllAgree onClick={handleAllChecked}>
        <CheckIcon checked={term.every((item) => item.checked)} />
        모두 동의
      </AllAgree>
      <ul>
        {term.map((item) => {
          return (
            <TermItem
              key={item.id}
              {...item}
              onClick={() => handleChecked(item.id)}
            />
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
  ${({ theme }) => theme.typo.body.medium[14]}
  border: 0.8px solid ${({ theme }) => theme.color.neutral[400]};
`;
