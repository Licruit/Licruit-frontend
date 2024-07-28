import { useState } from 'react';
import styled from 'styled-components';
import Check from 'public/assets/icons/check.svg?react';
import { TOS } from '../../constants/tos';
import TermItem from './TermItem';

function ConsentForm() {
  const [term, setTerm] = useState(TOS);

  const handleChecked = (id: number) => {
    setTerm((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleAllChecked = () => {
    setTerm((prev) => prev.map((item) => ({ ...item, checked: true })));
  };

  return (
    <Container>
      <AllAgree onClick={handleAllChecked}>
        <div className='checkBox'>
          <FormIcon $checked={term.every((item) => item.checked)}>
            <Check />
          </FormIcon>
        </div>
        모두 동의
      </AllAgree>
      <ul>
        {term.map((item) => {
          return <TermItem key={item.id} {...item} onClick={handleChecked} />;
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

const FormIcon = styled.span<{ $checked: boolean }>`
  width: 24px;
  height: 24px;
  & svg {
    fill: ${({ $checked, theme }) =>
      $checked ? theme.color.primary[500] : theme.color.neutral[400]};
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
  cursor: pointer;
  .checkBox {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
