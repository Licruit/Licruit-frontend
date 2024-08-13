import styled from 'styled-components';

export const Divider = styled.hr`
  border: 0;
  width: 100%;
  height: 1px;
  margin: 0;
  background: ${({ theme }) => theme.color.neutral[400]};
`;
