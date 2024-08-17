import styled from 'styled-components';

export const Divider = styled.hr`
  width: 100%;
  height: 1px;
  margin: 0;

  background: ${({ theme }) => theme.color.neutral[400]};
  border: 0;
`;
