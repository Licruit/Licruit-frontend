import React from 'react';
import styled from 'styled-components';

type ButtonStyle = 'solid' | 'outlined';
type ButtonTheme = 'primary' | 'neutral';
type Size = 'sm' | 'md' | 'lg';
type Width = 'fit' | 'full';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonStyle: ButtonStyle;
  theme: ButtonTheme;
  width?: Width;
  size: Size;
}

function Button({
  children,
  buttonStyle,
  theme,
  size,
  width = 'fit',
  ...props
}: Props) {
  return (
    <StyledButton
      $style={buttonStyle}
      $width={width}
      $theme={theme}
      $size={size}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default Button;

const StyledButton = styled.button<{
  $style: ButtonStyle;
  $theme: ButtonTheme;
  $width: Width;
  $size: Size;
}>`
  ${({ theme }) => theme.typo.heading.bold[14]};
  width: ${({ $width }) => ($width === 'fit' ? 'fit-content' : '100%')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  &:disabled {
    cursor: default;
    color: ${({ theme }) => theme.color.neutral[400]};
    background-color: ${({ $style, theme }) =>
      $style === 'solid' ? theme.color.neutral[200] : 'none'};
    border-color: ${({ $style, theme }) =>
      $style === 'outlined' ? theme.color.neutral[400] : 'none'};
  }

  &:hover:not(:disabled) {
    ${({ $style, $theme, theme }) => {
      const hoverColor =
        $theme === 'primary'
          ? theme.color.primary[700]
          : theme.color.neutral[800];
      if ($style === 'solid') {
        return {
          backgroundColor: hoverColor,
        };
      }
      return {
        color: hoverColor,
        borderColor: hoverColor,
      };
    }}
  }

  ${({ $style, $theme, theme }) => {
    const outlinedColor =
      $theme === 'primary'
        ? theme.color.primary[500]
        : theme.color.neutral[600];
    if ($style === 'solid') {
      return {
        backgroundColor:
          $theme === 'primary'
            ? theme.color.primary[500]
            : theme.color.neutral[900],
        color: theme.color.neutral[50],
      };
    }
    return {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: outlinedColor,
      color: outlinedColor,
    };
  }}

  ${({ $size }) => {
    if ($size === 'sm') {
      return {
        padding: '8.5px 16px',
        fontWeight: '600',
      };
    }
    if ($size === 'md') {
      return {
        padding: '14.5px 24px',
      };
    }
    return {
      padding: '18.5px 24px',
    };
  }}
`;
