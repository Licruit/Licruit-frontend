import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function MoreButton({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.div`
  ${({ theme }) => theme.typo.body.medium[14]};
  cursor: pointer;
`;

export default MoreButton;
