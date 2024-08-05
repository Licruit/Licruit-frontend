import styled from 'styled-components';

export const Badge = styled.div<{
  $size: 'lg' | 'sm';
  $type: 'black' | 'white';
}>`
  width: fit-content;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typo.body.semi_bold[14]}

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
