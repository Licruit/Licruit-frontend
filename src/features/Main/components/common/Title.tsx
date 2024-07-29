import styled from 'styled-components';

interface Props {
  $size: '20' | '28' | '30' | '36';
  $color: string;
  children: React.ReactNode;
}

function Title({ $size, $color, children, ...props }: Props) {
  return (
    <StyledTitle $size={$size} $color={$color} {...props}>
      {children}
    </StyledTitle>
  );
}

const StyledTitle = styled.div<Omit<Props, 'children'>>`
  ${({ theme, $size }) => theme.typo.heading.bold[$size]};
  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'neutral900':
        return theme.color.neutral[900];
      case 'common100':
        return theme.color.common[100];
      case 'neutral50':
        return theme.color.neutral[50];
      case 'common0':
        return theme.color.common[0];
      default:
        return theme.color.neutral[900];
    }
  }};
`;

export default Title;
