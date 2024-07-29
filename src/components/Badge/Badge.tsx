import React from 'react';
import styled from 'styled-components';

interface Props {
  $size: 'lg' | 'sm';
  $type: 'black' | 'white';
  children: React.ReactNode;
}

function Badge({ $size, $type, children }: Props) {
  return (
    <StyledBadge $size={$size} $type={$type}>
      {children}
    </StyledBadge>
  );
}

const StyledBadge = styled.div<Omit<Props, 'children'>>`
  width: fit-content;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typo.body.semi_bold[16]}

  ${({ $size }) => {
    if ($size === 'lg') {
      return 'padding: 10px 20px;';
    }
    if ($size === 'sm') {
      return 'padding: 8px 16px;';
    }
  }}

  ${({ $type, theme }) => {
    if ($type === 'black') {
      return `border: 1px solid ${theme.color.common[0]};
      color: ${theme.color.neutral[900]};`;
    }
    if ($type === 'white') {
      return `border: 1px solid ${theme.color.common[100]};
      color: ${theme.color.neutral[50]};`;
    }
  }}
`;

export default Badge;
