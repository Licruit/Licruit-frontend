import { ReviewIcon } from 'public/assets/icons';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  children: React.ReactNode;
}

function StatBox({ title, children }: Props) {
  return (
    <Container>
      <div className='title'>
        <ReviewIcon fill='#8e9097' width={18} height={18} />
        {title}
      </div>
      {children}
    </Container>
  );
}

export default StatBox;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  .title {
    display: flex;
    gap: 4px;
  }

  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;
