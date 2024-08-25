import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}

function MoreButton({ children, onClick }: Props) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

const StyledButton = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  cursor: pointer;
`;

export default MoreButton;
