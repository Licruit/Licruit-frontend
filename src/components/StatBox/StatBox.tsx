import { CalendarIcon, ReviewIcon } from 'public/assets/icons';
import React from 'react';
import styled, { useTheme } from 'styled-components';

interface Props {
  title: string;
  iconType: 'review' | 'calendar';
  children: React.ReactNode;
}

function StatBox({ title, iconType, children }: Props) {
  const theme = useTheme();
  return (
    <Container>
      <div className='title'>
        {iconType === 'review' ? (
          <ReviewIcon fill={theme.color.neutral[400]} width={18} height={18} />
        ) : (
          <CalendarIcon
            fill={theme.color.neutral[400]}
            width={18}
            height={18}
          />
        )}
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
  justify-content: center;
  align-items: center;
  gap: 4px;

  .title {
    ${({ theme }) => theme.typo.body.medium[12]}
    color: ${({ theme }) => theme.color.neutral[400]};
    display: flex;
    gap: 4px;
  }

  &:last-child {
    border-left: 1px solid ${({ theme }) => theme.color.neutral[400]};
  }
`;
