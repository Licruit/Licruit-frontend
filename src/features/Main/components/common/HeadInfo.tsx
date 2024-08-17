import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

function HeadInfo({ children }: Props) {
  return <StyledHeadInfo>{children}</StyledHeadInfo>;
}

const StyledHeadInfo = styled.div`
  width: 100%;
  padding: 20px;

  font-size: ${({ theme }) => theme.typo.heading.bold[16]};
  color: ${({ theme }) => theme.color.neutral[50]};

  background: ${({ theme }) => theme.color.primary[500]};
`;

export default HeadInfo;
